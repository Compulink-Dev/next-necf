import MainLayout from "@/components/layout";
import React from "react";
import Hero from "./_components/hero";
import AllPrograms from "./_components/allprograms";
import ContactDetails from "./_components/contactdetails";
import NewsLetter from "./_components/newsletter";

function Programs() {
  return (
    <MainLayout>
      <AllPrograms />
      {/* <ContactDetails /> */}
      <NewsLetter />
    </MainLayout>
  );
}

export default Programs;
