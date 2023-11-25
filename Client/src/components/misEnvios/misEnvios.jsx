import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";


import "./MisEnvios.css";

function MisEnvios() {
  const [showModal, setShowModal] = useState(false);
  const [trackingInfo, setTrackingInfo] = useState(null);


  

  const handleEstadoButtonClick = (info) => {
    setTrackingInfo(info);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const enviosData = [
    { id: "#25634", location: "Capital Federal, Buenos Aires", progress: 40 },
    { id: "#54236", location: "Rosario, Santa Fe", progress: 62 },
    { id: "#87521", location: "Cordoba Capital", progress: 100 },
  ];

  return (
    <div style={{ position: "relative" }}>
  <Image
    src="https://www.sendcloud.es/wp-content/uploads/2020/05/etiqueta-de-envio-paquete.png"
    fluid
    style={{ width: "100%", height: "400px" }}
  />
  <br />
  <br />
  <br />
  <div className="mis-envios-container">
    {enviosData.map((envio, idx) => (
      <Card key={idx} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{envio.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {envio.location}
          </Card.Subtitle>
          <Card.Text></Card.Text>
          <Card.Link href="#" onClick={() => handleEstadoButtonClick(envio)}>
            Estado
          </Card.Link>
          <Card.Link href={`/envios/${envio.id}`}>Detalle</Card.Link>
        </Card.Body>
      </Card>
    ))}
  </div>
  <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Estado del envío</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {trackingInfo && (
        <>
          <ProgressBar
            className="mt-3"
            style={{ height: "10px", maxWidth: "480px" }}
            animated
            now={trackingInfo.progress}
          />
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th style={trackingInfo.progress >= 0 && trackingInfo.progress < 20 ? { background: 'blue', color: 'white' } : {}}>Ingreso a sucursal</th>
                <th style={trackingInfo.progress >= 20 && trackingInfo.progress < 50 ? { background: 'blue', color: 'white' } : {}}>Despachado</th>
                <th style={trackingInfo.progress >= 50 && trackingInfo.progress < 80 ? { background: 'blue', color: 'white' } : {}}>En camino</th>
                <th style={trackingInfo.progress >= 80 ? { background: 'blue', color: 'white' } : {}}>Entregado</th>
              </tr>
            </thead>
          </Table>
        </>
      )}
    </Modal.Body>
  </Modal>
  <br />
  <br />
  <br />
</div>

  );
}

export default MisEnvios;
