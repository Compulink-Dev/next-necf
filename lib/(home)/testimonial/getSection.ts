//@ts-ignore
export default async function getSection(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/section/${id}`, {
        cache: "no-store",
    });
    const section = await res.json();
    return section;
}