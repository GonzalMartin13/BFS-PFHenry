/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-semi */
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  registerAdmin,
  userProfile,
} from "../../redux/actions/userActions";
import {
  login,
  logouted,
  contar,
  contadorInTwo,
  confirmed,
  profiles,
} from "../../redux/Slices/userSlice";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import { log, out, profile } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import {useEffect} from "react"

const Login = () => {
  const { contador, isLoggedIn, emails, isProfile, goConfirmacion, goProfile } =
    useSelector((state) => state.user);

  const usuario = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  console.log(usuario)

  if (
    emails?.includes(user?.email) &&
    isAuthenticated &&
    user.email_verified &&
    contador === 2
  ) {
    const previousRoute = localStorage.getItem("previousRoute");
    localStorage.removeItem("previousRoute");
    navigate(previousRoute || "/");
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} has iniciado sesión exitosamente como administrador`,
      icon: "success",
    });

    dispatch(login());

    const postAdmin = {
      nameAdmin: user.nickname,
      emailAdmin: user.email,
    };

    const postUser = {
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
    };

    dispatch(registerAdmin(postAdmin));
    dispatch(registerUser(postUser));
  } else if (isAuthenticated && user.email_verified && contador === 2) {
    const previousRoute = localStorage.getItem("previousRoute");
    localStorage.removeItem("previousRoute");
    navigate(previousRoute || "/");
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} has iniciado sesión exitosamente`,
      icon: "success",
    });

    dispatch(login());

    const postUser = {
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
    };

    dispatch(registerUser(postUser));
  } else if (isAuthenticated && !user.email_verified && contador === 2) {
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} verifica tu Email para acceder a nuestros servicios`,
      icon: "success",
    });

    dispatch(contar());
  } else if (usuario.isBanned && contador === 3){
    Swal.fire({
      title: "Usuario Bloqueado",
      text: ` no puedes acceder a la pagina por infringir nuestros trerminos y condiciones`,
      icon: "warning",
    });
      dispatch(contar())
      dispatch(logouted());
      return

  }

  const confirmar = () => {
    navigate("/confirmacion");
    dispatch(confirmed(false));
    dispatch(profiles(false));
  };

  const perfil = () => {
    navigate("/profile");
    Swal.fire({
      title: "Actualiza tus datos",
      text: "Para que puedas continuar con la confirmacion de tu pedido",
      icon: "success",
    });
    dispatch(profiles(false));
  };

  if (usuario.phone && contador === 3) {
    const input = {
      name: usuario.name,
      lastName: usuario.lastName,
      phone: usuario.phone,
      email: usuario.email,
      nickname: usuario.nickname,
    };
    dispatch(contar());

    dispatch(userProfile(input)).then(() => goProfile && confirmar());
  } else if (usuario.picture && contador === 3) {
    goProfile && perfil();
  }

  const handleLogin = () => {
    localStorage.setItem("previousRoute", window.location.pathname);
    loginWithRedirect();
    dispatch(contadorInTwo());
  };

  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro?",
        text: "Cerraras la sesión",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, cerrar sesión",
        cancelButtonText: "No, Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Realiza el logout solo si el usuario confirma
          logout();
          dispatch(logouted());

          // Muestra un mensaje de éxito después del logout
          swalWithBootstrapButtons.fire({
            title: "Sesión cerrada!",
            text: "Haz cerrado sesíón",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Button onClick={handleLogin} style={log}>
          Ingresar
        </Button>
      ) : (
        <div>
          <Link to={"/profile/"}>
            <Button style={profile}>
              <FontAwesomeIcon icon={faUser} />
            </Button>
          </Link>
          <Button onClick={handleLogout} variant="outline-success" style={out}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
