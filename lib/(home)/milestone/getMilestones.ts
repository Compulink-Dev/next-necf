import { connectToDB } from "@/lib/connectToDB";
import Milestone from "@/models/(home)/milestone";

export default async function getMilestones() {
    await connectToDB()
    const milestone = await Milestone.find()
    return milestone;
}