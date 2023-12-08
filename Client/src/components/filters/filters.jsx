// VerticalExample.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { sort, serviceFilter,reset } from "../../redux/Slices/packageSlice";

function VerticalExample() {
  const dispatch = useDispatch();


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
 
    <div  className='flex-container ' style={{ marginBottom: '10px' }}>
      <Button className='m-1' onClick={resetHandler} >Reset</Button>
  
      <ButtonGroup className='m-1' vertical >
        <DropdownButton
          as={ButtonGroup}
          title="Fecha"
          id="bg-vertical-dropdown-1"
          onSelect={sortHandler}
        >
          <Dropdown.Item value="fechaAsc" eventKey="fechaAsc">Último</Dropdown.Item>
          <Dropdown.Item value="fechaDesc" eventKey="fechaDesc">Reciente</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
  
      <ButtonGroup className='m-1' vertical >
        <DropdownButton
          as={ButtonGroup}
          title="Servicio"
          id="bg-vertical-dropdown-2"
          onSelect={filterByService}
        >
          <Dropdown.Item eventKey="Paqueteria">Paqueteria</Dropdown.Item>
          <Dropdown.Item eventKey="Discreto">Discreto</Dropdown.Item>
          <Dropdown.Item eventKey="Cuidado">Cuidado</Dropdown.Item>
          <Dropdown.Item eventKey="Carteria">Carteria</Dropdown.Item>
          <Dropdown.Item eventKey="Express">Express</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      </div>
  );
  
}

export default VerticalExample;
