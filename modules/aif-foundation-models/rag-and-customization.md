# RAG and Customising Models

A base foundation model doesn't know **your** data or recent facts. Three approaches close that gap; the exam wants you to pick the right one for the situation.

## Retrieval-Augmented Generation (RAG)

**RAG** retrieves relevant information from **your data** and adds it to the prompt so the model answers from real, current facts instead of guessing.

How it works: your documents are turned into **embeddings** and stored in a **vector database**; at question time, the system finds the most relevant chunks and feeds them to the model with the question.

- **Reduces hallucination** and lets the model use private or up-to-date data.
- **No model training** and data can change anytime, just update the knowledge source.
- On AWS: **Amazon Bedrock Knowledge Bases** provide managed RAG.

RAG is usually the **first** answer for "make the model use our documents / current data."

## Fine-tuning

**Fine-tuning** further trains a foundation model on **your labelled examples** so it adapts its style, tone, or task behaviour.

- Good for a **consistent format/voice** or a specialised task.
- Costs more than RAG (needs training data and a training run) and the knowledge is baked in at training time (not live).

## Continued pre-training

Feeding large amounts of **unlabelled domain data** to deepen the model's knowledge of a field (e.g. legal or medical language). More involved and costly; used when a model needs broad domain fluency.

## Choosing between them

| Need | Best approach |
|---|---|
| Answer from our documents / current data | **RAG** |
| Reduce hallucination with grounded facts | **RAG** |
| Consistent style, tone, or task format | **Fine-tuning** |
| Deep domain fluency across a field | **Continued pre-training** |

Order of preference for most scenarios: **prompt engineering → RAG → fine-tuning → pre-training**, cheapest and simplest first. Reach for training only when prompting and RAG can't get you there.

## Key takeaways

- **RAG** grounds answers in your data via retrieval; reduces hallucination, no training, always current, use Bedrock Knowledge Bases.
- **Fine-tuning** adapts a model with labelled examples for style or a specific task; costs more, knowledge is fixed at training.
- **Continued pre-training** builds broad domain knowledge from lots of unlabelled data.
- Prefer prompt engineering, then RAG, before fine-tuning or pre-training.
