---
title: DORA Metrics
date: 03-07-2026
description: The 4 DORA metrics are your engineering bottom line—the numbers that should guide every decision, just like financial metrics guide CEOs.
stage: AI_DRAFT
---

Most business owners who fail have one thing in common: they don't track their bottom line.

I've spent time talking with CEOs, VCs, and business leaders, and a pattern emerged that I couldn't ignore. Successful leaders wake up thinking about their numbers. They check them Monday morning, before they leave the office, before they go to bed. They don't just know the numbers—they know what levers to pull to move them. The bottom line occupies their mind from morning to night, driving every decision, every hire, every strategic shift.

Now imagine you're a CTO or VP of Engineering. What numbers keep you up at night?

If you don't have an immediate answer, you're not alone. We're all just a bunch of people trying to figure out what we're trying to do. But here's the thing: if you're leading an engineering organization without clear metrics, you're flying blind. You have the same problem as that business owner who doesn't track revenue.

So what is your bottom line? What should you be checking every morning?

The answer isn't revenue or profit margins—those belong to the CEO. Your answer is simpler and more powerful than you might expect: the 4 DORA metrics.

## The CEO Mindset: What Engineering Leaders Can Learn

Successful CEOs are obsessed with their numbers, but it's not just about knowing them. Bottom line thinking leads to hiring decisions, organizational changes, creative problem-solving—all in service of improving that number. The metric becomes the North Star for every choice.

If you're a CTO, you need to do the same thing for your sub-organization. But the thing you're going to keep in mind isn't the financial bottom line. You need a different measure of success, one that captures whether your engineering organization is actually performing.

## The Answer: DORA Metrics

I want to be clear upfront: this isn't my invention. The 4 DORA metrics come from Google's DevOps Research and Assessment team, and they're backed by years of research detailed in the book *Accelerate*. This isn't personal opinion—it's battle-tested and research-backed.

The research shows that elite performers using these metrics are 2x more likely to exceed their profitability, productivity, and market share goals. There's a strong correlation between DORA metrics and business outcomes. High-performing teams see measurable improvements in both speed and stability. Finally, we have a clear answer to "what should I be measuring?" backed by data from thousands of organizations.

The framework is elegant: four numbers, organized into two categories.

## The Framework: Move Fast and Don't Break Stuff

### Move Fast (Velocity Metrics)

#### Deployment Frequency: How often do you actually ship?

Elite performers deploy multiple times per day—on-demand whenever code is ready. High performers deploy once per day to once per week. Medium performers manage once per week to once per month. Low performers? Once per month to once every six months. If that's you, you're kerfuffled, you have failed.

Deployment frequency reveals more than you might think. A mid-size SaaS company I know went from monthly deploys to daily deploys over 6 months. The transformation wasn't just technical—it changed how the entire company operated. Feature requests that used to take 2-3 months to reach customers now shipped in days. The sales team could close deals faster because they could promise features would be live "next week" instead of "next quarter."

#### Lead Time for Changes: From idea to production

Elite performers get code from commit to production in less than one hour. High performers take one day to one week. Medium performers need one week to one month. Low performers take one month to six months. If you're in that last category, something is fundamentally broken.

The contrast between elite and low performers is stark. Company A (elite): A developer commits a bug fix at 10am, it's in production by 11am, customers see the fix before lunch. Company B (low performer): The same bug fix takes 6 weeks—waiting for the next "release window," multiple approval gates, manual testing cycles, deployment coordination meetings. Which company do you think customers prefer?

The goal is to minimize this time ruthlessly. Every day code sits waiting is a day you're not learning, not adapting, not serving customers.

### Don't Break Stuff (Stability Metrics)

#### Change Failure Rate: How often does production break?

Elite performers see failures in 0-15% of deployments. High performers hit 16-30%. Medium performers land at 31-45%. Low performers experience failures in 46% or more of deployments. If 90% of your deployments break production, this is catastrophic.

Here's a story that illustrates why this metric matters: A fintech startup tracked their change failure rate religiously. They discovered that 50% of their deployments caused incidents—terrifying for a company handling money. Over 9 months, they invested in automated testing, feature flags, and better monitoring. Their failure rate dropped to 12%.

The surprise? They were now deploying 3x more frequently than before. Moving fast and not breaking things aren't opposites—they're complementary.

#### Time to Restore Service: How fast do you fix production issues?

Elite performers restore service in less than one hour. High performers need less than one day. Medium performers take one day to one week. Low performers take one week to one month. Two weeks to restore service? Bad idea. Bad, bad things. Not good.

