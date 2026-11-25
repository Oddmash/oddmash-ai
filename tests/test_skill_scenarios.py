import json
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class SkillScenarioTests(unittest.TestCase):
    def test_scenario_fixture_references_existing_skills(self):
        scenarios = json.loads((ROOT / "docs/skill-scenarios.json").read_text(encoding="utf-8"))
        names = {path.parent.name for path in ROOT.glob("skills/*/SKILL.md")}
        names.update(path.parent.name for path in ROOT.glob("products/*/*/SKILL.md"))
        ids = set()
        required = {"library-landing", "juliya-proof", "game-landing", "small-doc-fix", "release-external", "legacy-adoption"}
        for case in scenarios:
            with self.subTest(case=case["id"]):
                self.assertNotIn(case["id"], ids)
                ids.add(case["id"])
                self.assertTrue(case["prompt"].strip())
                self.assertTrue(case["primary"])
                self.assertTrue(case["expected"])
                self.assertTrue(case["avoid"])
                for key in ("primary", "support", "expected", "avoid"):
                    self.assertIsInstance(case[key], list)
                    self.assertTrue(all(isinstance(item, str) and item.strip() for item in case[key]))
                self.assertTrue(set(case["primary"] + case["support"]) <= names)
                self.assertFalse(set(case["primary"]) & set(case["support"]))
        self.assertTrue(required <= ids)


if __name__ == "__main__":
    unittest.main()
