# Storage and Data Transfer Cost

After compute, storage and data movement are the next big cost levers. The exam tests S3 storage classes and awareness of data-transfer charges.

## S3 storage classes

S3 offers classes at different price/access trade-offs. Cheaper storage generally means higher retrieval cost or slower access:

- **S3 Standard** - frequent access, highest storage price, no retrieval fee.
- **S3 Standard-IA (Infrequent Access)** - cheaper storage, retrieval fee; for data accessed occasionally but needed quickly.
- **S3 One Zone-IA** - like IA but stored in a single AZ (less resilient), cheaper; for reproducible/secondary data.
- **S3 Glacier Instant Retrieval** - archive with millisecond access, cheap storage.
- **S3 Glacier Flexible Retrieval** - archive, retrieval in minutes to hours, very cheap.
- **S3 Glacier Deep Archive** - cheapest, retrieval in hours; long-term compliance archives.
- **S3 Intelligent-Tiering** - automatically moves objects between tiers based on access patterns. Use it when **access patterns are unknown or changing**, no retrieval fees, small monitoring charge.

## Lifecycle policies

**S3 Lifecycle rules** automatically **transition** objects to cheaper classes as they age (e.g. Standard → Standard-IA after 30 days → Glacier after 90) and **expire** (delete) them after a set time. This is the standard "reduce storage cost automatically" answer.

## Right-sizing other storage

- Delete unattached **EBS volumes** and old **snapshots**, they still cost money.
- Choose the cheapest EBS type that meets performance needs (HDD st1/sc1 for throughput/cold data instead of provisioned-IOPS SSD).

## Data transfer costs

A frequently missed cost area:

- **Inbound** data transfer to AWS is generally free.
- **Outbound** to the internet is charged, and it adds up. **CloudFront** can reduce this by caching at the edge (and its egress is cheaper).
- Data transfer **between AZs / regions** can incur charges; keeping chatty components in the same AZ/region reduces cost.
- **VPC endpoints** can avoid NAT gateway data-processing charges for AWS-service traffic.

## Key takeaways

- Match S3 storage class to access frequency; use **Intelligent-Tiering** when access is unpredictable.
- Automate cost reduction with **S3 Lifecycle** transitions and expirations.
- Clean up unattached EBS volumes/snapshots and right-size volume types.
- Watch **outbound** and cross-AZ/region **data transfer**; CloudFront and VPC endpoints can cut it.
