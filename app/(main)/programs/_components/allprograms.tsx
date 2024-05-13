"use client";
import Link from "next/link";
import React, { useState } from "react";
import GalleryCard from "./gallerycard";
import Programme from "./programme";
import { Button } from "@/components/ui/button";

function AllPrograms() {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id: any) {
    setToggle(id);
  }
  return (
    <div className="flex flex-col  top-0 mt-10">
      <div className=" flex items-center h-10 mx-10 gap-2">
        <Button
          type="button"
          onClick={() => updateToggle(1)}
          className="flex items-center justify-center gap-1 py-2 px-5 bg-green-700 hover:bg-green-500 focus:outline-none focus:bg-green-600 focus:text-white"
        >
          Programs
        </Button>{" "}
        <Button
          type="button"
          onClick={() => updateToggle(2)}
          className="py-2 px-5 bg-green-700 hover:bg-green-500 focus:outline-none focus:bg-green-600 active: focus:text-white"
        >
          Gallery
        </Button>
      </div>
      <div className="">
        <div className={toggle == 1 ? "block" : "hidden"}>
          <Programme />
        </div>
        <div className={toggle == 2 ? "block" : "hidden"}>
          <div className=" flex flex-wrap items-center justify-center gap-4 mx-auto my-4">
            <GalleryCard
              imageUrl="/logo.png"
              title="NECF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <GalleryCard
              imageUrl="/logo.png"
              title="NECF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <GalleryCard
              imageUrl="/logo.png"
              title="NECF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <GalleryCard
              imageUrl="/logo.png"
              title="NECF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <GalleryCard
              imageUrl="/logo.png"
              title="NECF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <GalleryCard
              imageUrl="/logo.png"
              title="NECF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPrograms;
