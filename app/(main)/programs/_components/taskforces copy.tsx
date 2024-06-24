import React from "react";
import { ProgrammeCard } from "./programmeCard";
import getTasks from "@/lib/(programs)/taskforce/getTasks";

export default async function TaskForces() {
  const taskforces = await getTasks()
  return (
    <div className="col-span-1 gap-10 flex flex-wrap">
      {taskforces.map((tf: any) => (
        <ProgrammeCard
          key={tf.id}
          title={tf.title}
          desc={tf.description}
          image={tf.image}
        />
      ))}
    </div>
  );
}
