"use client";
import Link from "next/link";
import React, { useState } from "react";
import GalleryCard from "./gallerycard";
import Programz from "./programz";

function AllPrograms() {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id: any) {
    setToggle(id);
  }
  return (
    <div className="flex flex-col  top-0 mt-10  ">
      <div className=" flex items-center  h-10 mx-10">
        <button
          type="button"
          onClick={() => updateToggle(1)}
          className="flex items-center justify-center gap-1 py-2 px-5 hover:bg-white focus:outline-none focus:bg-green-600 focus:text-white border border-green-600"
        >
          Programs
        </button>{" "}
        <button
          type="button"
          onClick={() => updateToggle(2)}
          className="py-2 px-5 hover:bg-white focus:outline-none focus:bg-green-600 active: focus:text-white border border-green-600 "
        >
          Gallery
        </button>
      </div>
      <div className="">
        <div className={toggle == 1 ? "block" : "hidden"}>
          <Programz />
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
