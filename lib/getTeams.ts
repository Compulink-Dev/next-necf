export default async function getTeam() {
    const response = await fetch(`${process.env.API_ROUTE}/api/team`, {
        cache: "no-store",
    });
    const contacts = await response.json();
    return contacts;
}