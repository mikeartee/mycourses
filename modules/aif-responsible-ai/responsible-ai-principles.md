# Principles of Responsible AI

Responsible AI is about building and using AI in ways that are **fair, safe, transparent, and accountable**. The exam tests the concepts and their AWS tooling (next lesson).

## The core dimensions

- **Fairness** - the system treats people and groups equitably; it doesn't disadvantage some unfairly.
- **Bias** - systematic skew, usually inherited from unrepresentative or prejudiced **training data**. Biased data produces biased models (recall "garbage in, garbage out").
- **Transparency** - being open about how the system works and that AI is being used.
- **Explainability / interpretability** - being able to understand *why* a model produced a given output. Important for trust and for regulated decisions.
- **Robustness and safety** - the system behaves reliably and avoids harmful outputs.
- **Privacy and security** - people's data is protected (overlaps with Domain 5).
- **Veracity** - outputs are truthful; this is why hallucination is a responsible-AI concern, not just a technical one.
- **Governance and accountability** - clear ownership and oversight of AI decisions.

## Bias vs variance (know the term "bias")

For this exam, focus on **bias** as unfair skew from data or design, e.g. a hiring model trained mostly on one group's data may unfairly favour that group. Mitigations: representative data, bias detection, and human oversight.

## Explainability matters most when stakes are high

If an AI influences **loans, hiring, healthcare, or legal** outcomes, you need to explain and justify decisions, and often keep a **human in the loop**. A black-box answer isn't acceptable when it materially affects someone.

## Generative-AI-specific risks

- **Hallucination** (untrue output), **toxicity** (harmful content), and **bias** in generated text or images.
- Mitigate with **guardrails**, grounding (RAG), and human review, covered next.

## Key takeaways

- Responsible AI spans fairness, bias, transparency, explainability, robustness/safety, privacy, veracity, and governance.
- Bias usually comes from the data; fix it with representative data, detection, and oversight.
- Explainability and human review matter most for high-stakes decisions.
- Generative AI adds hallucination and toxicity risks, mitigated by guardrails, RAG, and review.
