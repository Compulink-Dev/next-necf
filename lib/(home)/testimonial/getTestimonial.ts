//@ts-ignore
export default async function getTestimonial(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/testimonial/${id}`, {
        cache: "no-store",
    });
    const section = await res.json();
    return section;
}