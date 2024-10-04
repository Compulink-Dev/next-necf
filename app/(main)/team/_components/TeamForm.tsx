import React from "react";
import TeamCard from "./TeamCard";
import getTeams from "@/lib/getTeams";
import getChairs from "@/lib/team/getChairs";
import getCores from "@/lib/team/getCores";

async function TeamForm() {
  const teams = await getTeams();
  const chairs = await getChairs();
  const cores = await getCores();

  // Define different team groupings for the layout
  const firstPerson = teams.slice(0, 1);
  const secondAndThird = teams.slice(1, 3);
  const fourthAndFifth = teams.slice(3, 6);
  const sixthAndNinth = teams.slice(6, 9);
  const ninthAndBeyond = teams.slice(9)

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

        {/* Co-Chairpersons */}
        <div className="">
          <h1 className="mb-16 pl-2 text-2xl font-bold">
            NECF National Co-Chairpersons
          </h1>
          <div className="flex flex-wrap -m-4 items-center justify-center mx-auto gap-10">
            {chairs.map((person: any) => (
              <TeamCard
                key={person.id}
                title={person.title}
                position={person.position}
                image={person.image}
              />
            ))}
          </div>
        </div>

        {/* Steering Committee Co-Chairpersons */}
        <div className="">
          <h1 className="my-16 pl-2 text-2xl font-bold">
            NECF Steering Committee Co-Chairpersons
          </h1>
          <div className="flex flex-wrap -m-4 items-center justify-center mx-auto gap-10">
            {cores.map((person: any) => (
              <TeamCard
                key={person.id}
                title={person.title}
                position={person.position}
                image={person.image}
              />
            ))}
          </div>
        </div>

        {/* NECF Secretariat */}
        <div className="">
          <h1 className="my-8 pl-2 text-2xl font-bold">NECF SECRETARIAT</h1>

          {/* First person, taking full width */}
          <div className="flex flex-wrap items-center justify-center mx-auto">
            {firstPerson.map((person: any) => (
              <div key={person.id} className="p-4">
                <TeamCard
                  title={person.title}
                  position={person.position}
                  image={person.image}
                />
              </div>
            ))}
          </div>

          <h1 className="my-8 pl-2 text-2xl font-bold">DIRECTORS</h1>

          {/* Second and Third persons, taking half width each */}
          <div className="flex flex-wrap items-center justify-center mx-auto">
            {secondAndThird.map((person: any) => (
              <div key={person.id} className="p-4">
                <TeamCard
                  title={person.title}
                  position={person.position}
                  image={person.image}
                />
              </div>
            ))}
          </div>

          <h1 className="my-8 pl-2 text-2xl font-bold">MANAGERS</h1>

          {/* Fourth and Fifth persons, taking half width each */}
          <div className="flex flex-wrap justify-center mx-auto">
            {fourthAndFifth.map((person: any) => (
              <div key={person.id} className=" p-4">
                <TeamCard
                  title={person.title}
                  position={person.position}
                  image={person.image}
                />
              </div>
            ))}
          </div>

          <h1 className="my-8 pl-2 text-2xl font-bold">ECONOMISTS</h1>

          {/* Sixth person and beyond, each taking full width */}
          <div className="flex flex-wrap items-center justify-center mx-auto">
            {sixthAndNinth.map((person: any) => (
              <div key={person.id} className="p-4">
                <TeamCard
                  title={person.title}
                  position={person.position}
                  image={person.image}
                />
              </div>
            ))}
          </div>


          <h1 className="my-8 pl-2 text-2xl font-bold">TEAM</h1>
          {/* Sixth person and beyond, each taking full width */}
          <div className="flex flex-wrap items-center justify-center mx-auto">
            {ninthAndBeyond.map((person: any) => (
              <div key={person.id} className="p-4">
                <TeamCard
                  title={person.title}
                  position={person.position}
                  image={person.image}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default TeamForm;