Time to restore service isn't just a metric—it's money. An e-commerce company experienced a checkout bug on Black Friday. Elite team response: Issue detected automatically in 5 minutes, root cause identified in 15 minutes, rollback deployed in 30 minutes. Total downtime under 1 hour. Lost revenue: around $50K.

Compare that to a low-performer scenario: 6 hours to detect the issue (customers called support), 8 hours debugging, 2 hours coordinating a fix. Lost revenue: potentially millions. MTTR tests your entire system—monitoring, deployment process, team coordination, everything.

## The Interdependence of Metrics: Why You Need All Four

Here's the trap: optimizing a single metric in isolation destroys everything.

Optimize deployment frequency alone, and your change failure rate skyrockets—you're shipping broken code constantly. Optimize change failure rate alone, and deployment frequency plummets—every deploy takes weeks of testing. Optimize lead time alone, and you ship fast but can't recover when things break. Optimize MTTR alone, and you get good at fixing fires but never prevent them.

Elite performers excel at all four simultaneously. High deployment frequency combined with low change failure rate means truly moving fast without breaking things. Short lead time combined with fast recovery time means resilience built into the system. These metrics create a tension that keeps you honest.

Real-world example: Company A optimized for deployment frequency and hit 10 deploys per day—but with a 60% failure rate. Result: constant firefighting, customer trust eroded, team burnout. Company B optimized for change failure rate and achieved 2% failures—but deployed once per month. Result: competitors shipped features 10x faster, market share declined.

Company C (an elite performer) balanced all four: 8 deploys per day, 12% failure rate, 2-hour lead time, 30-minute MTTR. Result: fast innovation with reliability.

The framework's genius is that you can't game the system by optimizing just one number. The metrics hold each other in check. Your job as CTO: keep all four in healthy ranges simultaneously. This is what separates elite performers from low performers.

## The Fifth (Pseudo-)Metric: Value and Business Impact

What about the volume of value that reaches production? You can move fast and not break things, but ship nothing valuable. Changes need to make money, period.

This is where things get complicated. Value is qualitative and harder to measure than the other four metrics. You have organizational decisions to make: Does product and business handle value while engineering handles the 4 metrics? Or do you push value thinking down to developers? It depends on org size, product maturity, and team structure.

My practical advice: Focus on the 4 metrics first. They're complicated enough. If you can focus as a team on getting those 4 metrics right, you're good enough. Value is too complex to optimize simultaneously when you're still learning the basics.

## Your Daily Practice: Living with These Numbers

Wake up thinking about these 4 numbers. Check updated versions at lunch, at the end of the day. Review the metrics before bed. The parallel to CEO behavior is exact—same obsessive focus, different metrics.

How do you actually measure these? Start pragmatically:

**Early-stage startups**: Don't overthink it. Use "thumb in the wind" calculations without fancy tools. Count deploys manually from git logs. Track incidents in a simple spreadsheet. Estimate lead times from your project management tool.

**Medium to large organizations**: Leverage existing tools. CI/CD platforms like GitHub Actions, GitLab CI, or Jenkins already track deploy frequency. Incident management tools like PagerDuty or Opsgenie track MTTR automatically. Pull request data reveals lead time for changes. Pre-built dashboards in DataDog, New Relic, or Grafana can aggregate these metrics.

The point: Start simple, measure something. Perfect measurement comes later.

Make the metrics visible to your team. Set up a dashboard. Establish a reporting cadence. When the entire organization sees these numbers, behavior changes. People start caring about the same things you care about.

## From Metrics to Action: The DORA Capabilities as Levers

Knowing your numbers is step one. Improving them is step two.

Each DORA capability is a lever you can pull. As CTO, you have an array of levers in front of you. Pull this lever and deployment frequency improves. Pull that lever and change failure rate drops. Your job is to keep these levers tuned so you move fast without breaking things.

The DORA capability framework includes technical capabilities (CI/CD, test automation, trunk-based development), process capabilities (streamlined change approval, monitoring), and cultural capabilities (learning culture, collaboration).

This article establishes the foundation and framework—your bottom line as a CTO. Future articles in this series will tackle each capability one at a time, with practical, realistic implementation advice. My 2¢, my little way of doing it.

## This Is Your Job

The job of the CTO and engineering director is clear: balance these 4 metrics. Make number go up. Or down, depending on the metric. Yes, good.

This series will cover each capability in depth, focusing on the simplest possible way to pull each lever. But first, you need to start tracking your 4 numbers tomorrow morning.

You can't improve what you don't measure. Now you know what to measure.

When I wake up in the morning, I should be thinking about those numbers. When I go to sleep, I should be thinking about those numbers. This is what we do.
