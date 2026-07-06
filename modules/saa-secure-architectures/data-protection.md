# Data Protection: Encryption and KMS

Protecting data is half of the security domain. The exam expects you to know **encryption at rest**, **encryption in transit**, and how AWS manages keys.

## Encryption in transit vs at rest

- **In transit** - data moving over a network. Protected with **TLS/SSL** (HTTPS endpoints, TLS on database connections). Use ACM (below) to provision certificates.
- **At rest** - data sitting in storage. Protected by encrypting the storage (S3 objects, EBS volumes, RDS databases, etc.).

Many questions want *both*: "encrypt data in transit and at rest."

## AWS KMS

**AWS Key Management Service (KMS)** creates and controls the encryption keys. Key points:

- Most AWS storage services integrate with KMS: tick a box (or set a parameter) to encrypt **S3, EBS, RDS, EFS, DynamoDB**, and more.
- **AWS managed keys** are the easy default. **Customer managed keys (CMKs)** give you control over rotation, policies, and who can use the key, choose these when the scenario needs control or auditability.
- KMS is integrated with **CloudTrail**, so key usage is auditable.

For very strict compliance requiring a dedicated hardware security module, **CloudHSM** is the answer, but KMS covers the vast majority of cases.

## Service specifics worth knowing

- **S3** - supports server-side encryption. **SSE-S3** (S3-managed keys) and **SSE-KMS** (KMS keys, adds auditability and access control) are the common exam choices. You can enforce encryption with a bucket policy and block public access with **S3 Block Public Access**.
- **EBS** - encryption is set when you create a volume; snapshots and volumes created from them stay encrypted.
- **RDS** - enable encryption at creation. To encrypt an existing unencrypted database you restore an encrypted copy from a snapshot.

## Certificates and secrets

- **AWS Certificate Manager (ACM)** - provisions and auto-renews TLS certificates for use with ELB, CloudFront, and API Gateway. Free public certs; no manual renewal.
- **AWS Secrets Manager** - stores database credentials, API keys, etc., and can **rotate** them automatically. Prefer it over hard-coding secrets.
- **SSM Parameter Store** - config and secrets storage; a cheaper option when you don't need automatic rotation.

## Key takeaways

- Encrypt **in transit** (TLS, via ACM certs) and **at rest** (KMS-integrated encryption on S3/EBS/RDS/EFS/etc.).
- KMS manages keys; use customer managed keys when you need control/audit; CloudHSM for dedicated-hardware compliance.
- Enforce S3 encryption and Block Public Access; RDS encryption is set at creation (re-create from an encrypted snapshot to fix an existing one).
- Use ACM for certificates and Secrets Manager for rotating credentials, not hard-coded keys.
