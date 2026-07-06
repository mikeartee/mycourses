# Decoupling with Queues and Events

**Tightly coupled** components fail together: if one part slows down or crashes, the parts calling it back up and fail too. **Decoupling** puts a buffer between components so they can fail, scale, and deploy independently. This is a heavily tested idea.

## Amazon SQS - queues

**Simple Queue Service (SQS)** is a managed message **queue**. A producer puts messages in; consumers pull them out when ready.

- Absorbs spikes: if consumers are busy, messages **wait in the queue** instead of overwhelming them.
- Lets you scale consumers independently (often with Auto Scaling based on queue length).
- **Standard queues** - high throughput, at-least-once delivery, best-effort ordering. **FIFO queues** - strict ordering and exactly-once processing, lower throughput.
- Messages are pulled (**polling**); use **long polling** to reduce empty requests.

Classic use: decouple a web tier from a slow backend, the web tier drops a job on the queue and responds immediately; workers process it later.

## Amazon SNS - pub/sub

**Simple Notification Service (SNS)** is **publish/subscribe**. A publisher sends a message to a **topic**, and it is **pushed** to all subscribers (Lambda, SQS queues, HTTP endpoints, email).

- One-to-many **fan-out**: publish once, deliver to many subscribers.
- Common pattern: **SNS + SQS fan-out**, publish to a topic, several SQS queues subscribe, each feeding a different independent workload.

## Amazon EventBridge

**EventBridge** is an event bus that routes events from AWS services and your apps to targets based on rules. Good for **event-driven** architectures and reacting to state changes across services.

## Choosing between them

- Need a **buffer** so work can wait and be processed later by workers? **SQS**.
- Need to **notify many** subscribers at once? **SNS**.
- Need to **route events** from many sources by rules, often serverless? **EventBridge**.

## Key takeaways

- Decoupling lets components fail and scale independently, a recurring "best design" theme.
- **SQS**: pull-based queue that buffers work and smooths spikes; Standard vs FIFO.
- **SNS**: push-based pub/sub for one-to-many fan-out.
- **EventBridge**: rule-based event routing for event-driven, serverless designs.
