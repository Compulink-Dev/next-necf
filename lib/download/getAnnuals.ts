export default async function getAnnuals() {
    const response = await fetch(`${process.env.API_ROUTE}/api/annual`, {
        cache: "no-store",
    });
    const annuals = await response.json();
    return annuals;
}