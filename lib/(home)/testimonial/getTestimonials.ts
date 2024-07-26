import { connectToDB } from "@/lib/connectToDB";
import Testimonial from "@/models/(home)/testimonial";

export default async function getTestimonials() {
    await connectToDB()
    const testimonial = await Testimonial.find()
    return testimonial;
}