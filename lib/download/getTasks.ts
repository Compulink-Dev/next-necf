export default async function getTasks() {
    const response = await fetch(`${process.env.API_ROUTE}/api/tasks
    `, {
        cache: "no-store",
    });
    const tasks = await response.json();
    return tasks;
}