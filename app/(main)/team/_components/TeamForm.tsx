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

  const secretariatGroups = [
    [teams[0]], // Mr. M. Muzite
    [teams[1], teams[2]], // Mr. G. Murehwa | Mrs. A. Kawiri
    [teams[3], teams[4], teams[5]], // Mr. G. Gowere | Mr. J. Dzama |  Ms. S. Makiwa
    [teams[6]], // Mr. B. Machiva
    [teams[7], teams[8], teams[9], teams[10]], // Mr. P. Wilo | Mr. J. Masuka | Mr. S. Maponga | Economist
    [teams[11], teams[12], teams[13], teams[14]], // ICTO | BD0 | ACCOUNTANT |HR ADMIN OFFICER
    [teams[15], teams[16], teams[17], teams[18], teams[19]], // ASSISTANTs
    [teams[20], teams[21], teams[22]], // RECRUITMENT | ASSISTANT | DRIVER
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
              <h2 className="text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-4">
                {title}
              </h2>
              <div className="space-y-8">
                {grouped.map((group, i) => (
                  <div key={i} className="flex flex-wrap gap-6 justify-center">
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
            <h2 className="text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-4">
              {title}
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
