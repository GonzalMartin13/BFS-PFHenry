/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import flechaIcon from "../../assets/sign.svg";
import VerticalExample from "../filters/filters";
import { getUserPackages, cleanDetailAction } from "../../redux/Slices/packageSlice"; // Actualizado

function MisEnvios() {
  const dispatch = useDispatch();
  const userPackages = useSelector((state) => state.packages.userPackages);
  const UserEmail = useSelector((state) => state.user.user.email);

  useEffect(() => {
    if (UserEmail) {
      dispatch(getUserPackages(UserEmail));
    }
  }, [dispatch, UserEmail]);

console.log(userPackages);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleDetalleButtonClick = (envio) => {
    setSelectedPackage(envio);
    setShowModal(true);
  };

  const fecha = selectedPackage ? selectedPackage.fechaInicial.split("T")[0] : null;

  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="https://www.sendcloud.es/wp-content/uploads/2020/05/etiqueta-de-envio-paquete.png"
          fluid
          style={{ width: "100%", height: "400px" }}
        />
        <br />
        <br />
        <br />
        <VerticalExample />
        <br />
        <br />
        <br />
        <div className="mis-envios-container d-flex flex-wrap justify-content-center">
          {userPackages.map((envio, idx) => (
            <Card key={idx} style={{ width: "18rem", height: "100%", margin: "0 10px 20px" }} className="mb-3">
              <Card.Body>
                <Card.Title>{envio.servicios}</Card.Title>
                <br></br>
                <Card.Subtitle className="mb-2 text-muted">
                  <span style={{ marginRight: '5px' }}></span>
                  {envio.origen} <img src={flechaIcon} alt="Logout Icon" style={{ width: '20px', height: '20px' }} /> {envio.destino}
                </Card.Subtitle>
                <Card.Text></Card.Text>
                <br></br>
                <Button variant="primary" onClick={() => handleDetalleButtonClick(envio)}>
                  Detalle
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        {selectedPackage && (
          <Modal
            size="sm"
            show={showModal}
            onHide={handleCloseModal}
            aria-labelledby="example-modal-sizes-title-sm"
            style={{ borderRadius: '10px' }}
          >
            <Modal.Header closeButton style={{ background: '#007BFF', color: 'white', borderBottom: 'none' }}>
              <Modal.Title id="example-modal-sizes-title-sm" style={{ fontSize: '1.5rem' }}>
                Detalles del paquete
              </Modal.Title>
            </Modal.Header>
           

<Modal.Body style={{ padding: '20px', textAlign: 'left' }}>
<p style={{ marginBottom: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>Numero de seguimiento: {selectedPackage.id}</p>
<p style={{ marginBottom: '10px' }}>Fecha: {fecha ? fecha : 'Fecha no disponible'}</p>
<p style={{ marginBottom: '10px' }}>Estatus: {selectedPackage.status}</p>
<p style={{ marginBottom: '10px' }}>Peso: {selectedPackage.peso} kg</p>
<p style={{ marginBottom: '10px' }}>Dimensiones: {selectedPackage.dimensiones}</p>
<p style={{ marginBottom: '10px' }}>Total: {selectedPackage.total} $</p>
{selectedPackage.imagen && (
  <img
    src={selectedPackage.imagen}
    alt="Imagen del paquete"
    style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px 0', borderRadius: '5px' }}
  />
)}
</Modal.Body>
          </Modal>
        )}
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default MisEnvios;




