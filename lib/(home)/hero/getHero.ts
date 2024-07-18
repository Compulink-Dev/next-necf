//@ts-ignore
export default async function getHero(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/hero/${id}`, {
        cache: "no-store",
    });
    const hero = await res.json();
    return hero;
}