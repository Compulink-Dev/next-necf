import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";

export default async function getAdhocs() {
    await connectToDB()
    const adhoc = await Adhoc.find()
    return adhoc;
}