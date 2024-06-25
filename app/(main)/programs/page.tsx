import MainLayout from "@/components/layout";
import React from "react";
import AllPrograms from "./_components/allprograms";
import NewsLetter from "./_components/newsletter";
import { ProgramTab } from "./_components/programTabs";

function Programs() {
  return (
    <MainLayout>
      <ProgramTab />
    </MainLayout>
  );
}

export default Programs;
