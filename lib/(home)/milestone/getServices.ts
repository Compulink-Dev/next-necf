import { connectToDB } from "@/lib/connectToDB";
import Service from "@/models/(home)/service";

export default async function getServices() {
    await connectToDB()
    const service = await Service.find()
    return service;
}