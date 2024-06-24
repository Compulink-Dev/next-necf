import React from "react";
import { ProgrammeCard } from "./programmeCard";
import getAdhocs from "@/lib/(programs)/adhoc/getAdhocs";

export default async function AdhocList() {
  const adhocs = await getAdhocs()
  return (
    <div className="col-span-1 gap-10 flex flex-wrap">
      {adhocs.map((adhoc: any) => (
        <ProgrammeCard
          key={adhoc.id}
          title={adhoc.title}
          desc={adhoc.description}
          image={adhoc.image}
        />
      ))}
    </div>
  );
}
