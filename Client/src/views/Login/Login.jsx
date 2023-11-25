//funcionamiento PENDIENTE

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validar } from "./validacionlogin";
import { loginUser } from "../../redux/actions/userActions";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    const validationErrors = validar({
      ...input,
      [event.target.name]: event.target.value,
    });

    setErrors({
      ...errors,
      [event.target.name]: validationErrors[event.target.name],
    });
  };

  function disableHandler() {
    return errors.email || errors.password || !input.email || !input.password;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(input));
    setInput({
      email: "",
      password: "",
    });

    {
      Swal.fire({
        title: "Sesión iniciada",
        text: "Has iniciado sesión exitosamente",
        icon: "success",
      });
    }

    navigate("/");
  };

  const handleLoginClick = () => {
    setShowForm(true);
    setIsRegistering(false);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };




  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col md={4}>
        {showForm && (
          <Form onSubmit={handleSubmit}>
            {isRegistering && <></>}

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
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="password"
                value={input.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </Form.Group>

            <Button
              disabled={disableHandler()}
              variant="primary"
              type="submit"
              className="mb-2"
            >
              {isRegistering ? "Registrarse" : "Iniciar Sesión"}
            </Button>
          </Form>
        )}
        {!showForm && (
          <div className="d-grid gap-2">
            <Button
              onClick={handleLoginClick}
              variant="outline-success"
              className="mb-2"
            >
              Iniciar Sesión
            </Button>
            <Button
              onClick={handleRegisterClick}
              variant="outline-secondary"
              className="mb-2"
            >
              Registrarse
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
}

export default Login;
