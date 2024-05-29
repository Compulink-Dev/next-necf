export default async function deleteById(id: any) {
    const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'DELETE'
    });
    return res;
}