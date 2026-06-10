// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx  — SWAQAR Group Homepage V3
// Full section order matching V2_2 institutional design
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import TrustPillars from "@/components/sections/TrustPillars";
import CorridorStatement from "@/components/sections/CorridorStatement";
import ProblemSection from "@/components/sections/ProblemSection";
import CorridorMap from "@/components/sections/CorridorMap";
import AudienceNav from "@/components/sections/AudienceNav";
import OperatingFunctions from "@/components/sections/OperatingFunctions";
import InstitutionalCounterparts from "@/components/sections/InstitutionalCounterparts";
import Boundaries from "@/components/sections/Boundaries";
import CategoryClarity from "@/components/sections/CategoryClarity";
import RegulatedBoundary from "@/components/sections/RegulatedBoundary";
import FourGates from "@/components/sections/FourGates";
import CandidateCorridorPrep from "@/components/sections/CandidateCorridorPrep";
import Governance from "@/components/sections/Governance";
import StrategicArms from "@/components/sections/StrategicArms";
import SubmitForm from "@/components/sections/SubmitForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SWAQAR Group — Corridors of Trust",
  description:
    "A governance-led, verification-first, asset-light, non-custodial Trade Coordination Layer coordinating verified cross-regional trade corridors across Africa, the Middle East, and Asia.",
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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryClarity />
      <TrustPillars />
      <CorridorStatement />
      <ProblemSection />
      <CorridorMap />
      <AudienceNav />
      <OperatingFunctions />
      <InstitutionalCounterparts />
      <Boundaries />
      <RegulatedBoundary />
      <FourGates />
      <CandidateCorridorPrep />
      <Governance />
      <StrategicArms />
      <SubmitForm />
      <Footer />
    </main>
  );
}
