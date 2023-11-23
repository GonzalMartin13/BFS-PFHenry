import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validar } from "./validacionlogin";

import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "Email required",
    password: "Password required",
    confirmPassword: "Confirm Password required",
  });

  const [showForm, setShowForm] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
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
    if (isRegistering) {
      return (
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        !input.email ||
        !input.password ||
        !input.confirmPassword
      );
    } else {
      return errors.email || errors.password || !input.email || !input.password;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      Swal.fire({
        title: "Resgistrado Exitosamente",
        text: "Te has registrado en BFS",
        icon: "Exito",
      });
    } else {
      Swal.fire({
        title: "Sesión iniciada",
        text: "Has iniciado sesión exitosamente",
        icon: "Exito",
      });
    }

    navigate("/home");
  };
  const handleLoginClick = () => {
    setShowForm(true);
    setShowButtons(false);
    setIsRegistering(false);
  };

  const handleRegisterClick = () => {
    setShowForm(true);
    setShowButtons(false);
    setIsRegistering(true);
  };

  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col md={4}>
        {showForm && (
          <Form onSubmit={handleSubmit}>
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

            {isRegistering && (
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
            )}

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
        {showButtons && (
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
