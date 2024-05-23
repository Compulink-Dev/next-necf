import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { taskforces } from "@/constants/taskforces";

export default function TaskForces() {
  return (
    <div className="col-span-1 gap-10">
      {taskforces.map((tf) => (
        <div key={tf.id} className="border border-green-600 shadow-lg rounded">
          <Image
            src={tf.imageUrl}
            alt=""
            height={500}
            width={600}
            className="w-[100%]  h-80 mx-auto object-cover"
          />
          <div className="m-6">
            <h1 className="text-xl font-semibold text-green-600">{tf.title}</h1>
            <p className="text-sm">{tf.desc}</p>
            <Button className="bg-green-600 w-full  text-white text-sm uppercase my-4 p-2 hover:bg-green-700">
              Register
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
