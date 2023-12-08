import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import errorImage from "../../assets/errorImage.png"; // Reemplaza con la ruta correcta de tu imagen

const ErrorPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${errorImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "112vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff", // Cambia el color del texto si es necesario
  };

  return (
    <div style={backgroundStyle}>

      <Button href="/">
        Ir a Inicio
      </Button>
    </div>
  );
};

export default ErrorPage;
