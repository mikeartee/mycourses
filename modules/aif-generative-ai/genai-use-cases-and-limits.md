# Use Cases and Limitations

Knowing where generative AI shines, and where it fails, is exam gold, and good judgement in real life.

## Strong use cases

- **Text generation and summarisation** - drafting emails, summarising documents or calls.
- **Conversational assistants** - chatbots and support agents.
- **Content and code** - marketing copy, code suggestions.
- **Question answering over your data** - via retrieval (RAG).
- **Translation and simplification** - rewriting for different audiences.
- **Image and media generation** - creating or editing images.

The common thread: tasks involving **generating or transforming language and content**, where some variability is acceptable.

## Limitations to know

- **Hallucination** - the model can produce confident, fluent text that is **wrong or made up**. It optimises for plausible, not true. This is the most-tested limitation.
- **Nondeterminism** - the same prompt can yield different answers, a problem when you need consistency.
- **Bias** - models reflect biases in their training data.
- **Knowledge cutoff** - a base model only knows what it was trained on; it doesn't know recent events or your private data unless you supply them (via RAG).
- **No true reasoning or understanding** - it predicts likely text; it isn't checking facts.
- **Cost and latency** - large models can be slow and expensive at scale.

## When generative AI is the wrong tool

- When answers **must be exact and verifiable** every time (e.g. precise calculations, regulatory outputs) without guardrails or human review.
- When a **simpler, cheaper** approach works, a rule, a lookup, or a pre-trained AI service.
- When you have **no way to ground or check** the output and errors are costly.

Mitigations that come up later: **RAG** (ground answers in real data), **Guardrails** (filter unsafe output), and **human review** for high-stakes cases.

## Key takeaways

- Great for generating and transforming content, summarising, chat, and Q&A over your data.
- Key limits: hallucination, nondeterminism, bias, knowledge cutoff, cost/latency.
- Hallucination (confident but wrong) is the headline risk, ground with RAG and review high-stakes output.
- Don't use it where exact, verifiable answers are required without safeguards, or where something simpler works.
