import { connectToDB } from "@/lib/connectToDB";
import Section from "@/models/(home)/section";

export default async function getSection() {
    await connectToDB()
    const section = await Section.find()
    return section;
}