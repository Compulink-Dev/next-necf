import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { taskforces } from "@/constants/taskforces";
import { ProgrammeCard } from "./programmeCard";

export default function TaskForces() {
  return (
    <div className="col-span-1 gap-10">
      {taskforces.map((tf) => (
        <ProgrammeCard
          key={tf.id}
          title={tf.title}
          desc={tf.desc}
          image={tf.imageUrl}
        />
      ))}
    </div>
  );
}
