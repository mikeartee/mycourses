# Types of Machine Learning

There are three main styles of machine learning. The exam tests whether you can match the right one to a scenario and its data.

## Supervised learning

Learns from **labelled data**, examples where the answer is already known. You show it inputs paired with correct outputs, and it learns to predict the output for new inputs.

Two sub-types:

- **Classification** - predict a **category**. Is this email spam or not? Is this transaction fraud? (discrete labels)
- **Regression** - predict a **number**. What will this house sell for? What's tomorrow's demand? (continuous values)

Supervised learning needs labelled training data, which can be expensive to gather.

## Unsupervised learning

Learns from **unlabelled data**, no known answers. It finds structure on its own.

- **Clustering** - group similar items together, e.g. segment customers into groups by behaviour without pre-defining the groups.
- **Anomaly detection** and **dimensionality reduction** are also unsupervised.

Use it when you don't have labels and want to discover patterns.

## Reinforcement learning

Learns by **trial and error**. An agent takes actions in an environment and gets **rewards** or **penalties**, over time it learns the strategy that maximises reward. Think game-playing agents or robotics.

## Matching type to problem

| Scenario | Type |
|---|---|
| Predict whether a customer will churn (yes/no) | Supervised - classification |
| Forecast next month's sales (a number) | Supervised - regression |
| Group customers into segments you haven't defined | Unsupervised - clustering |
| Train a robot to walk via reward signals | Reinforcement |

A useful tell: if the scenario has **labelled examples with known answers**, it's supervised. If it's **finding groups/patterns** in unlabelled data, it's unsupervised. If it's **learning from rewards**, it's reinforcement.

## A note on labelled data

**Amazon SageMaker Ground Truth** helps create labelled datasets (including with human labellers), useful context for supervised learning questions.

## Key takeaways

- Supervised = labelled data; classification predicts categories, regression predicts numbers.
- Unsupervised = unlabelled data; clustering finds groups.
- Reinforcement = learning from rewards through trial and error.
- Spot the type from the data: labels -> supervised, find patterns -> unsupervised, rewards -> reinforcement.
