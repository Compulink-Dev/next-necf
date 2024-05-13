import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface ProgramProps {
  title: string,
  desc: string,
  imageUrl: string
}


const ProgramCard = ({ title, desc, imageUrl }: ProgramProps) => {
  return (
    <div className="col-span-1 gap-10">
      <div className="border border-green-600 shadow-lg rounded">
        <Image
          src={imageUrl}
          alt=""
          height={500}
          width={600}
          className="w-[100%]  h-80 mx-auto object-cover"
        />
        <div className="m-6">
          <h1 className="text-xl font-semibold text-green-600">
            {title}
          </h1>
          <p className="text-sm">
            {desc}
          </p>
          <Button className="bg-green-600 text-white text-sm uppercase my-4 p-2 hover:bg-green-950">
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}


function Programme() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
        <div className="col-span-1 md:col-span-2 mx-4 gap-6">
          <div className="border h-[400px] border-green-600 shadow-lg">
            <Image
              src={"/program3.jpg"}
              alt=""
              height={400}
              width={600}
              className="w-full h-full"
            />
            <div className="m-10 flex-1">
              <h1 className="text-2xl font-semibold text-green-600">
                INTERNATIONAL BUSINESS CONFERENCE (IBC)
              </h1>
              <p className="text-sm">
                The NECF hosts the International Business Conference in
                partnership with the Zimbabwe International Trade Fair Company
                (ZITF) on a Wednesday of the Trade Fair Week. The Conference is
                held at the end of the year’s first quarter and has become
                Zimbabwe’s largest business forum for both public and private
                sector decision makers. The high-level conference brings
                together policy makers, both local and international captains of
                industry and commerce, indigenous entrepreneurs, academics and
                business leaders who have a vested interest in positively
                contributing to the economic discourse and development of the
                country."
              </p>
              <Button className="bg-green-800 hover:bg-green-600 text-white uppercase my-4 p-2 w-full">
                Register
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-[550px] sm:mt-[300px] md:mt-0">
          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 rounded">
            <input
              name="name"
              type="text"
              placeholder="Search"
              className="p-3 rounded w-[94%] mx-auto outline-none mt-4"
            />
            <button className="w-[94%] bg-green-600 rounded text-center text-white mx-auto p-2 mb-4">
              Search
            </button>
          </div>

          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 rounded">
            <h1 className="text-lg font-semibold ml-3 mt-4">Category</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
          </div>

          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 rounded">
            <h1 className="text-lg font-semibold ml-3 mt-4">Recent Posts</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
          </div>
          <div className="flex flex-col gap-4 bg-green-200 mx-4 md:mt-0 ">
            <h1 className="text-lg font-semibold ml-3 mt-4">NewsLetter</h1>
            <hr className="w-[94%] mx-auto bg-gray-900 py-[0.5px]" />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="p-3 rounded-sm w-[94%] mx-auto outline-none "
            />
            <button className="w-[94%] bg-green-600 text-center text-white mx-auto p-2 mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-40 gap-6 mx-4">
        <ProgramCard
          title="INTERNATIONAL BUSINESS CONFERENCE (IBC)"
          desc="The NECF hosts the International Business Conference in partnership with the Zimbabwe International Trade Fair Company (ZITF) on a Wednesday of the Trade Fair Week. The Conference is held at the end of the year’s first quarter and has become Zimbabwe’s largest business forum for both public and private sector decision makers. The high-level conference brings together policy makers, both local and international captains of industry and commerce, indigenous entrepreneurs, academics and business leaders who have a vested interest in positively contributing to the economic discourse and development of the country."
          imageUrl="/necf3.jpg"
        />
        <ProgramCard
          title="THE INFRASTRUCTURE SUMMIT AND EXPO (ISE)"
          desc=" The Annual Infrastructure Summit and Expo is a high-level
        dialogue platform that seek ways of putting into practice known
        and novel ways of dealing with the country’s enduring
        infrastructure bottlenecks as a means to catapult the nation
        into the Upper Middle-Income Economy envisaged in Vision 2030.
        The first edition was held on 8-9 September 2022 at the Elephant
        Hills Resort, Victoria Falls. The next instalment is scheduled
        to be held during the second quarter of 2024"
          imageUrl="/necf3.jpg"
        />
        <ProgramCard
          title="ANNUAL NATIONAL AGRI-BUSINESS CONFERENCE (ANAC)"
          desc="In partnership with the Zimbabwe Agricultural Society (ZAS)the NECF holds the ANAC at the Zimbabwe Agricultural Show Grounds every Wednesday of the show week in August of every year. The conference is a dialogue platform and a business networking environment that gives economic players an opportunity to discuss pertinent agribusiness issues."
          imageUrl="/anac.jpg"
        />
      </div>
    </>
  );
}

export default Programme;
