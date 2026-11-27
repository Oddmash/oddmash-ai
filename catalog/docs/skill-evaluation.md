# Skill evaluation

Use the scenarios in [skill-scenarios.json](skill-scenarios.json) whenever relevant guidance changes. They are test inputs for a human or coding agent, not product implementation requirements.

1. Give the prompt and representative public product evidence to a fresh coding agent with the catalog available. Do not reveal expected or avoided outcomes before the attempt.
2. Ask the agent to identify its primary skill and supporting guidance, give a scoped work plan, and produce the requested evidence in an offline or authorized non-production setting. Do not perform external writes for evaluation.
3. Compare the actual selection, actions and output with expected and avoided outcomes. Record each case as pass, fail or not run with the exact skill revision and evidence. Accept equivalent routing when the decision owner and requirements are preserved.
4. For landing evaluations, inspect rendered output for the first-action path, honest product proof, mobile hierarchy, motion and actual usability. A plan-only evaluation cannot establish visual quality.
5. Fix the smallest owning skill when evidence shows a recurring guidance gap; do not add a new skill just for one symptom.

CI verifies fixture schema, referenced skill names, and coverage of the catalog's key decision boundaries. It does not execute an AI model or certify real-world design quality. Run fresh-agent evaluations separately and record the observations in the PR.
