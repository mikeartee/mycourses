# Caching and Content Delivery

Caching stores frequently used data closer to where it's needed so you don't recompute or refetch it. It's a go-to answer whenever a scenario mentions **latency**, **repeated reads**, or **database load**.

## CloudFront - content delivery network (CDN)

**Amazon CloudFront** caches content at **edge locations** around the world, close to users.

- Serves static assets (images, video, JS/CSS) and can cache dynamic content, cutting latency and offloading your origin (S3 bucket, ALB, or custom server).
- Integrates with **AWS WAF** and **Shield** for edge security, and **ACM** for HTTPS.
- Classic pattern: **S3 (origin) + CloudFront (CDN)** for a fast, cheap static website or asset delivery.

Use CloudFront when users are **geographically spread** and you want lower latency and less origin load.

## ElastiCache - in-memory database cache

**Amazon ElastiCache** puts an in-memory store (**Redis** or **Memcached**) in front of a database.

- Serves hot reads from memory in **microseconds**, taking load off the database.
- Common for read-heavy workloads, session stores, leaderboards, and caching expensive query results.
- **Redis** - richer features (persistence, replication, sorting/pub-sub). **Memcached** - simple, multi-threaded, easy horizontal scaling.

## DynamoDB Accelerator (DAX)

**DAX** is an in-memory cache purpose-built for **DynamoDB**, turning millisecond reads into microseconds without app rewrites. If the scenario is specifically DynamoDB read performance, DAX is the targeted answer (vs ElastiCache for general/relational caching).

## Global network performance

- **AWS Global Accelerator** - routes users over the AWS global network to the nearest healthy endpoint using **static anycast IPs**. Improves performance and failover for **non-cacheable**, latency-sensitive traffic (e.g. gaming, APIs), where CloudFront (a cache) wouldn't fit.

CloudFront caches **content**; Global Accelerator optimises the **network path** to your application. That contrast is a common exam distinction.

## Key takeaways

- **CloudFront**: CDN caching at edge locations; pair with S3 for fast static delivery; use when users are spread out.
- **ElastiCache** (Redis/Memcached): in-memory cache in front of databases for microsecond reads and less DB load.
- **DAX**: caching specifically for DynamoDB.
- **Global Accelerator**: optimises the network path for non-cacheable, latency-sensitive apps (distinct from CloudFront's content caching).
