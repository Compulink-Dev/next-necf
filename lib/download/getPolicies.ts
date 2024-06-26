export default async function getPolices() {
    const response = await fetch(`${process.env.API_ROUTE}/api/policies`, {
        cache: "no-store",
    });
    const downloads = await response.json();
    return downloads;
}