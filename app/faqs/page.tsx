import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SafeNet & Co.",
  description: "Find answers to frequently asked questions about SafeNet & Co. safety products, including invisible grills, bird netting, pleated mosquito screens, installation services, and warranty details.",
};

export default function FAQPage() {
  return <FaqClient />;
}
