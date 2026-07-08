# Governance, Compliance, and Monitoring

**Governance** is the policies and oversight that keep AI use responsible, legal, and accountable. The exam tests the concepts and the AWS services that support them.

## Data governance vs model governance

- **Data governance** - managing data quality, lineage (where it came from), access, retention, and privacy. Good AI starts with well-governed data.
- **Model governance** - tracking models through their life: what data trained them, versions, approvals, intended use, and performance over time. **Amazon SageMaker Model Cards** document a model's details and intended use; **Model Registry** tracks versions and approvals.

## Compliance

- **AWS Artifact** - self-service portal for AWS **compliance reports** (e.g. SOC, ISO) and agreements. The answer for "where do we get AWS compliance documentation?"
- **AI Service Cards** - document responsible-AI and intended-use details for AWS AI services.
- Regulations (privacy laws, sector rules) may dictate how AI and data are used, part of why explainability and human oversight matter.

## Monitoring and auditing

- **AWS CloudTrail** - records **who did what** (API calls), an audit trail of actions on your AI resources.
- **Amazon CloudWatch** - metrics, logs, and alarms to **monitor** AI applications (usage, latency, errors).
- **SageMaker Model Monitor** - watches deployed models for drift/quality (also seen in responsible AI).

If a scenario asks "how do we audit who invoked a model?" think **CloudTrail**; "how do we monitor the application's health/usage?" think **CloudWatch**.

## Governance as an ongoing practice

Governance isn't a one-off. It's: define policies and acceptable use, control access, document models and data, monitor in production, and review. It ties the whole course together, secure and responsible AI depends on it.

## Key takeaways

- **Data governance** (quality, lineage, access, privacy) vs **model governance** (versions, approvals, intended use, via SageMaker Model Cards / Registry).
- **AWS Artifact** for compliance reports; **AI Service Cards** for responsible-use documentation.
- **CloudTrail** audits who did what; **CloudWatch** monitors application health and usage.
- Governance is continuous: policy, access, documentation, monitoring, review.
