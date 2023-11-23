import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validar } from "./validacionlogin";
import { addUser } from "../../redux/Slices/userSlice";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
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

    dispatch(addUser(input));
    setInput({
      email: "",
      password: "",
      confirmPassword: "",
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
    });

    if (isRegistering) {
      Swal.fire({
        title: "Registrado Exitosamente",
        text: "Te has registrado en BFS",
        icon: "success",
      });
    } else {
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
    // Redirecciona a la ruta "/register" al hacer clic en "Registrarse"
    navigate("/register");
  };

  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col md={4}>
        {showForm && (
          <Form onSubmit={handleSubmit}>
            {isRegistering && (
              <>
                {/* Nombre y Apellido en la misma línea */}
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="nombre"
                      value={input.nombre}
                      onChange={handleChange}
                      type="text"
                      placeholder="Nombre"
                      size="sm"
                    />
                    {errors.nombre && (
                      <span className="text-danger">{errors.nombre}</span>
                    )}
                  </Col>
                  <Col>
                    <Form.Control
                      name="apellido"
                      value={input.apellido}
                      onChange={handleChange}
                      type="text"
                      placeholder="Apellido"
                      size="sm"
                    />
                    {errors.apellido && (
                      <span className="text-danger">{errors.apellido}</span>
                    )}
                  </Col>
                </Row>

                {/* Teléfono y Dirección en la misma línea */}
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      name="telefono"
                      value={input.telefono}
                      onChange={handleChange}
                      type="text"
                      placeholder="Teléfono"
                      size="sm"
                    />
                    {errors.telefono && (
                      <span className="text-danger">{errors.telefono}</span>
                    )}
                  </Col>
                  <Col>
                    <Form.Control
                      name="direccion"
                      value={input.direccion}
                      onChange={handleChange}
                      type="text"
                      placeholder="Dirección"
                      size="sm"
                    />
                    {errors.direccion && (
                      <span className="text-danger">{errors.direccion}</span>
                    )}
                  </Col>
                </Row>
              </>
            )}

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

            {/* Confirm Password */}
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
