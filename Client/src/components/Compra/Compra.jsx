import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const Compra = () => {
  const cotizacion = useSelector((state) => state.quoter);
  const { origen, destino, servicios, total } = cotizacion;

  return (
    <div>
      <Card className="mx-auto my-auto" style={{  width: "50rem", height: "30rem", margin: "19px"}}>
        <Card.Body>
          <Card.Title>Valida que los datos son correctos</Card.Title>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Origen</th>
                <th>Destino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{origen}</td>
                <td>{destino}</td>
              </tr>
              <tr>
                <td colSpan={2}>Tipo de envio</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {servicios.map((servicio, index) => (
                    <li key={index}>{servicio}</li>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>

          <Card.Text>Costo Final: $325.00{total}</Card.Text>
          <Button variant="primary">Confirmar Compra</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Compra;
