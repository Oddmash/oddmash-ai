from pathlib import Path
from shutil import copytree
from tempfile import TemporaryDirectory
import unittest

from scripts.install import ROOT, install, manifests, validate


class InstallTests(unittest.TestCase):
    def setUp(self):
        directory = TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.target = Path(directory.name) / "skills"
        self.shared, self.products = manifests(ROOT)

    def test_repository_validates_without_editing_target(self):
        self.assertGreater(validate(ROOT), len(self.shared))
        self.assertEqual(install(self.shared, self.target, check=True), len(self.shared))
        self.assertFalse(self.target.exists())

    def test_links_are_readable_idempotent_and_global_only(self):
        self.assertEqual(install(self.shared, self.target), len(self.shared))
        self.assertEqual(install(self.shared, self.target), 0)
        for manifest in self.shared:
            link = self.target / manifest.parent.name
            self.assertTrue(link.is_symlink())
            self.assertEqual((link / "SKILL.md").resolve(), manifest)
        self.assertFalse((self.target / "kowrap-landing").exists())

    def test_developer_documentation_is_discoverable_as_shared_skill(self):
        documentation = ROOT / "skills/oddmash-developer-documentation/SKILL.md"
        self.assertIn(documentation, self.shared)
        install([documentation], self.target)
        self.assertEqual((self.target / "oddmash-developer-documentation/SKILL.md").resolve(), documentation)

    def test_validator_checks_links_in_nested_references(self):
        checkout = self.target / "checkout"
        copytree(ROOT / "skills", checkout / "skills")
        copytree(ROOT / "products", checkout / "products")
        reference = checkout / "skills/oddmash-brand-design/references/product-website-direction.md"
        reference.write_text(reference.read_text(encoding="utf-8") + "\n[Missing](missing.md)\n", encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "Invalid relative link"):
            validate(checkout)

    def test_product_install_links_only_the_selected_product(self):
        files = self.products["oddmash-ui"]
        install(files, self.target)
        self.assertEqual({path.name for path in self.target.iterdir()}, {file.parent.name for file in files})
        self.assertTrue((self.target / "oddmash-ui-development" / "references" / "demo.md").is_file())

    def test_catalogue_contains_only_supported_product_playbooks(self):
        self.assertEqual(set(self.products), {"kowrap", "oddmash-ui"})
        self.assertEqual(set(path.name for path in (ROOT / "products").iterdir() if path.is_dir()), set(self.products))

    def test_existing_skill_blocks_all_new_links(self):
        conflict = self.target / self.shared[-1].parent.name
        conflict.mkdir(parents=True)
        with self.assertRaisesRegex(ValueError, "would be replaced"):
            install(self.shared, self.target)
        self.assertEqual(list(self.target.iterdir()), [conflict])

    def test_broken_link_is_not_replaced(self):
        self.target.mkdir()
        conflict = self.target / self.shared[0].parent.name
        conflict.symlink_to(self.target / "missing")
        with self.assertRaisesRegex(ValueError, "would be replaced"):
            install(self.shared[:1], self.target)
        self.assertTrue(conflict.is_symlink())
        self.assertFalse(conflict.exists())

    def test_validator_rejects_missing_relative_references(self):
        checkout = self.target / "checkout"
        copytree(ROOT / "skills", checkout / "skills")
        copytree(ROOT / "products", checkout / "products")
        reference = checkout / "products/oddmash-ui/oddmash-ui-development/references/demo.md"
        reference.unlink()
        with self.assertRaisesRegex(ValueError, "Invalid relative link"):
            validate(checkout)


if __name__ == "__main__":
    unittest.main()
