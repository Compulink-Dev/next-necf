//@ts-ignore
export default async function getTask(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/taskforce/${id}`, {
        cache: "no-store",
    });
    const program = await res.json();
    return program;
}