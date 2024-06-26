export default async function getResearches() {
    const response = await fetch(`${process.env.API_ROUTE}/api/research`, {
        cache: "no-store",
    });
    const downloads = await response.json();
    return downloads;
}