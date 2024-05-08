import MainLayout from "@/components/layout";
import React from "react";
import Hero from "./_components/hero";
import AllPrograms from "./_components/allprograms";
import ContactDetails from "./_components/contactdetails";

function Programs() {
  return (
    <MainLayout>
      <Hero />
      <AllPrograms />
      <ContactDetails />
    </MainLayout>
  );
}

export default Programs;
