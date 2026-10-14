import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

// Text comes from POLICIES.privacy in src/config/siteConfig.js. No text = no page (404).
export const metadata = policyMetadata("privacy");

export default function Page() {
  return <PolicyPage policyKey="privacy" />;
}
