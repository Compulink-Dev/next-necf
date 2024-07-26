//@ts-ignore
export default async function getMilestone(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/milestone/${id}`, {
        cache: "no-store",
    });
    const milestone = await res.json();
    return milestone;
}