import React from "react";
import TeamCard from "./TeamCard";
import getTeams from "@/lib/getTeams";
import getChairs from "@/lib/team/getChairs";
import getCores from "@/lib/team/getCores";

async function TeamForm() {
  const teams = await getTeams();
  const chairs = await getChairs();
  const cores = await getCores();

  const sections = [
    { title: "NECF National Co-Chairpersons", members: chairs },
    { title: "NECF Steering Committee Co-Chairpersons", members: cores },
    { title: "NECF Secretariat", members: teams },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-green-900">NECF TEAM</h1>
        <p className="mt-4 text-gray-600">
          Welcome to our virtual oasis! Explore our curated collection of
          profiles and discover the faces behind NECF.
        </p>
      </div>

      {sections.map(({ title, members }, idx) => (
        <div key={idx} className="mb-20">
          <h2 className="text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-4">
            {title}
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map((person: any) => (
              <TeamCard
                key={person.id}
                title={person.title}
                position={person.position}
                image={person.image}
                link={person.link}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TeamForm;
