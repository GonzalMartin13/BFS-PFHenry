import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from 'react-bootstrap/Image';

export default function QuoteForm() {
  return (
    <div>
    <div style={{ position: 'relative' }}>
    <Image src="https://www.speedboy.cl/Images/index3xx_02.png" fluid style={{ width: '100%', height: '300px' }}/>
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={{ width: "45%" }}>
      crear pedidos
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Origen: </InputGroup.Text>
        <Form.Control
          placeholder="Origen"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          example@.com
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      </div>
      </div>
    </div>
  );
}
