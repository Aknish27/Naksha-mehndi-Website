import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

// Text comes from POLICIES.booking in src/config/siteConfig.js. No text = no page (404).
export const metadata = policyMetadata("booking");

export default function Page() {
  return <PolicyPage policyKey="booking" />;
}
