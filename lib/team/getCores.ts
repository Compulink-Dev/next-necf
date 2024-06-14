import Core from "@/models/cores";
import { connectToDB } from "../connectToDB";

export default async function getCores() {
    await connectToDB()
    const cores = await Core.find()
    return cores;
}