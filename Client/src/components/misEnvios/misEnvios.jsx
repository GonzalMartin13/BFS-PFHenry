import {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import flechaIcon from "../../assets/sign.svg";
import VerticalExample from "../filters/filters";
import { getUserPackages } from "../../redux/actions/packageActions";
import "./MisEnvios.css";
function MisEnvios() {
  const dispatch = useDispatch();
  const userPackages = useSelector((state) => state.packages.userPackages);
  const UserEmail = useSelector((state) => state.user.user.email);

  useEffect(() => {
    if (UserEmail) {
      dispatch(getUserPackages(UserEmail));
    }
  }, [dispatch, UserEmail]);



  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleDetalleButtonClick = (envio) => {
    setSelectedPackage(envio);
    setShowModal(true);
  };

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
                <Card.Subtitle className="mb-2 text-muted">
                  <span style={{ marginRight: '5px' }}></span>
                  {envio.origen} <img src={flechaIcon} alt="Logout Icon" style={{ width: '20px', height: '20px' }} /> {envio.destino}
                </Card.Subtitle>
                <Card.Text></Card.Text>
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
            <Modal.Header closeButton style={{ background: '#007BFF', color: 'white' }}>
              <Modal.Title id="example-modal-sizes-title-sm">
                Detalles del paquete
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: '20px', textAlign: 'center' }}>
              <p>Numero seguimiento: {selectedPackage.id}</p>
              <p>Fecha: {selectedPackage.fechaInicial}</p>
              <p>Estatus: {selectedPackage.status} </p>
              <p>Destinatario: {selectedPackage.destinatario} </p>
              <p>Peso: {selectedPackage.peso} kg</p>
              <p>Dimensiones:{selectedPackage.dimensiones} </p>
              <p>Total: {selectedPackage.total} $ </p>
              <img src={selectedPackage.imagen} alt="Imagen del paquete" style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px auto' }} />
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