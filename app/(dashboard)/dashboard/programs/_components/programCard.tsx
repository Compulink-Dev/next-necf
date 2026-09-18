import { connectToDB } from "@/lib/connectToDB";
import Program from "@/models/(programs)/program";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function loadProgram() {
  await connectToDB();
  const program = await Program.find();
  return program;
}

async function ProgramCard() {
  const programs = await loadProgram();

  return (
    <>
      {programs.map((program) => (
        <Link key={program.id} href={`/dashboard/programs/${program.id}`} className="block">
          <div className="rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4 text-sm text-slate-600">
              <Image
                src={program.image}
                alt={program.title}
                width={200}
                height={200}
                className="rounded-xl ring-1 ring-border/50 object-cover"
              />
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">{program.title}</p>
                <p className="font-medium text-emerald-800">{program.subtitle}</p>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProgramCard;
