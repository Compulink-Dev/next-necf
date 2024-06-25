export default async function getMainEvents() {
    const response = await fetch(`${process.env.API_ROUTE}/api/mainevent`, {
        cache: "no-store",
    });
    const events = await response.json();
    return events;
}