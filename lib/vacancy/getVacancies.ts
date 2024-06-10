import { connectToDB } from "../connectToDB";

export default async function getVacancies() {
<<<<<<< HEAD
    await connectToDB()
    const response = await fetch(`${process.env.API_ROUTE}/api/vacancies`, {
        cache: "no-store",
    });
    const vacancies = await response.json();
    return vacancies;
}
=======
  const response = await fetch(`${process.env.API_ROUTE}/api/vacancies`, {
    cache: "no-store",
  });
  const vacancies = await response.json();
  console.log(vacancies);
  return vacancies;
}
>>>>>>> refs/remotes/origin/main
