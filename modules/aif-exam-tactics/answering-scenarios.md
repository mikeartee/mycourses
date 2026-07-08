# Reading Questions and Handling the New Formats

AIF-C01 questions are short and scenario-based. Technique adds easy marks.

## Match the service to the use case

Most questions boil down to "which AWS service fits?" Train yourself on the keyword-to-service mapping:

| Keyword in the scenario | Likely answer |
|---|---|
| Transcribe speech / audio to text | Amazon Transcribe |
| Text to lifelike speech | Amazon Polly |
| Sentiment / entities / language in text | Amazon Comprehend |
| Analyse images or video | Amazon Rekognition |
| Extract text/data from documents | Amazon Textract |
| Translate between languages | Amazon Translate |
| Chatbot / generative app with model choice | Amazon Bedrock |
| Ready-made assistant over company data | Amazon Q Business |
| Detect bias / explain predictions | SageMaker Clarify |
| Filter unsafe generative output | Bedrock Guardrails |
| Answer from our own current documents | RAG (Bedrock Knowledge Bases) |

## Eliminate the wrong answers

- Strike options that solve a **different** problem (a vision service for a text task).
- Strike **anti-patterns**: training a custom model when a pre-built service fits, raising temperature to reduce randomness, fully automating a high-stakes decision with no oversight.
- Prefer the **simplest, most managed** option that meets the need.

## The newer question types

- **Ordering** - you place 3-5 items in sequence. Common target: the **ML lifecycle** (frame → collect → prepare → train → evaluate → deploy → monitor). Anchor the first and last steps, then fill the middle.
- **Matching** - pair services with use cases or terms with definitions. Do the pairs you're **sure** of first; that narrows the rest by elimination.

Both reward the service-to-use-case and sequence knowledge this course drilled.

## Time and nerves

- 65 questions in 90 minutes is comfortable, don't rush, but don't stall. **Flag** a hard one and return.
- **Answer every question**, blanks score as wrong and there's no penalty for guessing.
- It's pass/fail at 700; aim for a comfortable margin, not perfection.

## Key takeaways

- Learn the keyword-to-service mapping; most questions are "which service fits?"
- Eliminate different-problem options and anti-patterns; prefer the simplest managed fit.
- Ordering = sequences (know the ML lifecycle); matching = do the certain pairs first.
- Flag-and-return, and never leave a blank.
