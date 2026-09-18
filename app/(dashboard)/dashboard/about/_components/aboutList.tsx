import React from "react";
import { connectToDB } from "@/lib/connectToDB";
import Link from "next/link";
import Image from "next/image";
import { MdEditDocument } from "react-icons/md";
import AboutSection from "@/models/(about)/aboutSection";

type AboutSectionDoc = {
  id?: string
  _id?: unknown
  image?: string
  title?: string
  title2?: string
  title3?: string
  title4?: string
  title5?: string
  title6?: string
}

export async function loadAbout() {
  await connectToDB();
  const abouts = await AboutSection.find();
  return abouts;
}

export const TopCard = ({ about }: { about: AboutSectionDoc }) => {
  return (
    <div className="rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60">
      <Link
        href={`/dashboard/about/section/${about.id}`}
        className="flex flex-col items-start gap-2 w-full"
      >
        <div className="flex gap-2">
          <Image
            src={`${about.image}`}
            alt={about.image}
            width={400}
            height={400}
            className="w-full rounded-xl ring-1 ring-border/50 object-cover"
          />
        </div>
        <div className="text-sm text-slate-600 space-y-6">
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-emerald-500"} />
              <p className="text-foreground font-medium">{about.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-emerald-500"} />
              <p className="text-muted-foreground">{about.title2}</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-emerald-500"} />
              <p className="text-muted-foreground">{about.title3}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-emerald-500"} />
              <p className="text-muted-foreground">{about.title4}</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-emerald-500"} />
              <p className="text-muted-foreground">{about.title5}</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-emerald-500"} />
              <p className="text-muted-foreground">{about.title6}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

async function AboutList() {
  const abouts = await loadAbout();
  return (
    <div className="flex flex-col gap-4">
      {abouts.map((about: AboutSectionDoc) => {
        return <TopCard key={about.id} about={about} />;
      })}
    </div>
  );
}

export default AboutList;
