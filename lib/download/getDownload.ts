//@ts-ignore
export default async function getDownload(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/downloads/${id}`, {
        cache: "no-store",
    });
    const task = await res.json();
    return task;
}