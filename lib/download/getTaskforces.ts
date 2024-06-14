export default async function getTaskForces() {
    const response = await fetch(`${process.env.API_ROUTE}/api/taskforce
    `, {
        cache: "no-store",
    });
    const tasks = await response.json();
    return tasks;
}