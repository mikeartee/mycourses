# Identity and Access: IAM

**AWS Identity and Access Management (IAM)** controls *who* can do *what* to *which* resources. It's the foundation of the security domain and appears constantly on the exam.

## The core building blocks

- **Users** - a person or application with long-term credentials. Avoid using the **root user** for everyday work; lock it down with MFA and use it only for the few tasks that require it.
- **Groups** - a collection of users. Attach policies to a group and every user inherits them. Manage permissions by group, not per user.
- **Roles** - a set of permissions that can be **assumed temporarily** by a trusted entity (an EC2 instance, a Lambda function, a user from another account, or a federated identity). Roles issue **temporary credentials**, no long-lived keys.
- **Policies** - JSON documents that grant or deny permissions. Attached to users, groups, or roles.

## Roles are the exam's favourite answer

Whenever an application on EC2 (or Lambda, ECS, etc.) needs to call AWS, the right answer is almost always: **attach an IAM role**, never store access keys on the instance. Roles rotate credentials automatically and remove the risk of leaked keys.

Cross-account access? Use a role in the target account that the other account is trusted to assume, rather than creating users in both.

## How a request is evaluated

- Access is **implicitly denied** by default. You need an explicit `Allow` to do anything.
- An explicit **`Deny` always wins** over any `Allow`.
- Permissions are the union of all applicable policies (identity policies, resource policies, and, in an organisation, **Service Control Policies** that set the maximum allowed).

## Least privilege

Grant only the permissions actually needed, and widen later if required. This is a recurring "best answer": if one option grants `AdministratorAccess` and another grants just the specific actions on the specific resource, the **narrow** one is correct.

## Related identity services

- **IAM Identity Center** (successor to AWS SSO) - central sign-in across many accounts.
- **Amazon Cognito** - identity for your **app's end users** (web/mobile), including sign-up/sign-in and federation. Don't confuse Cognito (app users) with IAM (AWS account access).
- **Identity federation / STS** - let corporate or social identities assume roles for temporary AWS access instead of creating IAM users.

## Key takeaways

- Users, groups, roles, and policies are the building blocks; manage permissions via groups.
- Use **roles** for anything non-human (EC2, Lambda) and for cross-account access, never embed access keys.
- Default is deny; an explicit deny beats any allow.
- Apply **least privilege**; the narrowest sufficient permission is usually the right answer.
- Cognito = your application's users; IAM = access to the AWS account.
