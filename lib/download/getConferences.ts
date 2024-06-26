export default async function getConferences() {
    const response = await fetch(`${process.env.API_ROUTE}/api/conferences`, {
        cache: "no-store",
    });
    const downloads = await response.json();
    return downloads;
}