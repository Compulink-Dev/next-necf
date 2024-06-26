//@ts-ignore
export default async function getResearch(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/research/${id}`, {
        cache: "no-store",
    });
    const task = await res.json();
    return task;
}