import React from "react";
import { MdCall, MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-4 ">
      <div className="col-span-1 bg-[#009900] rounded-lg px-10 ">
        <p className="text-white mt-10">
          We're very approchable and would love to speak to you. Feel free to
          call, send us an email, tweet us or simple complete the enquiry form.
        </p>
        <div className="flex items-center justify-between gap-4 text-white mt-6">
          <MdCall
            size={14}
            color="green"
            className="w-10 h-10 rounded-full bg-white p-2"
          />
          <p>
            +263 242-701094 / +263 780 258 751 / +263 773 851 644 / +263 774 834
            526
          </p>
        </div>
        <div className="flex items-center gap-4 text-white mt-6">
          <MdOutlineMail
            size={14}
            color="green"
            className="w-10 h-10 rounded-full bg-white p-2"
          />
          <p className="text-start">info@necf.co.zw</p>
        </div>
        <div className="flex items-center gap-4 text-white mt-6">
          <FaXTwitter
            size={14}
            color="green"
            className="w-10 h-10 rounded-full bg-white p-2"
          />
          <p className="text-start">NECF Twitter</p>
        </div>
        <div className="flex items-center gap-4 text-white mt-6">
          <FaFacebook
            size={14}
            color="green"
            className="w-10 h-10 rounded-full bg-white p-2"
          />
          <p className="text-start">NECF Facebook</p>
        </div>
        <div className="flex items-center gap-4 text-white mt-6 mb-10">
          <FaLinkedin
            size={14}
            color="green"
            className="w-10 h-10 rounded-full bg-white p-2"
          />
          <p className="text-start">NECF LinkedIn</p>
        </div>
      </div>
      <div className="flex flex-col md:mx-4 ">
        <div className="flex items-center justify-between bg-[#009900] rounded-lg p-4 mt-10 md:mt-0  ">
          <h1 className="text-white font-semibold text-xl">
            Engage us on social media
          </h1>
          <div className="flex items-center justify-between gap-4">
            <FaFacebook
              size={14}
              color="green"
              className="w-10 h-10 rounded-full bg-white p-2"
            />
            <FaXTwitter
              size={14}
              color="green"
              className="w-10 h-10 rounded-full bg-white p-2"
            />
            <FaLinkedin
              size={14}
              color="green"
              className="w-10 h-10 rounded-full bg-white p-2"
            />
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-2 text-green-500 outline-none border-b-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-2 text-green-500 outline-none border-b-2"
            />
          </div>
          <textarea
            rows={5}
            // name="message"
            placeholder="Your Message"
            className="border h-60 w-full mt-6 p-2 outline-none text-green-500"
          ></textarea>
          <button className="w-full mt-4 bg-[#009900] text-white p-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
