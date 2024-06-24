import MainLayout from "@/components/layout";
import React from "react";
import AllPrograms from "./_components/allprograms";
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
