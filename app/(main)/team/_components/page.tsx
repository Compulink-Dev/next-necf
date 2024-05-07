import React from "react";
import { MdPerson } from "react-icons/md";
import TeamCard from "./TeamCard";

function TeamForm() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 md:mb-32">
          <h1 className="text-4xl font-semibold title-font mb-4 text-green-900 tracking-widest">
            NECF TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 items-center justify-center mx-auto gap-10">
          <TeamCard /> <TeamCard /> <TeamCard /> <TeamCard />
        </div>
      </div>
    </section>
  );
}

export default TeamForm;
