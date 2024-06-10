import { connectToDB } from "../connectToDB";

export default async function getVacancies() {
  await connectToDB()
  const response = await fetch(`${process.env.API_ROUTE}/api/vacancies`, {
    cache: "no-store",
  });
  const vacancies = await response.json();
  return vacancies;
}
