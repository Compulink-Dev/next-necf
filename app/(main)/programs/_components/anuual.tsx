import getAnnuals from "@/lib/(programs)/annual/getAnnuals";

import React from "react";
import { ProgramModal } from "./programModal";
import EventCard from "@/components/EventCard";
import ProgramCard from "@/components/ProgramCard";

async function AnnualList() {
  const annuals = await getAnnuals();

  console.log("annuals", annuals);

  return (
    <div className="col-span-1 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {annuals.map((annual: any) => {
        return (
          <ProgramCard
            key={annual.title}
            title={annual.title}
            date={annual.date}
            image={annual.image}
            link={annual.link}
          />
        );
      })}
    </div>
  );
}

export default AnnualList;
