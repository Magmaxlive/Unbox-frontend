import DropsSection from "@/components/Homepage/DropsSection";
import HeroSection from "@/components/Homepage/HeroSection";
import MarqueeSection from "@/components/Homepage/MarqueeSection";
import TopicsSection from "@/components/Homepage/TopicsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MarqueeSection/>
      <DropsSection/>
      <TopicsSection/>
    </div>
  );
}
