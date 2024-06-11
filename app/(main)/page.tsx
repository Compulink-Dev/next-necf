import MainLayout from "@/components/layout";
import Navbar from "@/components/navbar";
import React from "react";
import HeroSection from "./_components/hero";
import Statistic from "./_components/statistic";
import Subscribe from "@/components/subscribe";
import Event from "./_components/event";
import AboutImage from "./_components/aboutImage";
require('events').EventEmitter.defaultMaxListeners = 15;


function Home() {
  return (

    <MainLayout>
      <HeroSection />
      <AboutImage />
      <Event />
      <Statistic />
      <Subscribe />
    </MainLayout>

  );
}

export default Home;
