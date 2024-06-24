import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import TaskForces from "./adhoclist";
import { hocprograms } from "@/constants/hocprograms";
import HocPrograms from "./hocprograms";
import { ProgrammeCard } from "./programmeCard";
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import getPrograms from "@/lib/(programs)/program/getPrograms";
import getTasks from "@/lib/(programs)/taskforce/getTasks";
import AnnualList from "./anuual";
import AdhocList from "./adhoclist";


interface ProgramProps {
  title: string;
  desc: string;
  image: string;
  subtitle?: string
}

const ProgramCard = ({ title, desc, image, subtitle }: ProgramProps) => {
  return (
    <Card className={cn("w-full md:w-2/4")} >
      <CardHeader>
        <CardTitle className="text-green-600">{title}</CardTitle>
        <CardDescription>Register now to join</CardDescription>
        <p className="text-green-600 font-bold">{subtitle}</p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">

          <div className="flex-1 flex items-center justify-center space-y-1">
            <Image src={image} alt="" width={100} height={100} className="w-2/4 object-contain" />
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-700">
            {desc}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-500">
          <Check className="mr-2 h-4 w-4" />Register now
        </Button>
      </CardFooter>
    </Card>
  );
};

async function Programme() {
  const programs = await getPrograms()
  const taskforces = await getTasks()
  return (
    <>
      <div className="flex w-full p-8">
        {
          programs.map((program: any) => {
            return (
              <ProgramCard
                key={program.title}
                image={program.image}
                title={program.title}
                desc={program.description}
                subtitle={program.subtitle}
              />
            )
          })
        }
        <div className="flex-1 hidden md:flex flex-col text-slate-500">
          <div className="flex flex-col gap-4 border m-4 md:mt-0 rounded">
            <input
              name="name"
              type="text"
              placeholder="Search"
              className="p-3 rounded border w-[94%] mx-auto outline-none mt-4"
            />
            <Button className="w-[94%] bg-green-600 hover:bg-green-700 rounded text-center text-white mx-auto p-2 mb-4">
              Search
            </Button>
          </div>

          <div className="flex flex-col gap-4 border m-4 md:mt-0 rounded">
            <h1 className="text-lg font-semibold ml-3 mt-4">Category</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
          </div>

          <div className="flex flex-col gap-4 border m-4 md:mt-0 rounded">
            <h1 className="text-lg font-semibold ml-3 mt-4">Recent Posts</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
          </div>
          <div className="flex flex-col gap-4 border rounded mx-4 md:mt-0 ">
            <h1 className="text-lg font-semibold ml-3 mt-4">NewsLetter</h1>
            <hr className="w-[94%] mx-auto bg-gray-900 py-[0.5px]" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-3 rounded-sm border w-[94%] mx-auto outline-none "
            />
            <Button className="w-[94%] bg-green-600 hover:bg-green-700 text-center text-white mx-auto p-2 mb-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mx-8 gap-12">
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4 text-center text-green-600 uppercase">
            Task Forces
          </h1>
          {taskforces.length ? (
            <TaskForces />
          ) : (
            <Image
              src={"/loading.gif"}
              alt="loading..."
              height={100}
              width={100}
              className=" py-10"
            />
          )}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold text-green-600 uppercase">
            Annual Programs
          </h1>
          <AnnualList />
        </div>
        <div className="my-10 flex flex-col items-center justify-start">
          <h1 className="text-2xl text-center font-semibold mb-4 text-green-600 uppercase">
            Ad hoc Programs
          </h1>

          {hocprograms.length ? (
            <AdhocList />
          ) : (
            <Image
              src={"/loading.gif"}
              alt="loading..."
              height={100}
              width={100}
              className=" py-10"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Programme;



// <ProgrammeCard
// title="INTERNATIONAL BUSINESS CONFERENCE (IBC)"
// desc="The NECF hosts the International Business Conference in partnership with the Zimbabwe International Trade Fair Company (ZITF) on a Wednesday of the Trade Fair Week. The Conference is held at the end of the year’s first quarter and has become Zimbabwe’s largest business forum for both public and private sector decision makers. The high-level conference brings together policy makers, both local and international captains of industry and commerce, indigenous entrepreneurs, academics and business leaders who have a vested interest in positively contributing to the economic discourse and development of the country."
// image="/necf3.jpg"
// />
// <ProgrammeCard
// title="THE INFRASTRUCTURE SUMMIT AND EXPO (ISE)"
// desc=" The Annual Infrastructure Summit and Expo is a high-level
// dialogue platform that seek ways of putting into practice known
// and novel ways of dealing with the country’s enduring
// infrastructure bottlenecks as a means to catapult the nation
// into the Upper Middle-Income Economy envisaged in Vision 2030.
// The first edition was held on 8-9 September 2022 at the Elephant
// Hills Resort, Victoria Falls. The next instalment is scheduled
// to be held during the second quarter of 2024"
// image="/necf3.jpg"
// />
// <ProgrammeCard
// title="ANNUAL NATIONAL AGRI-BUSINESS CONFERENCE (ANAC)"
// desc="In partnership with the Zimbabwe Agricultural Society (ZAS)the NECF holds the ANAC at the Zimbabwe Agricultural Show Grounds every Wednesday of the show week in August of every year. The conference is a dialogue platform and a business networking environment that gives economic players an opportunity to discuss pertinent agribusiness issues."
// image="/anac.jpg"
// />