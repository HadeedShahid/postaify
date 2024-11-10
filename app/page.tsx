import FAQSection from "@/components/faqs-section";
import FeatureGrid from "@/components/feature-grid";
import FeatureSection from "@/components/feature-section";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <FAQSection />
    </>
  );
}
