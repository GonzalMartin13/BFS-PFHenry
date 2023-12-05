import axios from "axios";

export const getAllPayments = async () => {
	try {
		const response = await axios.get(`http://localhost:3001/payment`);

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
