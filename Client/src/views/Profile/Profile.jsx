/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validarr } from "./validateProfile";
import { userProfile } from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import { confirmed } from "../../redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const Profile = () => {
  const { user, goConfirmacion } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: user.name,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email, //tuve que comentar esto porque el estado user o esta vacio o es un string error.
    //  email: "a.ignacio.leivaleiva@gmail.com",
    nickname: user.nickname,
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    phone: "",
    nickname: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    const validationErrors = validarr({
      ...input,
      [event.target.name]: event.target.value,
    });

    setErrors({
      ...errors,
      [event.target.name]: validationErrors[event.target.name],
    });
  };

  const validateForm = () => {
    // Verificar que todos los campos estén llenos y no haya errores
    const isValid =
      Object.values(input).every((value) => value !== "") &&
      !Object.values(errors).some(Boolean);
    setFormValid(isValid);
  };

  // Validar el formulario cada vez que cambian los campos o errores
  useEffect(() => {
    validateForm();
  }, [input, errors]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Perfil actualizado Exitosamente",
        text: "Tu perfil se ha completado en BFS",
        icon: "success",
      });

      await dispatch(userProfile(input));

      if (goConfirmacion === true) {
        navigate("/confirmacion");
        dispatch(confirmed(false));
      } else {
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Container style={{
      border: "2px solid #dee2e6",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      margin: "30px auto",
      maxWidth: "700px",
      marginTop:"30px",
      maxHeight:"600px"
  
    }} className="mt-7">
        <Row className="justify-content-center align-items-center">
        <div style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "300px",
          marginTop:"13px"
        }}>
          <h3 style={{ margin: "15px " }}>Completa tus datos</h3>

        </div>
          <Form onSubmit={handleSubmit} style={{padding: "50px"}}>
   
            {/*  <h1 className="mb-4 fs-2">Registro de usario</h1> */}
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
            </Row>

            {/* Email */}
            <Row className="mb-3">
              <Col>
                <Form.Control
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  size="sm"
                  disabled
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  name="nickname"
                  value={input.nickname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nickname"
                  size="sm"
                />
                {errors.nickname && (
                  <span className="text-danger">{errors.nickname}</span>
                )}
              </Col>
            </Row>

            {/* Renderizar el botón solo si no hay errores */}
            {!errors.name &&
              !errors.lastName &&
              !errors.phone &&
              !errors.nickname && (
                <Button
              
                  disabled={!formValid}
                  variant="secondary"
                  type="submit"
                  className="mb-2"
                >
                  Actualizar
                </Button>
              )}
              <br></br>
              <br></br>
              <Link to='/'>
               <Button
              variant="secondary"
              className="mb-2"
            >
              Volver
            </Button>
            </Link>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
