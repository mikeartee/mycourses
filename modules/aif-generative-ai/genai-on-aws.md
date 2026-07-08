# Generative AI on AWS

The exam expects you to know **which AWS service** delivers generative AI and why you'd pick a managed option.

## Amazon Bedrock (the main one)

**Amazon Bedrock** is a fully managed service for building generative-AI applications. It gives you:

- **A choice of foundation models** from Amazon (Titan, Nova) and third parties (Anthropic Claude, Meta Llama, Mistral, and more) through **one API**, so you can switch models without rewriting your app.
- **Serverless access** - no infrastructure to manage, no models to host yourself.
- **Knowledge Bases** - retrieval-augmented generation (RAG) over your own data.
- **Agents** - let a model call APIs and take multi-step actions.
- **Guardrails** - filter harmful content and restrict topics.
- **Customisation** - fine-tune or continue pre-training a model on your data (privately).

If a scenario is "build a generative-AI app / chatbot / summariser on AWS with a choice of models and no infrastructure to manage," the answer is **Bedrock**.

## Amazon Q

A ready-made generative-AI **assistant**:

- **Amazon Q Business** - answers questions and generates content grounded in **your company's data and systems**.
- **Amazon Q Developer** - helps write code, explain AWS, and assist with development tasks.

Choose Q when you want a finished assistant rather than to build one.

## SageMaker JumpStart and PartyRock

- **SageMaker JumpStart** - a hub of pre-built models (including foundation models) and solution templates you can deploy, aimed at teams building in SageMaker.
- **PartyRock** - a no-code, playful **Bedrock playground** for experimenting with generative-AI apps in the browser. Great for learning.

## Business benefits AWS highlights

- **Speed / lower barrier** - reuse foundation models instead of training from scratch.
- **Managed and scalable** - no infrastructure to run.
- **Choice and flexibility** - many models behind one API.
- **Security and privacy** - your data isn't used to train the base models, and stays within your controls.

## Key takeaways

- **Bedrock** is the hub: many foundation models via one API, serverless, with Knowledge Bases (RAG), Agents, Guardrails, and private customisation.
- **Amazon Q** is a ready-made assistant (Business for your data, Developer for coding).
- **JumpStart** = model/solution hub in SageMaker; **PartyRock** = no-code Bedrock playground.
- Managed generative AI means speed, scale, model choice, and keeping your data private.
