import React from "react";
import { MdPerson } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function TeamCard() {
  return (
    <div className="w-72 h-96 border border-green-800 ">
      <MdPerson size={250} color="green" className="mx-auto" />
      <div className="flex flex-col items-center justify-center gap-2 w-full h-[35%] bg-green-800 object-cover">
        <p className="text-white font-semibold text-2xl ">Tinashe Phiri</p>
        <p className="text-gray-300">Senior Developer</p>
        <div className="flex items-center justify-center gap-12 mx-auto">
          <FaFacebook size={18} color="white" />
          <BsTwitterX size={18} color="white" />
          <FaLinkedin size={18} color="white" />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
