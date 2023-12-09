// import axios from "axios";

// export const getAllEnvios = async () => {
// 		try {
// 		const response = await axios.get("http://localhost:3001/envios");
// 		// const response = await axios.get("https://bfs-pfhenry-production.up.railway.app/envios/");

// 		if (response.status !== 200) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}

// 		const data = response.data;

// 		return data;
// 	} catch (error) {
// 		console.error("Error fetching data:", error);
// 		throw error;
// 	}
// };
import axios from "axios";

export const getAllEnvios = async () => {
<<<<<<< HEAD
  try {
    // const response = await axios.get("https://bfs-pfhenry-production.up.railway.app/envios/");
    const response = await axios.get("http://localhost:3001/envios/");
=======
	try {
		const response = await axios.get("http://localhost:3001/envios/")
		/* ("https://bfs-pfhenry-production.up.railway.app/envios/") */;
>>>>>>> a306160bb063b2ca998667ad3d9779602727acaf

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