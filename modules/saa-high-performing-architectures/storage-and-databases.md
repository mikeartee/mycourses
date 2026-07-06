# Choosing Storage and Databases

A big chunk of the exam is "which storage/database fits this workload?" Learn the distinguishing traits.

## Storage options

- **Amazon S3** - object storage for files, backups, static assets, data lakes. Virtually unlimited, accessed over HTTP(S). Not a filesystem you mount.
- **Amazon EBS** - block storage volumes attached to a single EC2 instance (like a virtual hard disk). Persists independently of the instance. Choose volume types by need:
  - **gp3/gp2 (SSD)** - general purpose, most workloads.
  - **io1/io2 (SSD)** - provisioned high IOPS for demanding databases.
  - **st1/sc1 (HDD)** - throughput-oriented or cold, cheap, sequential.
- **Amazon EFS** - managed **NFS** file system that **many** EC2 instances (across AZs) can mount at once. Use when multiple servers need shared file access. Linux-oriented.
- **Amazon FSx** - managed file systems for specific needs, e.g. **FSx for Windows File Server** (SMB) and **FSx for Lustre** (high-performance computing).
- **Instance store** - temporary storage physically attached to the host; very fast but **ephemeral** (lost when the instance stops). Only for scratch/cache data.

Quick chooser: one instance, block device → **EBS**; many instances, shared files → **EFS**; objects/backups/static content → **S3**; Windows file shares → **FSx for Windows**.

## Databases

- **Amazon RDS** - managed relational databases (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server). Handles patching, backups, Multi-AZ failover. Use for traditional relational/transactional workloads.
- **Amazon Aurora** - AWS's MySQL/PostgreSQL-compatible database; higher performance and availability, storage auto-grows, up to 15 read replicas. Choose when you want RDS-style relational but more scale/availability.
- **Amazon DynamoDB** - managed **NoSQL** key-value store; single-digit-millisecond latency at any scale, serverless. Use for high-scale, simple-access-pattern workloads (sessions, carts, IoT). Add **DAX** for microsecond read caching.
- **Amazon Redshift** - data **warehouse** for analytics/OLAP over large datasets. Not for transactional apps.
- **ElastiCache** - in-memory cache (Redis/Memcached) for microsecond access (covered next lesson).

## Scaling reads with replicas

**Read replicas** (RDS/Aurora) offload **read** traffic from the primary, improving read performance. Note the distinction:

- **Read replicas** → scale **reads** (performance).
- **Multi-AZ** → **availability** (automatic failover), not read scaling.

## Key takeaways

- S3 = objects; EBS = single-instance block; EFS = shared file system for many instances; FSx = Windows/HPC file systems; instance store = fast but ephemeral.
- Pick EBS volume type by IOPS/throughput needs (gp3 default, io1/io2 for heavy databases, HDD for cheap throughput).
- RDS/Aurora for relational, DynamoDB for high-scale NoSQL, Redshift for analytics.
- **Read replicas scale reads; Multi-AZ provides availability**, don't mix them up.
