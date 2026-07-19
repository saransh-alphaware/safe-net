import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedBanners from "@/components/home/FeaturedBanners";
import ProductShowcase from "@/components/home/ProductShowcase";
import MarqueeSlider from "@/components/home/MarqueeSlider";
import LoungeBanner from "@/components/home/LoungeBanner";
import ClientLogos from "@/components/home/ClientLogos";
import BlogSection from "@/components/home/BlogSection";
// import ServiceBar from "@/components/home/ServiceBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SafeNet & Co. | Premium Safety Nets & Invisible Grills",
  description: "Secure your balconies, windows, and open spaces with SafeNet & Co. India's premium provider of Grade SS316 invisible grills, bird netting, pleated mosquito screens, and motorized zip screens.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedBanners />
      <ProductShowcase />
      <MarqueeSlider />
      <LoungeBanner />
      <ClientLogos />
      <BlogSection />
      {/* <ServiceBar /> */}
      <Footer />
    </main>
  );
}
