import axios from "axios";

export const getAllUser = async () => {
	try {
		const response = await axios.get(`https://bfs-pfhenry-production.up.railway.app/user`);

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
