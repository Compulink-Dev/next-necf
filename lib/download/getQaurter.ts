//@ts-ignore
export default async function getQuarter(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/quarterly/${id}`, {
        cache: "no-store",
    });
    const task = await res.json();
    return task;
}