import Chair from "@/models/chairs";
import { connectToDB } from "../connectToDB";

export default async function getChairs() {
    await connectToDB()
    const chairs = await Chair.find()
    return chairs;
}