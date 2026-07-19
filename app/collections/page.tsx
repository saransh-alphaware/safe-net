// app/collections/page.tsx

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/ui/PageTitle";
import CollectionsGrid from "./CollectionsGrid";

export const metadata: Metadata = {
  title: "Collections | SafeNet & Co.",
  description: "Explore our premium safety net and invisible grill collections.",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <PageTitle title="Collections" />
        <CollectionsGrid />
      </main>
      <Footer />
    </>
  );
}