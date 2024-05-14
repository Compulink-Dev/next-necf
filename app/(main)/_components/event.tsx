import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventProps {
  imageUrl: string,
  title: string,
  date: string,
  link: string
}

const EventCard = ({ imageUrl, title, date, link }: EventProps) => {
  return (
    <div className="lg:flex">
      <Image
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={imageUrl}
        alt=""
        width={300}
        height={300}
      />

      <div className="flex flex-col justify-between items-center py-6 lg:mx-6">
        <Link
          href="/programs"
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
          {title}
        </Link>

        <Button name={"Register"} link={link} />
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {date}
        </span>
      </div>
    </div>
  )
}


function Event() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">
            Up Coming Events
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <EventCard
              title="INTERNATIONAL BUSINESS CONFERENCE (IBC)"
              imageUrl=""
              link="/"
              date="8 October 2024"
            />
            <EventCard
              title="THE INFRASTRUCTURE SUMMIT AND EXPO (ISE)"
              imageUrl=""
              link="/"
              date="8 October 2024"
            />
            <EventCard
              title="ANNUAL NATIONAL AGRI-BUSINESS CONFERENCE (ANAC)"
              imageUrl=""
              link="/"
              date="8 October 2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
