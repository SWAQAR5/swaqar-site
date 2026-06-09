// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx
// SWAQAR Group — Homepage V2
// Assembly file only. No logic. No state. No hooks.
// Each section is a self-contained component in components/sections/
// ─────────────────────────────────────────────────────────────────────────────
//
// SUSPENDED FILES — on disk but NOT imported here:
//   components/sections/Audience.tsx       (replaced by Phase1Reality.tsx)
//   components/sections/Comparison.tsx     (category drift risk — suspended)
//   components/sections/Control.tsx        (replaced by Governance.tsx)
//   components/sections/CTA.tsx            (sales framing — suspended)
//   components/sections/Impact.tsx         (no verified metrics at Phase 1 — suspended)
//   components/sections/SystemFlow.tsx     (replaced by CandidateCorridorFlow.tsx)
//   components/sections/Timeline.tsx       (replaced by StrategicArms.tsx)
//   components/visuals/HeroFlow.tsx        (pending content review — suspended)
//
// Do not delete suspended files. They may be reviewed or archived later.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import Phase1Reality from "@/components/sections/Phase1Reality";
import WhySwaqarExists from "@/components/sections/WhySwaqarExists";
import CoordinationPillars from "@/components/sections/CoordinationPillars";
import Boundaries from "@/components/sections/Boundaries";
import CandidateCorridorFlow from "@/components/sections/CandidateCorridorFlow";
import Governance from "@/components/sections/Governance";
import StrategicArms from "@/components/sections/StrategicArms";
import SubmitForm from "@/components/sections/SubmitForm";
import Footer from "@/components/layout/Footer";

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "SWAQAR Group — Corridors of Trust",
  description:
    "A governance-led, asset-light, non-custodial Trade Coordination Layer coordinating verification, documentation alignment, stakeholder synchronization, and institutional trust across Africa, the Middle East, and Asia.",
  keywords: [
    "SWAQAR Group",
    "Trade Coordination Layer",
    "Corridors of Trust",
    "Africa Middle East Asia",
    "governance-led trade",
    "verification governance",
    "corridor infrastructure",
    "institutional trade coordination",
  ],
  openGraph: {
    title: "SWAQAR Group — Corridors of Trust",
    description:
      "Governance-led, asset-light, non-custodial Trade Coordination Layer across Africa ⇄ Middle East ⇄ Asia.",
    siteName: "SWAQAR Group",
    locale: "en_US",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Homepage
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-[#F7F8FA] text-[#0B1F3A]">

      {/* 1 — HERO
          Title: SWAQAR Group / Corridors of Trust
          Subheadline: Trade Coordination Layer mission statement
          CTAs: Submit Institutional Inquiry + View Phase 1 Focus
          File: components/sections/Hero.tsx */}
      <Hero />

      {/* 2 — CURRENT INSTITUTIONAL STAGE
          Phase 1 foundation stage explanation
          Focus areas: governance activation, partner qualification,
          candidate corridor preparation, proof before scale
          File: components/sections/Phase1Reality.tsx */}
      <Phase1Reality />

      {/* 3 — WHY SWAQAR EXISTS
          Corridor problems: fragmented verification, documentation drift,
          disconnected stakeholders, corridor trust gaps
          File: components/sections/WhySwaqarExists.tsx */}
      <WhySwaqarExists />

      {/* 4 — WHAT SWAQAR COORDINATES
          Six coordination pillars
          Clarification: SWAQAR coordinates — licensed operators execute
          File: components/sections/CoordinationPillars.tsx */}
      <CoordinationPillars />

      {/* 5 — WHAT SWAQAR IS / IS NOT
          Clear institutional boundary statement
          SWAQAR does not trade, broker, custody funds, provide escrow,
          operate logistics, or run a marketplace
          File: components/sections/Boundaries.tsx */}
      <Boundaries />

      {/* 6 — CANDIDATE CORRIDOR PREPARATION FLOW
          Five-step readiness process:
          Counterparty Qualification → Documentation Alignment →
          Licensed Partner Coordination → Governance Review →
          Pilot Readiness Decision
          File: components/sections/CandidateCorridorFlow.tsx */}
      <CandidateCorridorFlow />

      {/* 7 — GOVERNANCE & VERIFICATION LAYER
          Core message: Governance before growth.
          Verification before execution. Trust before scale.
          Proof before expansion.
          File: components/sections/Governance.tsx */}
      <Governance />

      {/* 8 — STRATEGIC ARMS PREVIEW
          Future architecture — not current operational capability
          Six arms presented with counsel-validated / future status
          File: components/sections/StrategicArms.tsx */}
      <StrategicArms />

      {/* 9 — INSTITUTIONAL INQUIRY
          Fields: Name, Organization, Role, Email, Inquiry Type, Message
          No transaction language. No deal size. No opportunity submission.
          File: components/sections/SubmitForm.tsx */}
      <SubmitForm />

      {/* 10 — FOOTER
          All names: SWAQAR Group
          Africa ⇄ Middle East ⇄ Asia
          Institutional disclaimer
          No "System Operational" language
          File: components/layout/Footer.tsx */}
      <Footer />

    </main>
  );
}