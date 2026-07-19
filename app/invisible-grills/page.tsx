import type { Metadata } from "next";
import InvisibleGrillsClient from "./InvisibleGrillsClient";

export const metadata: Metadata = {
  title: "Invisible Safety Grills for Balconies & Windows | SafeNet & Co.",
  description: "Secure your balconies and high-rise windows with premium Grade SS316 stainless steel invisible grills by SafeNet & Co. Supporting up to 400 kg tensile load capacity.",
};

export default function InvisibleGrillsPage() {
  return <InvisibleGrillsClient />;
}
