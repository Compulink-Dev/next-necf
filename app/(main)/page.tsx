import MainLayout from "@/components/layout";
import React from "react";
import HeroSection from "./_components/hero";
import Statistic from "./_components/statistic";
import Subscribe from "@/components/subscribe";
import AboutImage from "./_components/aboutImage";
import Testimonial from "./_components/testimonial";
import EventPageServer from "./_components/eventServer";

function Home() {
  return (

    <MainLayout>
      <HeroSection />
      <AboutImage />
      <EventPageServer />
      <Statistic />
      <Subscribe />
      <Testimonial />
    </MainLayout>

  );
}

export default Home;
