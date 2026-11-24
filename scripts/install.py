#!/usr/bin/env python3
"""Validate and link the repository's skills into a local agent directory."""

import argparse
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SKILL_NAME = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+)*")
LOCAL_LINK = re.compile(r"\]\(([^\s)]+)\)")
PRODUCTS = ("kowrap", "oddmash-ui", "vertactics")


def manifests(root):
    shared = sorted(root.glob("skills/*/SKILL.md"))
    products = {name: sorted(root.glob(f"products/{name}/*/SKILL.md")) for name in PRODUCTS}
    return shared, products


def validate(root):
    shared, products = manifests(root)
    groups = {"shared": shared, **products}
    seen = set()
    for group, files in groups.items():
        if not files:
            raise ValueError(f"No skills in {group}")
        for manifest in files:
            name = manifest.parent.name
            if not SKILL_NAME.fullmatch(name) or len(name) > 64 or name in seen:
                raise ValueError(f"Invalid or duplicate skill name: {name}")
            seen.add(name)
            lines = manifest.read_text(encoding="utf-8").splitlines()
            if not lines or lines[0] != "---" or "---" not in lines[1:]:
                raise ValueError(f"Missing frontmatter: {manifest}")
            end = lines.index("---", 1)
            headers = lines[1:end]
            if headers.count(f"name: {name}") != 1 or sum(line.startswith("name:") for line in headers) != 1:
                raise ValueError(f"Manifest name must match its directory: {manifest}")
            descriptions = [line.partition(":")[2].strip() for line in headers if line.startswith("description:")]
            if len(descriptions) != 1 or not 1 <= len(descriptions[0]) <= 1024:
                raise ValueError(f"Expected one description of up to 1024 characters: {manifest}")
            if not any(line.strip() for line in lines[end + 1:]):
                raise ValueError(f"Missing instructions: {manifest}")
            for document in sorted(manifest.parent.rglob("*.md")):
                for link in LOCAL_LINK.findall(document.read_text(encoding="utf-8")):
                    url = urlsplit(link)
                    if url.scheme or url.netloc or not url.path:
                        continue
                    destination = (document.parent / unquote(url.path)).resolve()
                    if not destination.is_relative_to(root.resolve()) or not destination.exists():
                        raise ValueError(f"Invalid relative link {link} in {document}")
    return len(seen)


def install(files, target, check=False):
    pending = []
    for manifest in files:
        source = manifest.parent.resolve()
        destination = target / source.name
        if destination.is_symlink() and destination.resolve() == source:
            continue
        if destination.is_symlink() or destination.exists():
            raise ValueError(f"Existing skill would be replaced: {destination}")
        pending.append((source, destination))
    if check:
        return len(pending)
    target.mkdir(parents=True, exist_ok=True)
    for source, destination in pending:
        destination.symlink_to(source, target_is_directory=True)
    return len(pending)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--target", type=Path, default=Path.home() / ".agents" / "skills")
    parser.add_argument("--product", choices=PRODUCTS)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--check", action="store_true", help="check without creating links")
    mode.add_argument("--validate", action="store_true", help="only validate the repository")
    args = parser.parse_args()
    try:
        count = validate(ROOT)
        if args.validate:
            print(f"Validated {count} skills.")
            return
        shared, products = manifests(ROOT)
        files = products[args.product] if args.product else shared
        target = args.target.expanduser()
        pending = install(files, target, args.check)
        if args.check:
            print(f"{len(files) - pending} linked, {pending} ready to link in {target}.")
        else:
            print(f"Linked {pending} skills in {target}.")
    except (ValueError, OSError, RuntimeError) as error:
        parser.exit(status=1, message=f"{error}\n")


if __name__ == "__main__":
    main()
