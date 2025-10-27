'use client'

import ChatCTASection from "@/components/ui/site/ChatCTASection";
import FreeTrialCTASection from "@/components/ui/site/FreeTrialCTASection";
import Hero from "@/components/ui/site/Hero";
import LandingAIChat from "@/components/ui/site/LandingAIChat";
import SlowVideoSection from "@/components/ui/site/SlowVideoWorldSection";
import TrustMetricsSection from "@/components/ui/site/TrustMetricsSection";
import WhatLikeToDo from "@/components/ui/site/WhatLikeToDo";


import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";



function Home() {




  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    gsap.to(".image", {
      scrollTrigger: {
        trigger: ".image",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      scale: 1.2,
      rotation: 10,
      duration: 1,
    });
  }, []);





  return (
    <div>
      <Hero />

      <div className="translate-y-[400px] pb-[400px]">
        <LandingAIChat />
        <WhatLikeToDo />
        <ChatCTASection />
        <TrustMetricsSection />
        <FreeTrialCTASection />
      </div>

      <SlowVideoSection />
    </div>
  )
}


export default Home;












