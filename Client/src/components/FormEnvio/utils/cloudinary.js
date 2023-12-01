import axios from "axios";

export const handleUpload = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "imagenes");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dq8e4ljpe/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    const imageUrl = response.data.url;
    return imageUrl;
  } catch (error) {
    console.error(error);
  }
};
