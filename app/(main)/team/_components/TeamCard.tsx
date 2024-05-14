'use client'
import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

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
    <div className="w-72 h-96 border border-green-800 flex flex-col rounded">
      <div className="flex-1">
        {
          imageUrl && imageUrl.trim().length > 0 ? (
            <MdPerson size={250} color="green" className="mx-auto" />
          )
            : (
              <Image src={`/${imageUrl}`} alt="logo" width={300} height={300} className="w-full h-full rounded-full" />
            )
        }
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 w-full h-[35%] bg-green-800 object-cover">
        <p className="text-white font-semibold text-lg ">{name}</p>
        <p className="text-gray-300 text-sm">{title}</p>
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
