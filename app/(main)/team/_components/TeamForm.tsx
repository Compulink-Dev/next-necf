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
      {sections.map(({ title, members }, idx) => {
        if (title === "NECF Secretariat") {
          const grouped = [
            [members[0]],
            [members[1], members[2]],
            [members[3], members[4], members[5]],
            [members[6]],
            [members[7], members[8], members[9], members[10]],
            [members[11], members[12], members[13], members[14]],
            [members[15], members[16], members[17], members[18], members[19]],
            [members[20], members[21], members[22]],
          ]; // Adjust this based on actual order/structure of `members`

          return (
            <div key={idx} className="mb-20">
              <div className="flex items-center justify-center">
                <h2 className="text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-4">
                  {title}
                </h2>
              </div>
              <div className="space-y-8">
                {grouped.map((group, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap gap-6 items-center justify-center"
                  >
                    {group.map((person: any) => (
                      <TeamCard
                        key={person?._id}
                        title={person?.title}
                        position={person?.position}
                        image={person?.image}
                        link={person?.link}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // Default layout for other sections
        return (
          <div key={idx} className="mb-20">
            <div className="flex items-center justify-center">
              <h2 className="text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-4">
                {title}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {members.map((person: any) => (
                <TeamCard
                  key={person._id}
                  title={person.title}
                  position={person.position}
                  image={person.image}
                  link={person.link}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TeamForm;
