import React from "react";
import { ProgrammeCard } from "./programmeCard";
import { connectToDB } from "@/lib/connectToDB";
import TaskForce from "@/models/(programs)/taskforce";
import { ProgramModal } from "./programModal";

export async function getTasks() {
  await connectToDB()
  const tasks = await TaskForce.find()
  return tasks;
}


export default async function TaskForces() {
  const taskforces = await getTasks()
  return (
    <div className="col-span-1 gap-4 flex flex-wrap">
      {taskforces.map((tf: any) => (
        <ProgramModal
          key={tf.id}
          title={tf.title}
          description={tf.description}
          image={tf.image}
        />
      ))}
    </div>
  );
}
