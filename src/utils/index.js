const fetchData = async () => {
    const urlServer = "http://localhost:8000/"
    try {
        const result = await fetch(urlServer)
        const json = await result.json()
        return json.data
    } catch (error) {
        console.error(error)
    }
}

export {fetchData}