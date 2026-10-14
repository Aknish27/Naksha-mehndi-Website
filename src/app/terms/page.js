import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

// Text comes from POLICIES.terms in src/config/siteConfig.js. No text = no page (404).
export const metadata = policyMetadata("terms");

export default function Page() {
  return <PolicyPage policyKey="terms" />;
}
