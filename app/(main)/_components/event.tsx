export const dynamic = "force-dynamic";

import Button from "@/components/button";
import EventCard from "@/components/EventCard";
import { connectToDB } from "@/lib/connectToDB";
import getEvents from "@/lib/event/getEvents";
import MainEvent from "@/models/(home)/event";
import Event from "@/models/events/events";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdTimer } from "react-icons/md";

let eventsCache: any = null;

export async function mainEvents() {
  const _ = cookies();

  if (eventsCache !== null) {
    console.log("Events from cache");
    return eventsCache;
  }

  await connectToDB();
  const events = await MainEvent.find();

  eventsCache = events;

  return events;
}

async function EventPage() {
  const events = await mainEvents();

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 my-6">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">
            Up Coming Events
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {events.map((event: any) => {
              return (
                <EventCard
                  key={event.title}
                  title={event.title}
                  image={event.image}
                  date={event.date}
                  link={event.link}
                />
              );
            })}
          </div>
        </div>
        <Link
          className="px-4 py-3  text-white rounded-md text-sm bg-green-600 hover:bg-green-500 m-6"
          href={"/programs"}
        >
          View more
        </Link>
      </section>
    </div>
  );
}

export default EventPage;
