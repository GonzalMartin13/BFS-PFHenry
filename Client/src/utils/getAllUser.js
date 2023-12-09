import axios from "axios";

export const getAllUser = async () => {
<<<<<<< HEAD
  try {
   
    const response = await axios.get("http://localhost:3001/user");
=======
	try {
		const response = await axios.get(`http://localhost:3001/user`)
		/* (`https://bfs-pfhenry-production.up.railway.app/user`) */;
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


