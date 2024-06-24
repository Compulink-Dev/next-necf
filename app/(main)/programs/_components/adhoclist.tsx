import React from "react";
import { ProgrammeCard } from "./programmeCard";
import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";

export async function getAdocs() {
  await connectToDB()
  const adhoc = await Adhoc.find()
  return adhoc;
}

export default async function AdhocList() {
  const adhocs = await getAdocs()
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
