import MainLayout from "@/components/layout";
import React from "react";
import HeroSection from "./_components/hero";
import Statistic from "./_components/statistic";
import Subscribe from "@/components/subscribe";
import Event from "./_components/event";
import AboutImage from "./_components/aboutImage";
import Testimonial from "./_components/testimonial";

function Home() {
  return (

    <MainLayout>
      <HeroSection />
      <AboutImage />
      <Event />
      <Statistic />
      <Subscribe />
      <Testimonial />
    </MainLayout>

  );
}

export default Home;
