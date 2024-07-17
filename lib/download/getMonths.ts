export default async function getMonths() {
    const response = await fetch(`${process.env.API_ROUTE}/api/monthly`, {
        cache: "no-store",
    });
    const downloads = await response.json();
    return downloads;
}