//@ts-ignore
export default async function getAnnual(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/annual/${id}`, {
        cache: "no-store",
    });
    const annual = await res.json();
    return annual;
}