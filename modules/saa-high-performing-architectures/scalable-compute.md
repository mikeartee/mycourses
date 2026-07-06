# Scalable and High-Performing Compute

Performance questions often come down to **picking the right compute** and letting it **scale**. Know the options and when each wins.

## EC2 and instance families

**EC2** gives you virtual servers. Instance **families** are tuned for different jobs, match the family to the bottleneck:

- **General purpose** (e.g. M, T) - balanced; web servers, small databases.
- **Compute optimised** (C) - CPU-heavy work; batch processing, gaming servers.
- **Memory optimised** (R, X) - large in-memory datasets; big databases, caches.
- **Storage optimised** (I, D) - high local disk throughput/IOPS.
- **Accelerated computing** (P, G) - GPUs for ML and graphics.

If a scenario stresses a specific resource (RAM, CPU, GPU), pick the matching family.

## Scaling horizontally with Auto Scaling

For performance **at scale**, add more instances rather than one huge one:

- **Auto Scaling** adjusts instance count to demand and works with ELB to spread load across AZs.
- Scale on metrics like CPU or on a schedule for predictable peaks.
- This gives elasticity (pay for what you need) and resilience at once.

## Serverless compute

- **AWS Lambda** - run code without managing servers; scales automatically per request; you pay per invocation and duration. Great for event-driven and spiky workloads. Watch for limits (execution timeout, memory).
- **Fargate** - serverless containers; run ECS/EKS tasks without managing the underlying EC2 hosts.

Serverless is often the "least operational overhead" answer, valuable when the scenario stresses not managing infrastructure.

## Containers

- **ECS** - AWS's container orchestrator. **EKS** - managed Kubernetes. Run either on EC2 (you manage capacity) or **Fargate** (serverless).

## Matching compute to the scenario

- Steady, predictable server workload → EC2 (often with Auto Scaling).
- Spiky, event-driven, or "no servers to manage" → **Lambda**.
- Containerised app without managing hosts → **Fargate**.
- Need a specific resource profile → pick the matching **instance family**.

## Key takeaways

- Match the **EC2 instance family** to the bottleneck (CPU, memory, GPU, storage).
- Scale **horizontally** with Auto Scaling + ELB across AZs for performance and resilience.
- **Lambda** for event-driven/spiky work with no servers to manage; **Fargate** for serverless containers.
- "Least operational overhead" usually points to a managed or serverless option.
