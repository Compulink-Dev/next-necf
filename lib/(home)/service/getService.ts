//@ts-ignore
export default async function getService(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/service/${id}`, {
        cache: "no-store",
    });
    const service = await res.json();
    return service;
}