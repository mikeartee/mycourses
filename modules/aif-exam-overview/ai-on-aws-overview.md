# The AWS AI and ML Service Landscape

A lot of the exam is "which AWS service fits this need?" It helps to picture AWS's AI offerings in **three layers**, from ready-made to build-it-yourself.

## Layer 1: AI services (pre-trained, ready to use)

Fully managed APIs that do a specific job with no ML expertise required. You call an API; AWS supplies the model.

| Service | What it does |
|---|---|
| **Amazon Comprehend** | Natural-language processing: sentiment, entities, key phrases |
| **Amazon Rekognition** | Image and video analysis |
| **Amazon Transcribe** | Speech to text |
| **Amazon Polly** | Text to speech |
| **Amazon Translate** | Language translation |
| **Amazon Textract** | Extract text and data from documents |
| **Amazon Lex** | Chatbots and voice assistants |
| **Amazon Kendra** | Intelligent enterprise search |
| **Amazon Personalize** | Recommendations |
| **Amazon Fraud Detector** | Fraud detection |

If a scenario matches one of these jobs, the pre-trained service is almost always the best answer, no training data or model building needed.

## Layer 2: Amazon Bedrock (generative AI)

**Amazon Bedrock** is a fully managed service that gives you access to **foundation models** from Amazon and third parties (Anthropic, Meta, Mistral, and more) through one API. It's the centre of gravity for the exam's generative-AI content. Key features:

- **Knowledge Bases** - retrieval-augmented generation (RAG) over your own data.
- **Agents** - let models take actions and call APIs.
- **Guardrails** - filter harmful content and block unwanted topics.
- **PartyRock** - a no-code Bedrock playground for experimenting.

## Layer 3: Amazon SageMaker AI (build and train your own)

**Amazon SageMaker AI** is the platform for building, training, and deploying custom ML models. Foundational candidates should recognise its role and a few features, not operate it deeply:

- **JumpStart** - pre-built models and solutions, including foundation models.
- **Canvas** - no-code ML for business analysts.
- **Clarify** - detect bias and explain model predictions.
- **Model Monitor** - watch deployed models for drift.
- **Ground Truth** - data labelling.

## Amazon Q

**Amazon Q** is a generative-AI assistant: **Q Business** answers questions over your company data, and **Q Developer** helps with coding and AWS tasks.

## Choosing a layer

- Need a common capability (transcription, translation, sentiment)? Use a **Layer 1 AI service**.
- Need generative AI (chat, summarise, generate, RAG)? Use **Bedrock**.
- Need a custom model trained on your own data and problem? Use **SageMaker**.

Prefer the highest layer that solves the problem, less effort, less to manage.

## Key takeaways

- Three layers: pre-trained **AI services**, **Bedrock** for generative AI, **SageMaker** for custom ML.
- Match the AI service to the job (Comprehend = text, Rekognition = images, Transcribe = speech, etc.).
- Bedrock is the exam's generative-AI hub: Knowledge Bases (RAG), Agents, Guardrails.
- Reach for the highest layer that fits; only build custom models when nothing pre-built does.
