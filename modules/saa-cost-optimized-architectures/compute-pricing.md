# Compute Pricing Models

Most cost questions hinge on picking the right **EC2 purchasing model** for a workload's usage pattern. Learn what each is best for.

## The main models

- **On-Demand** - pay per second/hour, no commitment. Best for **short-term, spiky, or unpredictable** workloads and for dev/test. Most flexible, highest per-hour price.
- **Reserved Instances (RIs)** - commit to a **1- or 3-year** term for a large discount (up to ~72% vs On-Demand). Best for **steady, predictable, always-on** workloads (e.g. a baseline database). Standard RIs discount most; Convertible RIs allow changing instance attributes for a smaller discount.
- **Savings Plans** - commit to a consistent **amount of spend** ($/hour) for 1 or 3 years for similar discounts, with more flexibility than RIs (Compute Savings Plans apply across instance families, regions, Lambda, and Fargate). Increasingly the preferred commitment model.
- **Spot Instances** - use spare capacity at up to ~90% off, but AWS can **reclaim** them with a short warning. Best for **fault-tolerant, flexible, interruptible** work: batch jobs, data processing, CI, stateless workers. Never for something that can't tolerate interruption.
- **Dedicated Hosts / Dedicated Instances** - physical isolation for licensing or compliance needs; most expensive.

## Matching model to pattern

| Workload pattern | Best model |
|---|---|
| Steady, runs 24/7 for years | Reserved Instances or Savings Plans |
| Unpredictable / short-lived | On-Demand |
| Interruptible batch / stateless workers | Spot |
| Licensing tied to physical hardware | Dedicated Hosts |

A very common design combines them: **Reserved/Savings Plans for the steady baseline**, **On-Demand for normal variability**, and **Spot for burst or batch** capacity.

## Serverless as cost optimisation

**Lambda** and **Fargate** charge only for what you use (invocations/duration, or task run time). For spiky or low-utilisation workloads, serverless can be cheaper than keeping EC2 running idle, and it removes management cost too.

## Key takeaways

- **On-Demand**: flexible, no commitment, spiky/short work.
- **Reserved Instances / Savings Plans**: big discounts for steady, predictable, long-running workloads (Savings Plans are more flexible).
- **Spot**: cheapest, for interruptible/fault-tolerant work only.
- Mix models to fit the usage curve; consider serverless to avoid paying for idle capacity.
