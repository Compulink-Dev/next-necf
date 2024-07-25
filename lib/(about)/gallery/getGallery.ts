//@ts-ignore
export default async function getGallery(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/aboutGallery/${id}`, {
        cache: "no-store",
    });
    const gallery = await res.json();
    return gallery;
}