import MainLayout from "@/components/layout";
import React from "react";
import HeroSection from "./_components/hero";
import Statistic from "./_components/statistic";
import Sponsor from "./_components/sponsors";
import AboutImage from "./_components/aboutImage";
import Testimonial from "./_components/testimonial";
import EventPageServer from "./_components/eventServer";
import Subscribe from "@/components/subscribe";

function Home() {
  return (

    <MainLayout>
      <HeroSection />
      <AboutImage />
      <EventPageServer />
      <Statistic />
      <Sponsor />
      <Subscribe />
      <Testimonial />
    </MainLayout>

  );
}

export default Home;
