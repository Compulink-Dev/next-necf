import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";
import Annual from "@/models/(programs)/annual";
import TaskForce from "@/models/(programs)/taskforce";

export default async function getTasks() {
    await connectToDB()
    const tasks = await TaskForce.find()
    return tasks;
}