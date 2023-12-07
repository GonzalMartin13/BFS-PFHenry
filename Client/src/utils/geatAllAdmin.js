import axios from "axios";

export const getAllAdmin = async () => {
	try {
		const response = await axios.get(`http://https://bfs-pfhenry-production.up.railway.app/admin`);

		if (response.status !== 200) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = response.data;

		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};