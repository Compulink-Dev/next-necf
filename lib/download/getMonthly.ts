//@ts-ignore
export default async function getMonthly(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/monthly/${id}`, {
        cache: "no-store",
    });
    const task = await res.json();
    return task;
}