import React from "react";
import TeamCard from "./TeamCard";
import { Chairperson, Committee, Team } from "@/constant/data";

console.log(Team);

function TeamForm() {



  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 md:mb-32">
          <h1 className="text-4xl font-semibold title-font mb-4 text-green-900 tracking-widest">
            NECF TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Welcome to our virtual oasis! Explore our curated collection of
            content and discover serenity and inspiration.
          </p>
        </div>
        <div className="">
          <h1 className="mb-16 pl-2 text-2xl font-bold">
            NECF National Co-Chairpersons{" "}
          </h1>
          <div className="flex flex-wrap -m-4 items-center justify-center mx-auto gap-10">
            {Chairperson.map((person) => (
              <TeamCard
                key={person.id}
                title={person.title}
                position={person.position}
                image={person.image}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="my-16 pl-2 text-2xl font-bold">
            NECF Steering Committee Co-Chairpersons
          </h1>
          <div className="flex flex-wrap -m-4 items-center justify-center mx-auto gap-10">
            {Committee.map((person) => (
              <TeamCard
                key={person.id}
                title={person.title}
                position={person.position}
                image={person.image}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="my-16 pl-2 text-2xl font-bold">NECF SECRETARIAT</h1>
          <div className="flex flex-wrap -m-4 items-center justify-center mx-auto gap-10">
            {Team.map((person: any) => (
              <TeamCard
                key={person.id}
                title={person.title}
                position={person.position}
                image={person.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamForm;
