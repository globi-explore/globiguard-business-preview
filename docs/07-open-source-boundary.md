# 07. Open-source boundary

## Core rule

Open-source the **adoption layer**.  
Protect the **authority layer**.

That is the cleanest boundary.

## What should be open source

## 1. SDKs and adapters

- Node SDK
- React package
- n8n package
- future Python, Go, and .NET client surfaces

### Why

These are distribution surfaces.  
They should spread fast, be inspectable, and reduce adoption friction.

## 2. Policy and decision contracts

- request and response schemas
- decision enums
- policy object schemas
- event contracts

### Why

Trust increases when customers can inspect the contract.  
Ecosystem growth also depends on stable, open interfaces.

## 3. Local development tools

- bootstrap CLI
- local simulator
- sample apps
- reference integrations

### Why

Good onboarding is part of the moat only when it leads into the paid control plane.

## 4. Possibly the enforcement edge runtime core

- sidecar runtime core
- basic local policy execution path

### Why

This is optional, but strategically interesting.

If customers in regulated industries need to trust and inspect the edge runtime, openness can accelerate adoption.  
The real risk is not that they read it. The real risk is if they can replace the whole GlobiGuard business with a fork.

That only happens if GlobiGuard gives away the entire authority layer.

## What should not be open source

## 1. Hosted control plane

- environment management
- project identity
- package/install registry
- key issuance
- key rotation
- live enablement
- billing and entitlements

### Why

This is the operating center of the business.

## 2. Premium governance workflows

- advanced approval orchestration
- enterprise escalation policies
- audit evidence graph
- compliance mappings and packaged control content
- premium dashboards and policy analytics

### Why

These are high-value enterprise features with low need to be open for ecosystem growth.

## 3. Managed intelligence layers

- premium policy packs
- industry packs
- benchmark intelligence
- connector governance intelligence
- managed risk scoring improvements

### Why

These are compounding proprietary assets.

## 4. Enterprise deployment and support systems

- private managed tenant automation
- sovereign/offline licensing infrastructure
- enterprise operations tooling

### Why

These are part of the paid enterprise motion.

## What should be source-available or commercially licensed rather than fully open

This is the middle band.

Candidates:

- full self-hosted control plane
- advanced multi-tenant governance features
- premium workflow packs
- regulated-industry policy bundles

### Why

This preserves enterprise deployment choice without giving away the entire scarce layer to a third party that can re-host it.

## The mistake to avoid

Do not choose the boundary emotionally.

Do not ask:

- "what feels nice to open?"

Ask:

- "what creates adoption?"
- "what creates trust?"
- "what creates dependence?"
- "what creates paid differentiation?"

## Recommended GlobiGuard split

### Fully open

- SDKs
- adapters
- contracts
- bootstrap tooling
- examples
- docs

### Source-available or commercial

- full control plane
- enterprise self-hosted distribution
- advanced governance and evidence systems

### Fully proprietary or paid-hosted

- hosted control plane
- key and install registry
- commercial analytics
- managed policy intelligence
- premium governance products

## Strategic reason

If the adoption layer is closed, growth slows.  
If the authority layer is fully open, value leaks.  
The best line is: **open the edge, own the center.**
