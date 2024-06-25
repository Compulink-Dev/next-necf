export const dynamic = 'force-dynamic'
import Button from "@/components/button";
import { connectToDB } from "@/lib/connectToDB";
import getEvents from "@/lib/event/getEvents";
import MainEvent from "@/models/(home)/event";
import Event from "@/models/events/events";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdTimer } from "react-icons/md";

interface EventProps {
  image: string,
  title: string,
  date: string,
  link: string
}

const EventCard = ({ image, title, date, link }: EventProps) => {
  return (
    <div className="lg:flex">
      <img
        className="object-contain md:object-cover w-full h-56 rounded-lg lg:w-64"
        src={`${image}`}
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

        <Button name={"Register"} />
        <span className="text-sm text-gray-500 dark:text-gray-300">
          <div className="flex gap-2 items-center">
            <MdTimer />
            <p className=""> {date}</p>
          </div>
        </span>
      </div>
    </div>
  )
}

let eventsCache: any = null

export async function mainEvents() {

  if (eventsCache !== null) {
    console.log('Events from cache');
    return eventsCache

  }

  await connectToDB()
  const events = await MainEvent.find()

  eventsCache = events


  return events;
}


async function EventPage() {

  const events = await mainEvents()

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 my-6">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">
            Up Coming Events
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

            {
              events.map((event: any) => {
                return (
                  <EventCard
                    key={event.title}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    link={event.link}
                  />
                )
              })
            }
          </div>
        </div>
        <Link
          className="px-4 py-3  text-white rounded-md text-sm bg-green-600 hover:bg-green-500 m-6"
          href={'/programs'}>View more</Link>
      </section>
    </div>
  );
}

export default EventPage;
