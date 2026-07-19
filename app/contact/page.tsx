import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | SafeNet & Co. Balcony & Window Protection",
  description: "Get in touch with SafeNet & Co. for professional measurements and quotations for high-tensile invisible grills, bird nets, and mosquito screens. Mumbai & Delhi offices.",
};

export default function ContactPage() {
  return <ContactClient />;
}
