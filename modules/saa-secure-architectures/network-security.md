# Network Security: VPC, Security Groups, and NACLs

A **Virtual Private Cloud (VPC)** is your private, isolated network in AWS. Controlling traffic in and out of it is core exam material, especially the difference between security groups and network ACLs.

## VPC building blocks

- **Subnets** - subdivisions of your VPC, each in one Availability Zone. **Public** subnets route to an internet gateway; **private** subnets do not.
- **Internet Gateway (IGW)** - allows resources in public subnets to reach the internet.
- **NAT Gateway** - lets instances in **private** subnets make **outbound** connections (e.g. to download updates) without being reachable **inbound** from the internet. Managed and highly available within an AZ.
- **Route tables** - decide where subnet traffic goes.

A classic design: web servers in public subnets, databases in private subnets, with a NAT gateway so private instances can reach out but not be reached.

## Security groups vs network ACLs

This distinction is asked constantly:

| | Security Group | Network ACL |
|---|---|---|
| Attaches to | An instance (ENI) | A subnet |
| State | **Stateful** - return traffic is auto-allowed | **Stateless** - you must allow return traffic explicitly |
| Rules | **Allow only** | **Allow and Deny** |
| Evaluation | All rules evaluated | Rules evaluated in **number order**, first match wins |

Because security groups are stateful, if you allow inbound HTTPS the response is automatically allowed back out. Use **NACLs** when you need to explicitly **deny** something (e.g. block a specific IP range) at the subnet boundary.

## Private connectivity

- **VPC endpoints** - reach AWS services (like S3 or DynamoDB) **privately**, without traversing the internet. **Gateway endpoints** for S3/DynamoDB; **interface endpoints** (powered by PrivateLink) for most others. A frequent "keep traffic off the public internet" answer.
- **VPC peering** - connect two VPCs privately (non-transitive).
- **Transit Gateway** - hub-and-spoke connectivity across many VPCs and on-premises.
- **Site-to-Site VPN** - encrypted tunnel over the internet to on-premises. **Direct Connect** - a dedicated private line (consistent performance, higher cost, longer to set up).

## Edge protection

- **AWS WAF** - filters malicious web requests (SQL injection, cross-site scripting) at CloudFront, ALB, or API Gateway.
- **AWS Shield** - DDoS protection; **Standard** is free and automatic, **Advanced** adds protections and support for a fee.

## Key takeaways

- Public subnets use an internet gateway; private subnets use a NAT gateway for outbound-only internet access.
- **Security groups**: stateful, allow-only, on the instance. **NACLs**: stateless, allow+deny, on the subnet, numbered rules.
- Use **VPC endpoints** to reach AWS services without the public internet.
- VPN (over internet) vs Direct Connect (dedicated line); WAF for web-layer attacks, Shield for DDoS.
