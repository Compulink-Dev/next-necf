//@ts-ignore
export default async function getAdhoc(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/adhoc/${id}`, {
        cache: "no-store",
    });
    const program = await res.json();
    return program;
}