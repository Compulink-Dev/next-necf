import Team from "@/models/teams/team";
import { connectToDB } from "./connectToDB";

export default async function getTeams() {
    await connectToDB()
    const teams = await Team.find()
    return teams;
}