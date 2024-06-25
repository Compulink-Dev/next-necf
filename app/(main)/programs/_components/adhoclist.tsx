import React from "react";
import { ProgrammeCard } from "./programmeCard";
import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";
import { ProgramModal } from "./programModal";

export async function getAdocs() {
  await connectToDB()
  const adhoc = await Adhoc.find()
  return adhoc;
}

export default async function AdhocList() {
  const adhocs = await getAdocs()
  return (
    <div className="col-span-1 gap-4 flex flex-wrap">
      {adhocs.map((adhoc: any) => (
        <ProgramModal
          key={adhoc.id}
          title={adhoc.title}
          description={adhoc.description}
          image={adhoc.image}
        />
      ))}
    </div>
  );
}
