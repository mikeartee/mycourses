# The AWS Well-Architected Framework

The exam validates your ability to design solutions "based on the AWS Well-Architected Framework." That framework is a set of **pillars**, principles for building good cloud systems. If you can think in pillars, most "which is best?" questions get easier.

## The six pillars

1. **Operational Excellence** - run and monitor systems, and continuously improve. Automation, observability, small reversible changes.
2. **Security** - protect data and systems. Least-privilege access, encryption, traceability, defence in depth.
3. **Reliability** - recover from failure and meet demand. Redundancy across Availability Zones, automatic recovery, scaling.
4. **Performance Efficiency** - use resources efficiently as demand and tech change. Pick the right instance/storage/database for the job.
5. **Cost Optimization** - avoid unnecessary cost. Right-size, pick the right pricing model, stop paying for idle.
6. **Sustainability** - minimise the environmental impact of running workloads (the newest pillar).

The four **exam domains** map cleanly onto four of these pillars: Secure ↔ Security, Resilient ↔ Reliability, High-Performing ↔ Performance Efficiency, Cost-Optimized ↔ Cost Optimization.

## Design principles that recur in answers

A handful of ideas show up again and again as the "right" answer:

- **Design for failure.** Assume components fail. Spread across **multiple Availability Zones**; don't rely on one server or one AZ.
- **Decouple.** Put queues (SQS) or events (SNS/EventBridge) between components so one part failing or slowing doesn't take down the rest.
- **Scale horizontally.** Add more small things (instances behind a load balancer) rather than one bigger thing.
- **Automate elasticity.** Use Auto Scaling to match capacity to demand instead of provisioning for peak.
- **Prefer managed services.** Managed options (RDS, Aurora, DynamoDB, Lambda, S3) reduce operational burden, this is often why one answer beats another.
- **Least privilege.** Grant the minimum permissions needed, and prefer roles over long-lived keys.

## How to use pillars on the exam

When two answers both "work", ask which one better satisfies the pillar the question is stressing. If the scenario harps on cost, the cheaper compliant option wins even if another is more powerful. If it stresses availability, the multi-AZ option wins even if it costs more. The question's wording tells you which pillar to optimise for.

## Key takeaways

- Six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.
- Four exam domains map to Security, Reliability, Performance Efficiency, and Cost Optimization.
- Recurring "best answer" themes: multi-AZ, decoupling, horizontal scaling, Auto Scaling, managed services, least privilege.
- Let the question's emphasis tell you which pillar (and therefore which answer) to prioritise.
