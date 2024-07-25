//@ts-ignore
export default async function getTop(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/aboutTop/${id}`, {
        cache: "no-store",
    });
    const about = await res.json();
    return about;
}