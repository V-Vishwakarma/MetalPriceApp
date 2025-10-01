

const API_URL = "https://www.goldapi.io/api/"
const API_KEY = "goldapi-fwpichsmg8ie6fk-io"
// goldapi-fwpichsmg8ie6fk-io

export async function fetchData(endpoint) {
    try {

        const url = `${API_URL}${endpoint}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
            throw new Error(`API error: ${data.error}`)
        }

        return data

    } catch (error) {
        console.error("API request error:", error)
        throw error
    }
}