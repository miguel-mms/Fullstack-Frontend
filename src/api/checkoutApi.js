const SERVER_URL = 'http://localhost:4000/posts/'

export const saveCheckout = async checkout => {
	try {
		const response = await fetch(SERVER_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(checkout),
		});
		if (response.status === 201)
			return await response.json()
		else
			return false
	} catch (error) {
		console.log(error)
	}
}