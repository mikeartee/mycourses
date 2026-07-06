# The Four Domains and Their Weighting

The exam guide splits the exam into four **domains**. Each has a percentage weight that reflects how many scored questions come from it. Knowing the weights tells you where to spend study time.

## The domains

| Domain | What it's about | Weight |
|---|---|---|
| **1. Design Secure Architectures** | Secure access to resources (IAM), secure workloads and applications, and data protection (encryption, key management) | **30%** |
| **2. Design Resilient Architectures** | Scalable and loosely coupled architectures, and highly available / fault-tolerant designs | **26%** |
| **3. Design High-Performing Architectures** | High-performing and scalable storage, compute, databases, and networking | **24%** |
| **4. Design Cost-Optimized Architectures** | Cost-effective storage, compute, databases, and network architectures | **20%** |

They add up to 100%. The percentages are **guidance, not a guarantee** for your specific exam, questions are pulled randomly, so one sitting might feel heavier on networking and another on security. Over the whole exam the weighting holds.

## Reading the weights strategically

- **Security (30%)** is the largest slice. If you're short on time, shore up IAM, encryption/KMS, and VPC security first.
- **Resilient (26%)** and **high-performing (24%)** are close behind and overlap a lot in practice (Auto Scaling, load balancing, and managed databases show up in both).
- **Cost (20%)** is the smallest but easy points if you know the pricing models (On-Demand vs Reserved vs Savings Plans vs Spot) and storage tiers.

A common trap: candidates over-study exotic services and under-study the "boring" fundamentals (IAM, VPC, S3, EC2, RDS, Auto Scaling, ELB). Those fundamentals appear across **all four** domains.

## Many questions touch several domains at once

Real scenarios rarely isolate a single domain. A single question might ask for a design that is secure **and** highly available **and** cost-aware, then ask which option is *best*. That's why the Well-Architected Framework (next lesson) matters: it's the shared language for weighing those trade-offs.

## Key takeaways

- Four domains: Secure (30%), Resilient (26%), High-Performing (24%), Cost-Optimized (20%).
- Weights guide study time; actual questions are randomised.
- Master the fundamentals (IAM, VPC, S3, EC2, RDS, Auto Scaling, ELB), they span every domain.
- Expect questions that blend domains and ask for the *best* trade-off.
