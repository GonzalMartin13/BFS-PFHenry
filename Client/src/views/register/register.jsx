
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validarr } from "./validateRegister";
import { registerUser } from "../../redux/actions/userActions";
import Swal from "sweetalert2";

function Register() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {

  if(event.target.name !== "confirmPassword"){
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }
   

    const validationErrors = validarr({
      ...input,
      [event.target.name]: event.target.value,
    });

    

    setErrors({
      ...errors,
      [event.target.name]: validationErrors[event.target.name],
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(registerUser(input));

      setInput({
        name: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        password: "",
      });

      Swal.fire({
        title: "Registrado Exitosamente",
        text: "Te has registrado en BFS",
        icon: "success",
      });

      navigate("/");
    } catch (error) {}
  };

  return (
    <Row className="justify-content-center align-items-center min-vh-100 ">
      <Form onSubmit={handleSubmit}>
        {/* Nombre y Apellido en la misma línea */}
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="name"
              value={input.name}
              onChange={handleChange}
              type="text"
              placeholder="Nombre"
              size="sm"
            />
            {errors.name && (
              <span className="text-danger">{errors.name}</span>
            )}
          </Col>
          <Col>
            <Form.Control
              name="lastName"
              value={input.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Apellido"
              size="sm"
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName}</span>
            )}
          </Col>
        </Row>

        {/* Teléfono y Dirección en la misma línea */}
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="phone"
              value={input.phone}
              onChange={handleChange}
              type="text"
              placeholder="Teléfono"
              size="sm"
            />
            {errors.phone && (
              <span className="text-danger">{errors.phone}</span>
            )}
          </Col>
          <Col>
            <Form.Control
              name="address"
              value={input.address}
              onChange={handleChange}
              type="text"
              placeholder="Dirección"
              size="sm"
            />
            {errors.address && (
              <span className="text-danger">{errors.address}</span>
            )}
          </Col>
        </Row>

        {/* Email y Password */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            value={input.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
            autoComplete="off"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            value={input.password}
            onChange={handleChange}
            type="password"yyyy
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Control
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <span className="text-danger">{errors.confirmPassword}</span>
          )}
        </Form.Group>

        <Button
          //   disabled={disableHandler()}
          variant="primary"
          type="submit"
          className="mb-2"
        >
          Registrarse
        </Button>
      </Form>
    </Row>
  );
}

export default Register;