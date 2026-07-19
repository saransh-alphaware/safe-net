import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | SafeNet & Co. Safety Solutions",
  description: "Learn about SafeNet & Co., founded by Mr. Aakash Upadhyaya in 2022. We are India's premier provider of high-tensile invisible grills, bird netting, pleated mosquito screens, and motorized zip screens.",
};

export default function AboutPage() {
  return <AboutClient />;
}
