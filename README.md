# KAPKAC Community: Decentralizing Istanbul's Ride-Sharing Economy

*Born in Istanbul, Built by Its People, Driven by Love*

## Executive Summary

KAPKAC is a community-driven, blockchain-based ride-sharing platform built on the TON blockchain, designed specifically for Istanbul's transportation needs. By leveraging smart contracts and the innovative KAC token system, KAPKAC creates a transparent, secure, and efficient ecosystem where drivers and passengers interact directly while building a strong, self-governing community.

## Table of Contents

1. [Introduction](#1-introduction)
2. [Market Analysis](#2-market-analysis)
3. [Technical Architecture](#3-technical-architecture)
4. [Token Economics](#4-platform-economics)
5. [Community Governance](#5-community-governance)
6. [Membership System](#6-membership-system)
7. [Referral Mechanism](#7-referral-mechanism)
8. [Sprint System](#8-sprint-system)
9. [Security and Trust](#9-security-and-trust)
10. [Community Roles](#10-community-roles)
11. [Security and Trust](#11-security-and-trust)
12. [Roadmap](#12-roadmap)
13. [Risk Analysis](#13-risk-analysis)
14. [Conclusion](#14-conclusion)

## 1. Introduction

### 1.1 Vision

To revolutionize Istanbul's transportation ecosystem by creating a decentralized, community-owned ride-sharing platform that prioritizes transparency, fairness, and community governance.

### 1.2 Problem Statement

* Centralized control of ride-sharing platforms
* High commission fees
* Lack of community ownership
* Limited driver benefits
* Insufficient transparency
* No long-term value creation for participants

### 1.3 Solution

KAPKAC introduces a blockchain-based platform where:

* Community members own and govern the platform
* Drivers receive fair compensation
* Passengers enjoy reliable service
* All stakeholders benefit from platform growth
* Trust is built through transparent operations

## 2. Market Analysis

### 2.1 Istanbul Transportation Landscape

* Population: 15.8 million
* Daily ride-sharing trips: ~1.2 million
* Current market size: $1.5 billion
* Annual growth rate: 15%

### 2.2 Target Market

* Primary: Istanbul metropolitan area
* Secondary: Surrounding municipalities
* Potential expansion: Other major Turkish cities
* Global expansion and compete with large Web2 stakeholders: Uber Lyft etc.

### 2.3 Competitive Advantage

* Community ownership
* Lower fees
* Transparent operations
* Token-based incentives
* Strong referral system

## 3. Technical Architecture

### 3.1 Blockchain Infrastructure

* Platform: TON Blockchain
* Smart Contracts: FunC
* Integration: Telegram Bot API

### 3.2 Smart Contract Structure

Core Contract Components:
* Community Management 
* Token Management
* Governance
* Verification

### 3.3 Key Technical Features

* Automated payment system
* Real-time ride tracking
* Document verification system
* Voting mechanism
* Reward distribution system

## 4. Platform Economics

### 4.1 KAC Token Overview

* Token Name: KAPKAC Community Token (KAC)
* Initial Supply: 300,000,000 KAC
* Token Standard: TON Jetton
* Supply Model: Dynamic generation based on platform activity

#### 4.1.1 Initial Token Distribution

* Founding Team: 10% (100M KAC)
  * Split equally between founders
  * `FOUNDER_VESTING_PERIOD = 24 months`
  * `FOUNDER_VESTING_CLIFF = 6 months`
* Operations Fund: 15% (150M KAC)
  * Controlled by multi-signature wallet - two founders
  * `OPERATIONS_DAILY_LIMIT = 100,000 KAC`
  * `OPERATIONS_APPROVAL_THRESHOLD = 100,000 KAC`
* Public Sale: 5% (50M KAC)
  * `INITIAL_TOKEN_PRICE = 1 TON per 100 KAC`
  * `PUBLIC_SALE_MIN_PURCHASE = 100 KAC`
  * `PUBLIC_SALE_MAX_PURCHASE = 10,000 KAC`

#### 4.1.2 Token Generation Rules

All generation rates adjustable through community governance:

1. Ride Rewards
   * `BASE_REWARD_PER_KM = 0.01 KAC`
   * Multiplied by driver's trust score multiplier
   * `MAX_REWARD_PER_RIDE = 100 KAC`

2. Referral Rewards
   * `DRIVER_REFERENCE_BONUS = 100 KAC`
   * `REFERENCE_SHARE_BONUS = 90%`
   * Generated upon successful verification

#### 4.1.3 Token Requirements

* `MIN_MEMBER_TOKEN_HOLD = 1 KAC`
* `MIN_PASSANGER_TOKEN_HOLD = 5 KAC`
* `MIN_VOTING_TOKEN_HOLD = 10 KAC`
* `MIN_DRIVER_TOKEN_HOLD = 1000 KAC`

### 4.2 Trust Score System

#### 4.2.1 On-Chain Score Components

Trust Score ranges from 0 to 1000 points, calculated directly from verifiable blockchain data:

1. Ride History (50% weight, max 500 points)
   * `POINTS_PER_VERIFIED_RIDE = 1`
   * Points accumulate with each verified ride completion
   * Maximum 500 rides counted for points
   * Non-decaying, permanent record

2. Staking Activity (50% weight, max 500 points)
   * Based on two factors:
     * Staking Amount (25%, max 250 points)
       * Points = (staked_amount / MIN_DRIVER_TOKEN_HOLD) × 250
       * Minimum stake requirement: 1000 KAC
     * Staking Duration (25%, max 250 points)
       * Points = (staking_duration_in_days / 30) × 250
       * Resets if stake is removed

#### 4.2.2 Trust Tiers

Based on verifiable blockchain score:

1. Bronze (0-299):
   * Basic platform access
   * `BRONZE_REWARD_MULTIPLIER = 0.8`

2. Silver (300-499):
   * `SILVER_FEE_REDUCTION = 5%`
   * `SILVER_REWARD_MULTIPLIER = 0.9`

3. Gold (500-699):
   * `GOLD_FEE_REDUCTION = 10%`
   * `GOLD_REWARD_MULTIPLIER = 1.0`
   * Priority matching

4. Platinum (700-899):
   * `PLATINUM_FEE_REDUCTION = 15%`
   * `PLATINUM_REWARD_MULTIPLIER = 1.1`
   * Enhanced rewards

5. Diamond (900-1000):
   * `DIAMOND_FEE_REDUCTION = 20%`
   * `DIAMOND_REWARD_MULTIPLIER = 1.2`
   * VIP matching

#### 4.2.3 Score Updates

* Automatically calculated on-chain
* Updates after each verified ride
* Updates daily for staking duration
* No manual intervention required
* Transparent and verifiable by all participants

### 4.3 Dynamic Pricing System

#### 4.3.1 Base Pricing Components

```
Final Price = (BASE_FARE + (KM_RATE × distance) + (MINUTE_RATE × time)) × 
              (TRAFFIC_MULTIPLIER × TIME_MODIFIER)
```

Default Values:
* `BASE_FARE = 50 TRY`
* `KM_RATE = 30 TRY`
* `MINUTE_RATE = 10 TRY`

#### 4.3.2 Dynamic Multipliers

1. Traffic Density:
   * `LIGHT_TRAFFIC_MULTIPLIER = 1.0` (0-30% congestion)
   * `MODERATE_TRAFFIC_MULTIPLIER = 1.2` (31-60% congestion)
   * `HEAVY_TRAFFIC_MULTIPLIER = 1.4` (61-80% congestion)
   * `SEVERE_TRAFFIC_MULTIPLIER = 1.6` (81%+ congestion)

2. Time-Based:
   * `STANDARD_TIME_MODIFIER = 1.0` (09:00-16:00)
   * `PEAK_TIME_MODIFIER = 1.3` (07:00-09:00, 16:00-19:00)
   * `NIGHT_TIME_MODIFIER = 1.25` (23:00-05:00)
   * `OFF_PEAK_MODIFIER = 1.0` (all other times)

#### 4.3.3 Payment Options

* Fiat Payment: Standard rate
* KAC Token Payment:
  * `TOKEN_PAYMENT_DISCOUNT = 5%`
  * Real-time price conversion
  * Smart contract settlement

#### 4.3.4 Price Protection

* `MAX_PRICE_MULTIPLIER = 2.5`
* `MIN_PRICE_MULTIPLIER = 0.8`
* `PRICE_UPDATE_COOLDOWN = 1 hour`

### 4.4 Parameter Governance

#### 4.4.1 Voting Rights

* Requires `MIN_VOTING_TOKEN_HOLD` tokens
* Vote weight = token amount × trust score multiplier
* `MINIMUM_VOTE_QUORUM = 10%`
* `VOTING_PERIOD = 72 hours`

#### 4.4.2 Parameter Change Rules

* Maximum 50% change per proposal
* `PARAMETER_CHANGE_DELAY = 48 hours`
* Minimum 30 days between changes to same parameter
* `SUCCESS_THRESHOLD = 66%` majority

#### 4.4.3 Emergency Changes

* Requires `EMERGENCY_PROPOSAL_THRESHOLD = 10000 KAC`
* `EMERGENCY_SUCCESS_THRESHOLD = 75%`
* `EMERGENCY_IMPLEMENTATION_DELAY = 12 hours`

## 5. Community Governance

### 5.1 Community Structure

KAPKAC operates as a CLOSED community with strict membership requirements:

#### 5.1.1 Referral Requirements

* Driver Referrals: `MIN_DRIVER_REFERENCE_THRESHOLD = 2` existing members
* Passenger Referrals: 
  * Option 1: `MIN_PASSANGER_REFERENCE_THRESHOLD = 2` passengers
  * Option 2: `MIN_PASSANGER_REFERENCE_THRESHOLD/2 = 1` driver

#### 5.1.2 Banning Mechanism

* Standard Ban: `MINIMUM_VOTE_TO_BAN = 50% + 1` of weighted votes
* Founder Ban: `MINIMUM_VOTE_TO_BAN_FOUNDER = 75% + 1` of weighted votes

#### 5.1.3 Referral Chain Impact

When a member is banned:
* Upward Impact: `REFERENCE_HOLD_LEVEL_ABOVE = 2` levels placed on hold
* Downward Impact: `REFERENCE_HOLD_LEVEL_BELOW = All` levels hold
* Status Recovery: Community vote required to remove hold status

#### 5.1.4 Trust Score Impact 

* Voting power is weighted by trust score with multipliers ranging from 0.8x to 1.2x
* Proposal creation requires a minimum trust score of 400
* Emergency proposals necessitate a trust score of 700 or higher

### 5.2 Voting System

* Token-weighted voting
* One token = One vote (weighted by holding duration)
* Proposal requirements:
  * `MIN_VOTING_TOKEN_HOLD` stake
  * `TOTAL_VOTING_TIME_IN_SECONDS` voting period, defaults 72hr
  * New parameter set, new value for example

### 5.3 Sub-community System

#### 5.3.1 Parameter Inheritance

* Sub-communities operate as independent units within the main KAPKAC ecosystem
* Each sub-community inherits the complete parameter structure of the main community
* Parameters can be adjusted independently for each sub-community
* All core smart contracts and mechanisms remain consistent

#### 5.3.2 Sub-Community Operations

* Uses main KAC token for all operations
* Maintains separate member registry and verification status
* Independent governance while adhering to main community rules
* Cannot create nested sub-communities (maximum one level deep)
* Independent sprint management and reward distribution

#### 5.3.3 Sub-community Relations

* Members can participate in multiple communities
* Token holdings apply across all communities
* Bans in main community affect sub-community participation
* Sub-community bans do not affect main community status

## 6. Membership System

### 6.1 Status Flags

Each member account maintains the following status flags:
* is_referred: Received valid community referral
* is_verified: Passed document verification
* is_banned: Removed from community participation
* is_hold: Temporary status due to referral chain ban

### 6.2 Verification Process

* Mandatory document validation for drivers
* On-chain verification record
* Verification appeal process through governance
* Regular renewal requirements (if implemented by community vote)

## 7. Referral Mechanism

[Detailed explanation of referral system, including technical implementation and chain effects]

## 8. Sprint System

A sprint represents a defined operational period with specific parameters for ride-sharing activities and reward distribution.

Community-adjustable parameters:
* `BASE_FARE`: Starting fare for rides
* `KM_RATE`: Per-kilometer rate
* `MINUTE_RATE`: Per-minute rate
* `TRAFFIC_MULTIPLIER_RANGES`: Traffic density multiplier ranges
* `TIME_MODIFIER_RANGES`: Time-based modifier ranges
* `MAX_PRICE_MULTIPLIER`: Maximum price multiplier
* `MIN_PRICE_MULTIPLIER`: Minimum price multiplier
* `TOKEN_PAYMENT_DISCOUNT`: Discount for KAC token payments

All pricing parameters can be adjusted through community governance during sprint proposals, allowing for market-responsive rate adjustments while maintaining system stability.

### 8.1 Sprint Initiation

* Initiated through community proposal
* Requires standard governance vote
* Must specify all sprint parameters
* Takes effect immediately upon approval

### 8.2 Sprint Operation

* Active sprint tracks all qualifying rides
* Accumulates rewards in pool according to parameters
* Maintains real-time qualification status of drivers

### 8.3 Sprint Completion

Sprint ends under two conditions:

1. Natural Completion
   * `TOTAL_SPRINT_TIME_IN_SECONDS` elapsed
   * Automatic reward distribution triggered
   * Final calculations executed

2. Override by New Sprint
   * New sprint proposal approved during active sprint
   * Current sprint immediately terminated
   * Rewards calculated and distributed based on participation until termination
   * New sprint parameters take immediate effect

### 8.4 Reward Distribution

* Executed automatically upon sprint completion
* Qualifications checked against `MIN_DRIVE_FOR_POOL`
* `POOL_SHARE` distributed among qualifying drivers
* Founder inclusion based on `INCLUDE_FOUNDER_IN_POOL` parameter

## 9. Ride Verification and Technical Integration

### 9.1 Ride Proof Mechanism

#### 9.1.1 Verification Architecture

* Hybrid Web2/Web3 implementation
* Founder-maintained centralized verification service
* Blockchain record of verified rides

#### 9.1.2 Verification Process

1. Ride Initiation
   * Smart contract records ride start
   * Parameters locked in blockchain

2. Ride Completion
   * Founder's verification service validates ride details
   * Distance and completion confirmed
   * Smart contract receives verification

3. Reward Processing
   * Verified ride data triggers reward calculation
   * Rewards distributed according to sprint parameters

#### 9.1.3 Security Measures

* Cryptographic signing of verification data
* Multiple confirmation requirements
* Dispute resolution mechanism
* Audit trail of all verifications

## 10. Community Roles

### 10.1 Founders

* Initial platform development
* Strategic direction
* Community building
* Emergency management

### 10.2 Drivers

Requirements:
* Valid documentation
* 1,000 KAC stake
* 2 community references
* Clean driving record

### 10.3 Passengers

Requirements:
* 5 KAC minimum holding
* Valid verification
* Community reference

### 10.4 Community Leaders

* Elected positions
* Moderation duties
* Proposal review
* Community development

## 11. Security and Trust

### 11.1 Network Congestion

* Hybrid architecture reduces blockchain dependency
* Off-chain processing for time-critical operations
* Multiple payment options (Cash, IBAN, Crypto)

### 11.2 Verification System

* Document validation
* Regular renewals
* Multiple verification levels
* Appeal process

### 11.3 Safety Measures

* Real-time tracking
* Emergency support
* Insurance requirements
* Rating system

### 11.4 Data Privacy

* Hashed identities
* Encrypted communication
* Minimal on-chain data

### 11.5 Anti-Fraud Mechanisms

* Slashing conditions
* Rate limiting
* Proof of ride
* Dispute resolution

### 11.6 Trust Score System

#### 11.6.1 Score Calculation 

The system implements real-time score updates with weekly score reconciliation. An appeal process exists for score adjustments. Historical score tracking maintains transparency and accountability.

#### 11.6.2 Trust Score Security 

The system employs a tamper-proof scoring mechanism with cryptographic verification of score components. Regular auditing of score calculations ensures accuracy. Anti-gaming measures protect system integrity.

#### 11.6.3 Recovery Mechanism 

A score recovery program exists for negative events. The community-backed rehabilitation process enables gradual score improvement through a systematic approach. The gradual score improvement system ensures fair recovery opportunities.

## 12. Roadmap

### Phase 1: Foundation (Q1 2025)

* Smart contract development
* Community structure implementation
* Initial token distribution
* Basic feature set

### Phase 2: Growth (Q2-Q3 2025)

* Community expansion
* Feature enhancement
* Partnership development
* Regional expansion

### Phase 3: Maturity (Q4 2025)

* Full governance implementation
* Advanced features
* Cross-city expansion
* Enhanced reward systems

## 13. Risk Analysis

### 13.1 Technical Risks

* Smart contract vulnerabilities
* Network congestion
* Technical failures
* Integration issues

### 13.2 Market Risks

* Regulatory changes
* Competition
* Market conditions
* Adoption challenges

### 13.3 Mitigation Strategies

* Regular audits
* Insurance coverage
* Legal compliance
* Community feedback

## 14. Conclusion

KAPKAC represents a revolutionary approach to ride-sharing in Istanbul, combining blockchain technology with community governance to create a more equitable and efficient transportation system. Through careful tokenomics, strong security measures, and community-driven development, KAPKAC aims to become the leading decentralized ride-sharing platform in Turkey.

## Contact Information

* Telegram Bot: [@kapkac_istanbul_bot](https://t.me/kapkac_istanbul_bot)
* Official Channel : [@kapkac_istanbul](https://t.me/kapkac_istanbul)

---

*This whitepaper is a living document and may be updated as the project evolves.*
