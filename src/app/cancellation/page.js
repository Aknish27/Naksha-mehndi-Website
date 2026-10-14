import PolicyPage, { policyMetadata } from "@/components/PolicyPage";

// Text comes from POLICIES.cancellation in src/config/siteConfig.js. No text = no page (404).
export const metadata = policyMetadata("cancellation");

export default function Page() {
  return <PolicyPage policyKey="cancellation" />;
}
