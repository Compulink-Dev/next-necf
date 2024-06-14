//@ts-ignore
export default async function getTaskForce(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/taskforce/${id}`, {
        cache: "no-store",
    });
    const task = await res.json();
    return task;
}