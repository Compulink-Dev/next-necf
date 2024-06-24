
import React, { useState } from "react";
import Programme from "./programme";
import { Button } from "@/components/ui/button";
import { galleries } from "@/constants/data";
import { GalleryModal } from "./galleryModal";

function AllPrograms() {
  // const [toggle, setToggle] = useState(1);
  // function updateToggle(id: any) {
  //   setToggle(id);
  // }
  return (
    <div className="flex flex-col top-0 mt-10">
      <div className=" flex items-center h-10 mx-10 gap-2">
        <Button
          type="button"
          // onClick={() => updateToggle(1)}
          className="flex items-center justify-center gap-1 py-2 px-5 bg-green-700 hover:bg-green-500 focus:outline-none focus:bg-green-600 focus:text-white"
        >
          Programs
        </Button>{" "}
        <Button
          type="button"
          // onClick={() => updateToggle(2)}
          className="py-2 px-5 bg-green-700 hover:bg-green-500 focus:outline-none focus:bg-green-600 active: focus:text-white"
        >
          Gallery
        </Button>
      </div>
      <div className="">
        <div className={""}>
          <Programme />
        </div>
        <div className={''}>
          <div className=" grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4 mx-auto my-4">
            {
              galleries.map((data) => (
                <GalleryModal
                  id={data.id}
                  key={data.id}
                  imageUrl={data.imageUrl}
                  title={data.title}
                  desc={data.desc}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPrograms;
