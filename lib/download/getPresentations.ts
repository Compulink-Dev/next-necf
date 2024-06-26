//@ts-ignore
export default async function getPresentation(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/presentations/${id}`, {
        cache: "no-store",
    });
    const download = await res.json();
    return download;
}