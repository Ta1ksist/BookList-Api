const API_URL = "https://localhost:7113/api/Book";

export default async function getBooks() {
    const response = await fetch(API_URL);
    if(!response.ok)
    {
        throw new Error('Failed to fetch books');
    }
    return await response.json();
}