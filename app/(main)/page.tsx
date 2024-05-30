import MainLayout from "@/components/layout";
import Navbar from "@/components/navbar";
import React from "react";
import HeroSection from "./_components/hero";

import Testimonials from "@/components/testimonials";
import Statistic from "./_components/statistic";
import Subscribe from "@/components/subscribe";
import Event from "./_components/event";
import AboutImage from "./_components/aboutImage";


function Home() {
  return (

    <MainLayout>
      <HeroSection />
      <AboutImage />
      <Event />
      <Statistic />
      <Testimonials />
      <Subscribe />
    </MainLayout>

  );
}

export default Home;
