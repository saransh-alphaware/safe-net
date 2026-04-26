import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedBanners from "@/components/home/FeaturedBanners";
import ProductShowcase from "@/components/home/ProductShowcase";
import MarqueeSlider from "@/components/home/MarqueeSlider";
import LoungeBanner from "@/components/home/LoungeBanner";
import ClientLogos from "@/components/home/ClientLogos";
import BlogSection from "@/components/home/BlogSection";
import ServiceBar from "@/components/home/ServiceBar";
import Footer from "@/components/layout/Footer";

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
      <ServiceBar />
      <Footer />
    </main>
  );
}
