"use client";

import { useState } from "react";
import RegisterDialog from "./RegisterDialog";
import { MdTimer } from "react-icons/md";
import Link from "next/link";
import { Button } from "./ui/button";

interface EventProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

const ProgramCard = ({ image, title, date, link }: EventProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="border rounded-lg p-2">
      <img
        className="object-contain md:object-cover w-full h-56 rounded-lg"
        src={image}
        alt={title}
        width={300}
        height={300}
      />

      <div className="flex flex-col mt-2 gap-2">
        <Link
          href="/programs"
          className="text-lg font-semibold text-gray-800 hover:underline dark:text-white "
        >
          {title}
        </Link>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          <div className="flex gap-2 items-center">
            <MdTimer />
            <p className="">{date}</p>
          </div>
        </span>

        <Button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
        >
          Register
        </Button>
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

export default ProgramCard;
