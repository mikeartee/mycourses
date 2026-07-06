# Backup and Disaster Recovery

Disaster recovery (DR) is about getting a workload running again after a serious failure, and doing it within agreed limits. Two terms drive every DR question:

- **RTO (Recovery Time Objective)** - how long you can be **down**. Lower RTO = faster recovery needed.
- **RPO (Recovery Point Objective)** - how much **data** you can afford to lose, measured in time. Lower RPO = more frequent backups/replication.

## The four DR strategies (cheap/slow to expensive/fast)

1. **Backup and Restore** - back data up (e.g. to S3), restore when disaster hits. Cheapest, **highest RTO/RPO**. Fine when hours of downtime are acceptable.
2. **Pilot Light** - a minimal core (e.g. a replicated database) runs in the recovery Region; you start the rest on demand. Lower RTO, low ongoing cost.
3. **Warm Standby** - a scaled-down but **running** copy of the full system; scale it up on failover. Faster recovery, more cost.
4. **Multi-Site / Active-Active** - full production running in more than one Region simultaneously. **Lowest RTO/RPO**, highest cost.

The exam gives you the constraint (cost sensitivity vs near-zero downtime) and expects you to pick the matching strategy. Tight RTO/RPO and budget no object → multi-site. Cost-sensitive and downtime tolerable → backup and restore.

## Services that help

- **Amazon S3** - durable backup target (11 nines of durability). **Cross-Region Replication** copies objects to another Region for DR or latency.
- **S3 Versioning** - protects against accidental overwrite/delete.
- **EBS snapshots** - point-in-time backups of volumes, stored in S3; can be copied across Regions.
- **RDS** - automated backups and manual snapshots; snapshots can be copied to another Region. **Read replicas** can also be cross-Region.
- **AWS Backup** - central, policy-driven backup across many services (EBS, RDS, DynamoDB, EFS, and more).
- **Route 53** - failover routing to shift users to the recovery site.

## Durability vs availability

Don't confuse them. **Durability** is the chance your data survives (S3 is designed for 99.999999999%). **Availability** is the chance you can access it right now. A design can be durable but temporarily unavailable, and DR planning addresses availability.

## Key takeaways

- **RTO** = tolerable downtime; **RPO** = tolerable data loss. They drive the DR choice.
- Four strategies from cheap/slow to costly/fast: Backup & Restore → Pilot Light → Warm Standby → Multi-Site.
- Use S3 (with cross-Region replication and versioning), EBS/RDS snapshots, and AWS Backup; Route 53 for failover.
- Durability (data survives) is not the same as availability (data reachable now).
