export default async function getAdhocs() {
    const response = await fetch(`${process.env.API_ROUTE}/api/adhoc`, {
        cache: "no-store",
    });
    const adhocs = await response.json();
    return adhocs;
}