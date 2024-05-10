'use client'
import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

interface TeamCardProps {
  name: string,
  imageUrl?: string,
  title: string,
  desc?: string,
  fbLink?: string,
  twitterLink?: string,
  gmail?: string
}



function TeamCard({ name, imageUrl, title, desc, fbLink, twitterLink, gmail }: TeamCardProps) {
  return (
    <div className="w-72 h-96 border border-green-800 ">
      <MdPerson size={250} color="green" className="mx-auto" />
      <div className="flex flex-col items-center justify-center gap-2 w-full h-[35%] bg-green-800 object-cover">
        <p className="text-white font-semibold text-2xl ">{name}</p>
        <p className="text-gray-300">{title}</p>
        <div className="flex items-center justify-center gap-12 mx-auto">
          <Link href={'/'}>
            <FaFacebook size={18} color="white" />
          </Link>
          <Link href={'/'}>
            <BsTwitterX size={18} color="white" />
          </Link>
          <Link href={'/'}>
            <FaLinkedin size={18} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
