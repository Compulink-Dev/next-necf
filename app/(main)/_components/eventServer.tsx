// app/(main)/EventPageServer.tsx
import React from "react";
import { connectToDB } from "@/lib/connectToDB";
import MainEvent from "@/models/(home)/event";
import EventPage from "./event";


export default async function EventPageServer() {
  // Fetch events on the server
  await connectToDB();
  const events = await MainEvent.find();

  console.log("Main - Events : ",events);
  
  
  return <EventPage events={events} />;
}
