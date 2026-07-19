import type { Metadata } from "next";
import BirdNetClient from "./BirdNetClient";

export const metadata: Metadata = {
  title: "Professional Anti-Bird Netting Services | SafeNet & Co.",
  description: "Get rid of pigeon menace humanely and permanently. SafeNet & Co. provides premium balcony bird netting, industrial safety nets, and stainless steel bird spikes.",
};

export default function BirdNetPage() {
  return <BirdNetClient />;
}
