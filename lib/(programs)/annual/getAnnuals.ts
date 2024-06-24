import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";
import Annual from "@/models/(programs)/annual";

export default async function getAnnuals() {
    await connectToDB()
    const annual = await Annual.find()
    return annual;
}