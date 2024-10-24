import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <FeaturedWork />
      <Footer />
    </>
  );
}
