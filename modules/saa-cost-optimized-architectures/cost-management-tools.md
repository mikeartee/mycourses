# Cost Management and Governance Tools

Knowing *which tool* answers a cost question, monitor, forecast, alert, or analyse, is worth easy points.

## The core tools

- **AWS Cost Explorer** - visualise and **analyse** past spend and usage, spot trends, and get forecasts. Use it to answer "where is our money going?"
- **AWS Budgets** - set custom **budgets** and get **alerts** when actual or forecast spend crosses a threshold. Use it for "notify me when we approach $X."
- **AWS Cost and Usage Report (CUR)** - the most detailed line-item billing data, delivered to S3 for deep analysis (e.g. with Athena/QuickSight).
- **Cost Allocation Tags** - tag resources (by team, project, environment) so costs can be grouped and attributed. Foundational for chargeback and for making Cost Explorer/Budgets meaningful.
- **AWS Trusted Advisor** - checks your account against best practices, including **cost optimisation** (e.g. idle load balancers, underutilised instances, unattached volumes).
- **AWS Compute Optimizer** - recommends right-sizing (instance types, Lambda memory) based on actual utilisation.

## Which tool for which question

| The scenario asks for... | Use |
|---|---|
| Analyse and visualise historical cost | Cost Explorer |
| Alert when spend crosses a threshold | AWS Budgets |
| Line-item detail for deep analysis | Cost and Usage Report |
| Attribute cost by team/project | Cost allocation tags |
| Best-practice checks incl. idle resources | Trusted Advisor |
| Right-sizing recommendations | Compute Optimizer |

## Organisation-level cost control

- **AWS Organizations** with **consolidated billing** - one bill across many accounts, and volume discounts/commitments shared across the organisation.
- **Service Control Policies (SCPs)** can prevent launching expensive resources (e.g. restrict large instance types or regions), indirect but effective cost governance.

## Key takeaways

- **Cost Explorer** = analyse/visualise; **Budgets** = alert on thresholds; **CUR** = detailed line items.
- **Cost allocation tags** attribute spend; **Trusted Advisor** and **Compute Optimizer** flag waste and right-sizing.
- **Organizations** consolidates billing and shares discounts; **SCPs** can block costly resource choices.
