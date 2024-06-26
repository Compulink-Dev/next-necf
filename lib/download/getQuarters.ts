export default async function getQuarters() {
    const response = await fetch(`${process.env.API_ROUTE}/api/quarterly`, {
        cache: "no-store",
    });
    const downloads = await response.json();
    return downloads;
}