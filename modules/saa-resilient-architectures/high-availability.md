# High Availability and Fault Tolerance

Resilience starts with a simple assumption: **things fail**. Servers die, and occasionally a whole data centre has problems. A resilient architecture keeps working anyway.

## Regions and Availability Zones

- A **Region** is a geographic area (e.g. eu-west-2). A **Availability Zone (AZ)** is one or more discrete data centres within a Region, isolated from failures in other AZs but connected by fast links.
- The single most important resilience principle on the exam: **spread across multiple AZs**. A design that runs in one AZ has a single point of failure; the multi-AZ version is almost always the better answer.

## Elastic Load Balancing (ELB)

A load balancer spreads traffic across healthy targets in multiple AZs and stops sending to unhealthy ones (via **health checks**).

- **Application Load Balancer (ALB)** - HTTP/HTTPS (layer 7), content-based routing, ideal for web apps and containers.
- **Network Load Balancer (NLB)** - TCP/UDP (layer 4), very high performance and static IPs.
- **Gateway Load Balancer** - for deploying third-party virtual appliances (firewalls, etc.).

## Auto Scaling

**EC2 Auto Scaling** keeps the right number of instances running:

- Launches replacements when instances fail health checks (**self-healing**).
- Scales **out** under load and **in** when idle, matching capacity to demand.
- Spans multiple AZs, so it also provides high availability, not just elasticity.

ELB + Auto Scaling across AZs is the canonical highly available web tier.

## Route 53 for availability

**Amazon Route 53** (DNS) supports **health checks** and routing policies that add resilience:

- **Failover routing** - send traffic to a standby when the primary is unhealthy.
- **Latency** and **geolocation** routing - direct users to the best/closest endpoint.

## Availability in the data tier

- **RDS Multi-AZ** - a synchronous standby in another AZ with automatic failover. This is for **availability**, not scaling reads (that's read replicas, covered later).
- **DynamoDB** and **S3** are highly available across multiple AZs by design.

## Key takeaways

- Assume failure; **deploy across multiple Availability Zones**.
- ELB spreads traffic across healthy targets; Auto Scaling replaces failed instances and matches capacity to demand.
- Route 53 failover routing shifts traffic away from unhealthy endpoints.
- Use RDS Multi-AZ for database failover; S3 and DynamoDB are multi-AZ by design.
