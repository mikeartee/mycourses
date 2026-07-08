# Securing AI Data and Models

AI solutions are still AWS workloads, so the security fundamentals apply, plus a few AI-specific points. Foundational candidates should recognise the right control for a scenario.

## The fundamentals carry over

- **IAM** - grant **least-privilege** access to who can call models, read training data, or manage AI resources. Prefer **roles** over long-lived keys.
- **Encryption** - protect data **at rest** (via **AWS KMS**) and **in transit** (TLS). Training data in **S3**, model artifacts, and prompts/outputs should be encrypted.
- **Shared responsibility model** - AWS secures the **cloud** (the managed service infrastructure); **you** secure what you put **in** it (your data, access policies, configuration).

## Protecting the data AI uses

- **Amazon S3** access controls + encryption for datasets, plus **Block Public Access**.
- **Amazon Macie** - discovers and protects **sensitive data (PII)** in S3, useful before feeding data to a model.
- **VPC / PrivateLink** - keep traffic to AI services on the private AWS network.
- **Bedrock Guardrails** can **redact PII** from prompts and responses.

## Data privacy with Bedrock

A common exam reassurance: with **Amazon Bedrock**, **your prompts and data are not used to train the base foundation models**, and your content stays within your AWS environment and controls. Customisation (fine-tuning) is done on a **private copy** of the model. This matters for enterprises worried about leaking data into a public model.

## AI-specific risks to keep in mind

- **Prompt injection / jailbreaking** (from the prompt-engineering lesson), mitigate with guardrails and input validation.
- **Sensitive data in prompts** - don't paste secrets/PII into prompts unless controls (redaction, encryption, access limits) are in place.

## Key takeaways

- Reuse the fundamentals: least-privilege **IAM** (roles), **encryption** at rest (KMS) and in transit, and the **shared responsibility model**.
- Protect datasets with S3 controls, **Macie** for PII, and private networking (PrivateLink).
- **Bedrock** doesn't use your data to train base models; customisation uses a private model copy.
- Guard against prompt injection and sensitive data leaking into prompts.
