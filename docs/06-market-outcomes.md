# 06. Market outcomes

## Purpose

This file answers four questions:

1. Who succeeded?
2. Who had adoption but leaked value?
3. Who got displaced by a platform shift?
4. What does that imply for GlobiGuard?

## A. Winners

## Red Hat

### Why it won

- It made open source safe for the enterprise.
- It sold support, certification, lifecycle management, and trusted operations.
- It became a platform choice, not just a package source.

### Lesson

Open code does not destroy value when the company owns:

- enterprise trust
- operational guarantees
- compatibility
- support
- deployment confidence

## GitLab

### Why it won

- It kept expanding from a code host into a workflow and control plane.
- It concentrated planning, CI/CD, security, auditability, and now agent workflows into one system.

### Lesson

The money is not in the edge utility. The money is in owning the workflow system where teams coordinate and govern work.

## Grafana

### Why it won

- It embraced open ecosystems instead of fighting them.
- It monetized the cloud, scale, integrations, enterprise trust, and operations around observability.
- It positioned itself as "plug in, not lock in."

### Lesson

If GlobiGuard becomes the trusted control plane across many models, workflows, and runtimes, openness becomes an adoption advantage instead of a weakness.

## Cloudflare

### Why it won

- It started with an edge utility.
- It expanded into a network, security, identity, and control platform.
- It kept adding adjacent products without losing the control-plane center.

### Lesson

Start narrow enough to win, but expand around a single control point.

## B. Adoption with value leakage

## Docker

### What happened

- Docker won developer mindshare.
- Container workflows became standard.
- But a large part of the value leaked outward into the broader ecosystem.
- Docker later had to move up-stack into build cloud, security, and developer workflow products to improve monetization.

### Lesson

If GlobiGuard only wins package adoption but does not own the control plane, the ecosystem will capture more value than GlobiGuard does.

## Jenkins / CloudBees

### What happened

- Jenkins became ubiquitous.
- Enormous value was created in the ecosystem.
- But the open distribution surface became bigger than any single company’s ability to fully capture the category.
- CloudBees had to keep moving upward into enterprise workflow and control-plane positioning.

### Lesson

Massive adoption is not enough.  
If the center stays at the plugin or automation layer, value diffuses.

## HashiCorp / OpenTofu

### What happened

- Terraform became a standard surface.
- The category became so valuable that licensing and cloud-capture pressure became central strategic issues.
- OpenTofu exists because the ecosystem refused to lose an open standard after HashiCorp changed licensing.

### Lesson

If GlobiGuard makes the wrong thing open, it can subsidize everyone else.  
If it closes the wrong thing too late, it can trigger ecosystem backlash.

## C. Displaced or swiped by a technology shift

## Chef and Puppet

### What happened

- They helped define configuration management and early infrastructure automation.
- But cloud-native infrastructure, immutable patterns, Terraform, Kubernetes, and managed cloud control planes changed where authority lived.
- They remained useful, but their category stopped being the main strategic center.

### Lesson

Do not anchor GlobiGuard to a transient workflow fashion.  
Anchor it to the durable control question:

- who can act
- under what policy
- with what evidence

That question survives tool shifts.

## Cloudera / Hadoop distribution

### What happened

- Hadoop-era infrastructure looked like the future.
- But cloud data warehouses and managed data platforms changed the economic center.
- The original packaging and support model lost strategic ground as the control plane moved.

### Lesson

Do not confuse today’s infrastructure packaging with tomorrow’s durable business position.

For GlobiGuard, the mistake would be thinking:

- sidecar packaging is the business
- n8n nodes are the business
- compliance exports are the business

Those are surfaces.  
The business is the authority layer behind them.

## D. The main pattern

The companies that compound do three things:

1. they make adoption easy
2. they own the control plane
3. they keep moving toward the system of record and system of action

The companies that stall usually do one of these instead:

1. they stop at the edge tool
2. they let the ecosystem capture the operating layer
3. they get tied to a generation of tooling that a new platform makes secondary

## Implication for GlobiGuard

GlobiGuard should not aim to become:

- the best AI wrapper
- the best n8n node vendor
- the best demo compliance generator

It should aim to become:

**the trust and authority layer that survives whichever model, agent, or workflow stack the customer uses next.**
