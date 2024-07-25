import { connectToDB } from "@/lib/connectToDB";
import Gallery from "@/models/(programs)/gallery";

export default async function getGalleries() {
    await connectToDB()
    const gallery = await Gallery.find()
    return gallery;
}