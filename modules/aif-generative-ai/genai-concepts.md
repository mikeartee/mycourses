# Foundation Models, Tokens, and Embeddings

Generative AI runs on **foundation models**. This lesson covers the core vocabulary the exam leans on.

## Foundation models and LLMs

A **foundation model (FM)** is a large model **pre-trained on massive, broad datasets** that can be adapted to many tasks. Because it learned general patterns, one model can summarise, answer questions, translate, write code, and more, without task-specific training.

A **large language model (LLM)** is a foundation model specialised for **text**. Models can also be **multimodal**, handling text plus images, audio, or video.

The big shift: instead of training a new model per task, you take one general FM and **prompt** or lightly adapt it.

## Tokens

Models don't read words, they read **tokens**, chunks of text (a word or part of a word). "Unbelievable" might be several tokens. Tokens matter because:

- Pricing is often **per token** (input + output).
- Models have a **context window**, a maximum number of tokens they can consider at once.

## Embeddings and vectors

An **embedding** turns text (or an image) into a list of numbers, a **vector**, that captures its meaning. Similar meanings produce vectors that are close together. Embeddings power **semantic search** and **retrieval** (finding relevant text by meaning, not keywords), which underpins RAG in the next module. Vectors are stored in a **vector database**.

## Prompts

A **prompt** is the input you give the model, your instruction plus any context. The model responds by repeatedly predicting the **next token**, one at a time, based on everything so far. Prompt quality strongly shapes output quality (the whole point of prompt engineering, coming up in Domain 3).

## Why output varies

Generation is **probabilistic**: the model picks likely next tokens with some randomness. So the same prompt can give different answers, this **nondeterminism** is by design, tunable with settings like *temperature* (covered later).

## Key takeaways

- A foundation model is broadly pre-trained and adaptable to many tasks; an LLM is a text-focused FM; some are multimodal.
- Text is processed as **tokens**; pricing and context limits are token-based.
- **Embeddings** are vectors capturing meaning; they enable semantic search and retrieval.
- A **prompt** is your input; models generate by predicting the next token, and output is probabilistic.
