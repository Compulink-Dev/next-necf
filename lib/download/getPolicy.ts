//@ts-ignore
export default async function getPolicy(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/policies/${id}`, {
        cache: "no-store",
    });
    const download = await res.json();
    return download;
}