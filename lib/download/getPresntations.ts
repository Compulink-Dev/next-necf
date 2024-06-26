//@ts-ignore
export default async function getPresentations(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/presentations/${id}`, {
        cache: "no-store",
    });
    const download = await res.json();
    return download;
}