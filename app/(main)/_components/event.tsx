'use client'

import React, { useState } from "react";
import EventCard from "@/components/EventCard";
import Link from "next/link";
import ReactPaginate from "react-paginate";

interface Event {
  title: string;
  image: string;
  date: string;
  document: string;  // Add the document field
  link: string;
}

interface EventPageProps {
  events: Event[];
}

const EventPage: React.FC<EventPageProps> = ({ events = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 4; // Number of events per page

  // If events is empty, handle gracefully
  if (!events || events.length === 0) {
    return (
      <div className="text-center mt-8">
        <p>No events available at the moment.</p>
      </div>
    );
  }

  // Calculate the events to display based on the current page
  const offset = currentPage * eventsPerPage;
  const paginatedEvents = events.slice(offset, offset + eventsPerPage);

  // Handle page change
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 my-6">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">
            Upcoming Events
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {paginatedEvents.map((event: Event) => (
              <EventCard
              id={event.title}
                key={event.title}
                title={event.title}
                image={event.image}
                date={event.date}
                link={event.link}
                document={event.document}  // Pass the document field
              />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center mt-8">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(events.length / eventsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={"flex space-x-4"}
              pageClassName={"px-4 py-2 border border-gray-300 rounded-md"}
              activeClassName={"bg-green-600 text-white"}
              previousClassName={"px-4 py-2 border border-gray-300 rounded-md"}
              nextClassName={"px-4 py-2 border border-gray-300 rounded-md"}
            />
          </div>

          {/* View more link */}
          <Link
            className="px-4 py-3 text-white rounded-md text-sm bg-green-600 hover:bg-green-500 m-6"
            href={"/programs"}
          >
            View more
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventPage;
