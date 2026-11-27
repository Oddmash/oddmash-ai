import argparse
from pathlib import Path
import re
import subprocess

CATALOG_FILES = (
    "AGENTS.md", "CONTRIBUTING.md", "DISTRIBUTION.md", "LICENSE", "NOTICE.md", "README.md",
    "docs", "products", "scripts", "skills", "tests",
)
COMMIT = re.compile(r"[0-9a-f]{40}")
TAG = re.compile(r"skills-v(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)")


def git(checkout, *args):
    return subprocess.run(
        ["git", "-C", str(checkout), *args], check=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    ).stdout


def package_catalog(checkout, revision, output, *, tag=None):
    if not COMMIT.fullmatch(revision):
        raise ValueError("Use a full immutable catalog commit SHA")
    if git(checkout, "rev-parse", "--verify", revision + "^{commit}").decode().strip() != revision:
        raise ValueError("Revision must identify the exact commit")
    git(checkout, "merge-base", "--is-ancestor", revision, "HEAD")
    if tag is not None:
        if not TAG.fullmatch(tag):
            raise ValueError("Use a stable skills-vMAJOR.MINOR.PATCH tag")
        resolved = git(checkout, "rev-parse", "--verify", "refs/tags/" + tag + "^{commit}").decode().strip()
        if resolved != revision:
            raise ValueError("Catalog tag does not identify the requested commit")
        git(checkout, "merge-base", "--is-ancestor", revision, "refs/remotes/origin/main")
    paths = ["catalog/" + path for path in CATALOG_FILES]
    archive = git(checkout, "archive", "--format=zip", "--prefix=oddmash-skills/", revision, "--", *paths)
    with Path(output).open("xb") as destination:
        destination.write(archive)


def main():
    parser = argparse.ArgumentParser(description="Package only the independent Skills catalog from immutable Git source.")
    parser.add_argument("--revision", required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--tag")
    args = parser.parse_args()
    try:
        package_catalog(Path(__file__).resolve().parents[2], args.revision, args.output, tag=args.tag)
    except (ValueError, OSError, subprocess.CalledProcessError) as error:
        parser.exit(1, f"{error}\n")


if __name__ == "__main__":
    main()
