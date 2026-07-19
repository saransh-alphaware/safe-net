import type { Metadata } from "next";
import MosquitoNetClient from "./MosquitoNetClient";

export const metadata: Metadata = {
  title: "Premium Mosquito Nets & Insect Screens | SafeNet & Co.",
  description: "Keep mosquitoes and insects out while allowing fresh air and natural light. SafeNet & Co. offers premium pleated retractable nets and roller insect screens.",
};

export default function MosquitoNetPage() {
  return <MosquitoNetClient />;
}
