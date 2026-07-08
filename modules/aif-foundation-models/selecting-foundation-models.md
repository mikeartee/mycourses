# Selecting a Foundation Model

There's no single "best" model. The right choice depends on the job and its constraints, and Bedrock lets you pick.

## Factors in choosing a model

- **Capability / accuracy** - is it good enough at the task (reasoning, coding, summarising)?
- **Modality** - text only, or images/audio too (multimodal)?
- **Context window** - how much input (tokens) it can take at once. Long documents need a large window.
- **Cost** - usually priced **per token**; bigger models cost more.
- **Latency / speed** - larger models can be slower; real-time chat needs responsiveness.
- **Customisation and licensing** - can you fine-tune it; are the licence terms acceptable?

A common trade-off: a **larger model** is more capable but slower and pricier; a **smaller model** is cheaper and faster and often good enough. Match the model to the requirement the scenario stresses (cost vs quality vs speed).

## Inference parameters

At inference time you can tune *how* the model generates, without changing the model:

- **Temperature** - randomness. **Low** (near 0) = focused, consistent, more deterministic; **high** = more creative and varied. Use low temperature for factual/consistent tasks, higher for creative ones.
- **Top-p (nucleus sampling)** - limits choices to the most probable tokens; lower = safer/narrower output.
- **Max tokens** - caps the length of the response (and the cost).

If a question asks how to make output **more consistent/less random**, the answer is usually **lower the temperature**.

## Key takeaways

- Choose a model on capability, modality, context window, cost, latency, and customisation, match it to the scenario's priority.
- Bigger = more capable but slower/pricier; smaller often suffices.
- Inference params tune generation: temperature (randomness), top-p (token selection), max tokens (length).
- Lower temperature for consistent, factual output; raise it for creativity.
