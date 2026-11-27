from pathlib import Path
from shutil import copytree, ignore_patterns
import subprocess
import sys
from tempfile import TemporaryDirectory
import unittest
from zipfile import ZipFile

from scripts.install import ROOT
from scripts.package import package_catalog


class CatalogPackageTests(unittest.TestCase):
    def setUp(self):
        directory = TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.root = Path(directory.name)
        self.checkout = self.root / "checkout"
        self.checkout.mkdir()
        copytree(ROOT, self.checkout / "catalog", ignore=ignore_patterns("__pycache__"))
        (self.checkout / "unrelated.txt").write_text("Agent source fixture", encoding="utf-8")
        self.git("init")
        self.git("config", "user.name", "Catalog Fixture")
        self.git("config", "user.email", "fixture@example.invalid")
        self.git("add", ".")
        self.git("commit", "-m", "fixture")
        self.revision = self.git("rev-parse", "HEAD").strip()

    def git(self, *args):
        return subprocess.run(
            ["git", "-C", str(self.checkout), *args],
            check=True, capture_output=True, text=True,
        ).stdout

    def test_archive_is_repeatable_and_installable(self):
        first = self.root / "first.zip"
        second = self.root / "second.zip"
        package_catalog(self.checkout, self.revision, first)
        package_catalog(self.checkout, self.revision, second)
        self.assertEqual(first.read_bytes(), second.read_bytes())
        with ZipFile(first) as archive:
            names = archive.namelist()
            self.assertTrue(all(name.startswith("oddmash-skills/") for name in names))
            self.assertFalse(any("/.github/" in name or "unrelated.txt" in name for name in names))
            self.assertIn("oddmash-skills/catalog/LICENSE", names)
            archive.extractall(self.root / "extracted")
        catalog = self.root / "extracted/oddmash-skills/catalog"
        target = self.root / "installed"
        subprocess.run([sys.executable, str(catalog / "scripts/install.py"), "--target", str(target)], check=True, capture_output=True)
        self.assertTrue((target / "oddmash-quality-assurance/SKILL.md").is_file())

    def test_refuses_mutable_or_mismatched_revisions_and_existing_output(self):
        output = self.root / "catalog.zip"
        with self.assertRaises(ValueError):
            package_catalog(self.checkout, "HEAD", output)
        with self.assertRaises(subprocess.CalledProcessError):
            package_catalog(self.checkout, "f" * 40, output)
        self.assertFalse(output.exists())
        package_catalog(self.checkout, self.revision, output)
        with self.assertRaises(FileExistsError):
            package_catalog(self.checkout, self.revision, output)

    def test_release_tag_must_be_stable_exact_and_on_main(self):
        output = self.root / "catalog.zip"
        with self.assertRaises(ValueError):
            package_catalog(self.checkout, self.revision, output, tag="v1.0.0")
        self.git("tag", "skills-v1.0.0")
        with self.assertRaises(subprocess.CalledProcessError):
            package_catalog(self.checkout, self.revision, output, tag="skills-v1.0.0")
        self.git("update-ref", "refs/remotes/origin/main", self.revision)
        package_catalog(self.checkout, self.revision, output, tag="skills-v1.0.0")
        self.assertTrue(output.is_file())


if __name__ == "__main__":
    unittest.main()
