# The ML Lifecycle and Where AWS Fits

Building an ML solution follows a repeatable lifecycle. The exam may ask you to **order** these stages or identify what happens at each.

## The stages

1. **Frame the business problem** - what decision or prediction is needed, and how will success be measured?
2. **Collect data** - gather relevant, representative data.
3. **Prepare data** - clean it, handle missing values, and do **feature engineering** (turn raw data into useful inputs). Often the most time-consuming stage.
4. **Train the model** - feed the prepared data so the model learns patterns.
5. **Evaluate** - measure performance on data the model hasn't seen; check it's accurate and fair enough.
6. **Deploy** - put the model into production so applications can call it for inference.
7. **Monitor** - watch for **drift** (the world changes and accuracy degrades) and retrain when needed.

It's a **loop**, not a straight line: monitoring feeds back into new data and retraining.

## "Garbage in, garbage out"

Model quality is capped by **data quality**. Biased, incomplete, or unrepresentative data produces a biased or inaccurate model no matter how good the algorithm. This is why data collection and preparation matter so much, and it connects directly to responsible AI (Domain 4).

## Where AWS fits

- **Pre-trained AI services** (Comprehend, Rekognition, Transcribe, etc.) - skip most of the lifecycle. AWS already trained the model; you just call the API. Best when your need matches a common task.
- **Amazon SageMaker AI** - the platform for the **full custom lifecycle**: prepare data (Data Wrangler, Ground Truth), train, evaluate, deploy, and monitor (Model Monitor) your own models.
- **Amazon Bedrock** - use existing **foundation models** for generative tasks without training from scratch.

## When NOT to build ML

ML isn't always the answer. If a problem can be solved with simple rules, if you lack quality data, or if a pre-built service already does it, ML (especially custom ML) is unnecessary cost and complexity. Prefer the simplest option that works.

## Key takeaways

- Lifecycle: frame problem -> collect -> prepare -> train -> evaluate -> deploy -> monitor, and loop.
- Data preparation is the biggest effort; data quality caps model quality.
- Pre-trained AI services skip the lifecycle; SageMaker runs the full custom lifecycle; Bedrock reuses foundation models.
- Don't use custom ML when rules or a managed service would do.
