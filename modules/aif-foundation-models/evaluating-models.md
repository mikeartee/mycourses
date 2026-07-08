# Evaluating Foundation Model Output

Because generative models hallucinate and vary, you can't just assume the output is good, you evaluate it. Foundational candidates should recognise the main approaches, not compute the metrics.

## Why evaluation matters

- Output is **probabilistic** and can be **wrong** (hallucination).
- You need to know whether a model (or prompt, or RAG setup) is **good enough** before trusting it in production, and whether a change made things better or worse.

## Ways to evaluate

- **Human evaluation** - people rate responses for accuracy, helpfulness, tone, and safety. The gold standard for quality and for subjective tasks, but slower and costlier.
- **Benchmark datasets** - run the model against standard question sets to compare capability.
- **Automated metrics** - scores that compare generated text to a reference:
  - **BLEU** - common for **translation** quality.
  - **ROUGE** - common for **summarisation** quality (overlap with reference summaries).
  These give a quick, repeatable signal but don't fully capture quality, they're a complement to human judgement, not a replacement.
- **Business metrics** - ultimately, does it move the real outcome (deflected support tickets, faster drafting, higher satisfaction)?

## Task-appropriate criteria

What "good" means depends on the task: a summariser is judged on **faithfulness and coverage**, a chatbot on **helpfulness and safety**, a classifier on **accuracy**. Pick criteria that match the job.

## On AWS

Amazon Bedrock offers **model evaluation** features to compare models using automatic metrics and human review, helpful when choosing between foundation models.

## Key takeaways

- Evaluate because output is probabilistic and can hallucinate; you need evidence it's good enough.
- **Human evaluation** is the quality gold standard; **benchmarks** compare models; **automated metrics** (BLEU for translation, ROUGE for summarisation) give quick signals.
- Match evaluation criteria to the task, and watch real **business metrics**.
- Bedrock provides model-evaluation tooling (automatic + human).
