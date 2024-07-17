//@ts-ignore
export default async function getTask(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/tasks/${id}`, {
        cache: "no-store",
    });
    const task = await res.json();
    return task;
}