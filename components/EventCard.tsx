"use client";

import { useState } from "react";
import RegisterDialog from "./RegisterDialog";
import { MdTimer } from "react-icons/md";
import Link from "next/link";

interface EventProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

const EventCard = ({ image, title, date, link }: EventProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="lg:flex">
      <img
        className="object-contain md:object-cover w-full h-56 rounded-lg lg:w-64"
        src={image}
        alt={title}
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

        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
        >
          Register
        </button>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          <div className="flex gap-2 items-center">
            <MdTimer />
            <p className=""> {date}</p>
          </div>
        </span>
      </div>

      {/* Dialog Component */}
      <RegisterDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        eventTitle={title}
      />
    </div>
  );
};

export default EventCard;
