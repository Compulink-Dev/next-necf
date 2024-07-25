//@ts-ignore
export default async function getSection(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/aboutSection/${id}`, {
        cache: "no-store",
    });
    const about = await res.json();
    return about;
}