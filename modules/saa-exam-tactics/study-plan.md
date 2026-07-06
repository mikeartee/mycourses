# A Study Plan and Resources

Knowing the content isn't enough, you need to convert it into a reliable pass. Here's a practical plan.

## A rough 4-to-8 week plan

1. **Weeks 1-2: Fundamentals.** Get comfortable with IAM, VPC (subnets, security groups, NACLs), EC2, S3, and RDS. These underpin every domain.
2. **Weeks 3-4: Work the domains.** Go module by module (security, resilience, performance, cost). For each service, know *what problem it solves* and *when to choose it over alternatives*.
3. **Weeks 5-6: Hands-on.** Build in a real AWS account, launch a VPC with public/private subnets, put an Auto Scaling group behind an ALB, host a static site on S3 + CloudFront, create an RDS instance. Use the **Free Tier**, and delete resources afterwards to avoid charges.
4. **Weeks 7-8: Practice exams.** Take full-length, **timed** practice exams. Review **every** question, right or wrong, and understand *why* each option is correct or not. Aim comfortably above 720 before booking.

## Where to study

- **AWS official**: the exam guide, AWS Skill Builder (including free digital training and practice questions), and the AWS Well-Architected Framework whitepaper.
- **AWS documentation and FAQs**: service FAQ pages are dense with exactly the "when would you use X" detail the exam tests.
- **Hands-on**: a personal AWS account on the Free Tier is the best teacher.
- **Reputable practice exams**: use question banks that explain their answers.

## What to prioritise

- **Security first** (30%): IAM roles, policies, encryption/KMS, VPC security.
- The **fundamentals** that appear everywhere: S3, EC2, Auto Scaling, ELB, RDS, VPC.
- The **"which service?" distinctions**: SQS vs SNS, EBS vs EFS vs S3, read replicas vs Multi-AZ, CloudFront vs Global Accelerator, Reserved vs Spot vs On-Demand.

## Before exam day

- Book when your **timed practice scores** are consistently well above passing.
- Sleep and pace yourself; the exam is long. Flag-and-return keeps you moving.
- Remember it's pass/fail, a comfortable pass is the goal, not perfection.

## Key takeaways

- Layer your prep: fundamentals → domains → hands-on → timed practice exams.
- Learn from **every** practice question, not just the ones you miss.
- Prioritise security and the cross-cutting fundamentals, and drill the "which service?" comparisons.
- Book once your timed mock scores sit comfortably above 720.
