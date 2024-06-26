//@ts-ignore
export default async function getConference(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/conferences/${id}`, {
        cache: "no-store",
    });
    const download = await res.json();
    return download;
}