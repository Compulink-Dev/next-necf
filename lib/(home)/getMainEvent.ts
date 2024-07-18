export default async function getEvent(id: any) {
    const res = await fetch(`${process.env.API_ROUTE}/api/mainevent/${id}`, {
        cache: "no-store",
    });
    const program = await res.json();
    return program;
}