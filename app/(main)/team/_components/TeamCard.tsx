"use client";
import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface TeamCardProps {
  position: string;
  image?: string;
  title: string;
  desc?: string;
  link?: string;
  twitterLink?: string;
  gmail?: string;
}

function TeamCard({
  position,
  image,
  title,
  link
}: TeamCardProps) {
  return (
    <div className="w-72 h-96 border border-green-800 flex flex-col rounded">
      <div className="flex-1 h-60 w-full flex items-center justify-center ">
        {image && image.trim().length > 0 ? (
          <Image
            src={image}
            alt="logo"
            width={80}
            height={80}
            className="w-40 h-40 mx-auto object-cover rounded-3xl"
          />
        ) : (
          <MdPerson size={250} color="green" className="mx-auto" />
        )}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 w-full h-[35%] bg-green-800 object-cover">
        <p className="text-white font-semibold text-lg ">{title}</p>
        <p className="text-gray-300 text-sm">{position}</p>
        <div className="flex items-center justify-center gap-12 mx-auto">
          <Link href={"/"}>
            <FaFacebook size={18} color="white" />
          </Link>
          <Link href={"/"}>
            <BsTwitterX size={18} color="white" />
          </Link>
          <Link href={"/"}>
            <FaLinkedin size={18} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
