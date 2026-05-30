// app/collections/page.tsx

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTitle from "./PageTitle";
import CollectionsGrid from "./CollectionsGrid";

export const metadata: Metadata = {
  title: "Collections | Safenet",
  description: "Explore our premium decor collections.",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <PageTitle />
        <CollectionsGrid />
      </main>
      <Footer />
    </>
  );
}