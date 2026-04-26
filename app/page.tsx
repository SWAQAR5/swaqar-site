import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Audience from "@/components/sections/Audience";
import SystemFlow from "@/components/sections/SystemFlow";
import Control from "@/components/sections/Control";
import Timeline from "@/components/sections/Timeline";
import Governance from "@/components/sections/Governance";
import Boundaries from "@/components/sections/Boundaries";
import Comparison from "@/components/sections/Comparison";
import Impact from "@/components/sections/Impact";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <SystemFlow />
        <Control />
        <Timeline />
        <Governance />
        <Boundaries />
        <Comparison />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}