//@ts-ignore
export default async function getSecond(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/aboutSecond/${id}`, {
        cache: "no-store",
    });
    const about = await res.json();
    return about;
}