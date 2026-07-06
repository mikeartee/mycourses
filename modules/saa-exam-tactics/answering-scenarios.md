# Reading Scenarios and Eliminating Answers

Most SAA-C03 questions are short scenarios where **more than one answer "works"**. Your job is to pick the *best* one for the stated priority. Technique matters as much as knowledge.

## Find the priority word

Scan the question for what it's optimising for. These words tell you which Well-Architected pillar wins:

- "**most cost-effective**", "**cheapest**", "**minimise cost**" → cost pillar.
- "**highly available**", "**fault tolerant**", "**minimise downtime**" → reliability.
- "**least latency**", "**highest performance**", "**fastest**" → performance.
- "**most secure**", "**least privilege**", "**encrypted**" → security.
- "**least operational overhead**", "**managed**", "**minimal management**" → prefer managed/serverless options.

Two technically correct answers usually differ on exactly this axis. Match the answer to the priority word.

## Eliminate the obviously wrong

Most questions have one or two answers you can strike immediately:

- Options that don't actually solve the requirement.
- Options that violate a hard constraint (e.g. "without using the public internet" rules out a public IP answer).
- Anti-patterns: making a bucket public, embedding access keys, using one AZ for HA, using Spot for something that can't be interrupted.

That often turns a 4-way guess into a 50/50, then the priority word breaks the tie.

## Watch for constraint keywords

- "**without managing servers**" → Lambda/Fargate/managed service.
- "**without traffic over the internet**" → VPC endpoint / private connectivity.
- "**existing on-premises**" + "**consistent/private network**" → Direct Connect; "**encrypted over internet**" → VPN.
- "**can tolerate interruption**" → Spot; "**cannot be interrupted**" → not Spot.
- "**shared file system for many instances**" → EFS.

## Manage time

- ~2 minutes per question. If one is eating time, **flag it and move on**, come back with fresh eyes.
- Answer every question; there's no penalty for guessing, so never leave a blank.
- On multiple-response, re-read how many to select and make sure you picked exactly that many.

## Key takeaways

- Identify the **priority word**; it selects the pillar and usually the best answer.
- **Eliminate** anti-patterns and options that miss a hard constraint first.
- Learn constraint keywords (managed, private, interruptible, shared file system) and their service answers.
- Pace at ~2 min/question, flag and return, and never leave a blank.
