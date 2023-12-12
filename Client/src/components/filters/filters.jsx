import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux';
import { sort, serviceFilter, reset } from "../../redux/Slices/packageSlice";

function VerticalExample() {
  const dispatch = useDispatch();

  const buttonStyle = {
    margin: '0.5rem',
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: '#fff',
    border: '1px solid #dc3545',
  };

  const dropdownButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: '#fff',
    border: '1px solid #007bff',
  };

  function sortHandler(selectedOption) {
    if (selectedOption === "fechaAsc") {
      dispatch(sort("Ascendente"));
    } else if (selectedOption === "fechaDesc") {
      dispatch(sort("Descendente"));
    }
  }

  function filterByService(selectedKey) {
    dispatch(serviceFilter(selectedKey));
  }

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <Button style={resetButtonStyle} onClick={resetHandler}>Reset</Button>

      <ButtonGroup style={buttonStyle} vertical>
        <DropdownButton
          as={ButtonGroup}
          title="Fecha"
          id="bg-vertical-dropdown-1"
          onSelect={sortHandler}
          style={dropdownButtonStyle}
        >
          <Dropdown.Item value="fechaAsc" eventKey="fechaAsc">Último</Dropdown.Item>
          <Dropdown.Item value="fechaDesc" eventKey="fechaDesc">Reciente</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <ButtonGroup style={buttonStyle} vertical>
        <DropdownButton
          as={ButtonGroup}
          title="Servicio"
          id="bg-vertical-dropdown-2"
          onSelect={filterByService}
          style={dropdownButtonStyle}
        >
          <Dropdown.Item eventKey="Paqueteria">Paqueteria</Dropdown.Item>
          <Dropdown.Item eventKey="Discreto">Entrega Certificada</Dropdown.Item>
          <Dropdown.Item eventKey="Cuidado">FragilBox</Dropdown.Item>
          <Dropdown.Item eventKey="Carteria">Carteria</Dropdown.Item>
          <Dropdown.Item eventKey="Express">Express</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
}

export default VerticalExample;
