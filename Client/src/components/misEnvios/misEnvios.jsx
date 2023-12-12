import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import flechaIcon from "../../assets/avance.png";
import VerticalExample from "../filters/filters";
import { getUserPackages } from "../../redux/Slices/packageSlice"; // Actualizado
import copiarIcon from "../../assets/copia.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


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

  const fecha = selectedPackage ? selectedPackage.fechaInicial.split("T")[0] : null;

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;

    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      console.log('Texto copiado al portapapeles:', text);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    if (selectedPackage) {
      copyToClipboard(selectedPackage.id);
      setIsCopied(true);
    }
  };

  const resetCopyState = () => {
    setIsCopied(false);  
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
  Copiar
    </Tooltip>
  );



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
            <Card
              key={idx}
              style={{
                width: "18rem",
                height: "100%",
                margin: "0 10px 20px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
              }}
              className="mb-3"
            >
              <Card.Body>
                <h6>{envio.fechaInicial.split("T")[0]}</h6>
                <Card.Title>{envio.servicios}</Card.Title>
                <br/>
                <Card.Subtitle className="mb-2 text-muted">
                  <span style={{ marginRight: '5px' }}></span>
                  {envio.origen} <img src={flechaIcon} alt="Logout Icon" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
                  {""} {envio.destino}
                </Card.Subtitle>
                <Card.Text></Card.Text>
                <Button
                  variant="outline-primary"
                  style={{
                    height: "40px",
                    marginTop: "10px"
                  }}
                  onClick={() => handleDetalleButtonClick(envio)}
                >
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
            style={{ borderRadius: '12px' }}
          >
            <Modal.Header closeButton style={{ background: '#007BFF', color: 'white', borderBottom: 'none' }}>
              <Modal.Title id="example-modal-sizes-title-sm" style={{ fontSize: '1.5rem' }}>
                Detalles del paquete
              </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ padding: '22px', textAlign: 'center' }}>
            <p  style={{ marginBottom: '13px', fontSize: '1.1rem', }}>Numero de seguimiento:</p>
              <p style={{ marginBottom: '13px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                 {selectedPackage.id} 
               
                <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button
                  variant="secondary"
                  onClick={handleCopyToClipboard}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    transform: isCopied ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    resetCopyState(); 
                  }}
                >
                  <img src={copiarIcon} alt="copiar Icon" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
                </Button>
              </OverlayTrigger>

              </p>
              <p style={{ marginBottom: '10px' }}>Fecha: {fecha ? fecha : 'Fecha no disponible'}</p>
              <p style={{ marginBottom: '10px' }}>Estatus: {selectedPackage.status}</p>
              <p style={{ marginBottom: '10px' }}>Peso: {selectedPackage.peso} kg</p>
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
