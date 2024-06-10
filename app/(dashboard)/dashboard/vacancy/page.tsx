<<<<<<< HEAD
import React from 'react'
import CreateButton from '@/components/createButton'
import VacancyList from './_components/vacancyList';



async function Vacancy() {
    return (
        <div className='p-4'>
            <div className="pb-4 flex justify-end">
                <CreateButton link={'vacancy'} />
            </div>
            <div>
                <VacancyList />
            </div>
        </div>
    )
=======
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import VacancyForm from "./_components/vacancyForm";
import AddVacancy from "./_components/formVacancy";
import BackButton from "@/components/backButton";
import VacancyList from "./_components/vacancyList";
import getVacancies from "@/lib/vacancy/getVacancies";
import CreateButton from "@/components/createButton";
import VacanciesCard from "./_components/vacanciesCard";

async function Vacancy() {
  const vacancies = await getVacancies();
  console.log(vacancies);

  return (
    <div className="p-4">
      <div className="pb-4 flex justify-end">
        <CreateButton />
      </div>
      <div>
        {vacancies?.map((vacancy: any) => (
          <VacanciesCard
            key={vacancy._id}
            link={vacancy._id}
            name={vacancy.name}
            jobType={vacancy.jobType}
            dueDate={vacancy.dueDate}
          />
        ))}
      </div>
    </div>
  );
>>>>>>> refs/remotes/origin/main
}

export default Vacancy;
