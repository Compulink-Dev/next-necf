import { connectToDB } from "@/lib/connectToDB";
import Program from "@/models/(programs)/program";

export default async function getPrograms() {
    await connectToDB()
    const program = await Program.find()
    return program;
}