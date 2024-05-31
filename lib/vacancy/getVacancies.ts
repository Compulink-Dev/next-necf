export default async function getVacancies() {
  const response = await fetch(`${process.env.API_ROUTE}/api/vacancies`, {
    cache: "no-store",
  });
  const vacancies = await response.json();
  console.log(vacancies);
  return vacancies;
}
