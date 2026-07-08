# Responsible AI Tools on AWS

AWS provides concrete features for responsible AI. Match the tool to the goal, that's how the exam asks about it.

## The tools

- **Amazon SageMaker Clarify** - detects **bias** in data and models and helps **explain** predictions (feature importance). The go-to answer for "detect bias" or "explain model decisions."
- **Amazon SageMaker Model Monitor** - watches deployed models for **drift** and quality degradation over time, so a model that was fair and accurate stays that way.
- **Amazon Bedrock Guardrails** - for generative AI: filter harmful content, block denied topics, and redact sensitive information (PII). The answer for "prevent a chatbot from producing unsafe or off-limits output."
- **AI Service Cards** - AWS-published documents describing an AI service's **intended use, limitations, and responsible-AI considerations**, supporting transparency.
- **Amazon Augmented AI (A2I)** - build **human review** workflows for predictions, so people check low-confidence or high-stakes results.
- **SageMaker Ground Truth** - build higher-quality, less-biased **labelled datasets**, including with human labellers.

## Matching tool to goal

| Goal | Tool |
|---|---|
| Detect bias / explain predictions | **SageMaker Clarify** |
| Catch model drift after deployment | **SageMaker Model Monitor** |
| Filter unsafe or off-topic generative output | **Bedrock Guardrails** |
| Understand a service's intended use and limits | **AI Service Card** |
| Add human review of predictions | **Amazon A2I** |

## Human oversight is a recurring answer

For high-stakes or low-confidence outputs, the responsible choice is often **keep a human in the loop** (A2I) rather than fully automating. If a scenario stresses accountability or serious consequences, look for the human-review option.

## Key takeaways

- **Clarify** = bias detection + explainability; **Model Monitor** = drift after deployment.
- **Bedrock Guardrails** = filter/redact unsafe generative output; **AI Service Cards** = transparency about a service.
- **Amazon A2I** = human-in-the-loop review for high-stakes or low-confidence predictions.
- Match the tool to the stated responsible-AI goal; favour human oversight when stakes are high.
