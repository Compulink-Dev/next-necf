import getSection from "@/lib/(home)/section/getSections";
import React from "react";
import HeroDetails from "./heroDetails";

async function HeroSection() {

  const sections = await getSection()
  return (
    <section className="text-gray-600 body-font -mt-32">
      {
        sections.map((data: any) => (
          <HeroDetails
            key={data.image}
            image={data.image}
            title={data.title}
            title2={data.title2}
          />
        ))
      }
    </section>
  );
}

export default HeroSection;
