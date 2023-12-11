import axios from "axios";

const updateEnvio = async (newDataEnvio) => {
	const { image, id, title, enabled, onSale, percentageDiscount, banned } =
		newDataEnvio;
	console.log(image, id, title, enabled, onSale, percentageDiscount, banned);
	try {
		//const response = await axios.put(`http://localhost:3001/envios/edit`, newDataEnvio);
	const response = await axios.put(`https://bfs-pfhenry-production.up.railway.app/envios/edit`, newDataEnvio); 

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

export default updateEnvio;
