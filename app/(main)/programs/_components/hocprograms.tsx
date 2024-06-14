import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { hocprograms } from "@/constants/hocprograms";
import { ProgrammeCard } from "./programmeCard";

export default function HocPrograms() {
  return (
    <div className="col-span-1 gap-10">
      {hocprograms.map((hp) => (
        <ProgrammeCard
          key={hp.id}
          title={hp.title}
          desc={hp.desc}
          image={hp.imageUrl}
        />
      ))}
    </div>
  );
}
