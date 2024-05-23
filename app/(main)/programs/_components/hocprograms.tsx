import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { hocprograms } from "@/constants/hocprograms";

export default function HocPrograms() {
  return (
    <div className="col-span-1 gap-10">
      {hocprograms.map((hp) => (
        <div className="border border-green-600 shadow-lg rounded">
          <Image
            src={hp.imageUrl}
            alt=""
            height={500}
            width={600}
            className="w-[100%]  h-80 mx-auto object-cover"
          />
          <div className="m-6">
            <h1 className="text-xl font-semibold text-green-600">{hp.title}</h1>
            <p className="text-sm">{hp.desc}</p>
            <Button className="bg-green-600 w-full  text-white text-sm uppercase my-4 p-2 hover:bg-green-700">
              Register
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
