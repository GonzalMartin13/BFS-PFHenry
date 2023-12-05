/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-semi */
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerUser, registerAdmin} from "../../redux/actions/userActions";
import {login, logouted, contar} from "../../redux/Slices/userSlice";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import {useAuth0} from "@auth0/auth0-react";
import logoutIcon from "../../assets/logout.svg";
import { useNavigate } from 'react-router-dom';
import {log, out, iconout} from "./style";
 


const Login = () => {
  const {contador, isLoggedIn} = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {loginWithRedirect, isAuthenticated, logout, user} = useAuth0();

  const emails = ["dixongonzalezm2304@gmail.com", "bfspfhenry@gmail.com"]

  if (emails.includes(user?.email) && isAuthenticated && user.email_verified && contador === 2) {
    const previousRoute = localStorage.getItem('previousRoute');
    localStorage.removeItem('previousRoute');
    navigate(previousRoute || '/');
    Swal.fire({
      title: "Sesión iniciada",
      text: `${user.nickname} has iniciado sesión exitosamente como administrador`,
      icon: "success",
    });

    dispatch(login());

    const postUser = {
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
    };

    const postAdmin = {
      nameAdmin: user.nickname,
      emailAdmin: user.email,
    };

    dispatch(registerUser(postUser));
    dispatch(registerAdmin(postAdmin));
  } else if (isAuthenticated && user.email_verified && contador === 2) {
    const previousRoute = localStorage.getItem('previousRoute');
    localStorage.removeItem('previousRoute');
    navigate(previousRoute || '/');
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
  };


  const handleLogin = () => {
    localStorage.setItem('previousRoute', window.location.pathname);
    loginWithRedirect();
    dispatch(contar());
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
      {!isLoggedIn && contador === 1 ? (
        <Button onClick={handleLogin} style={log}>Ingresar</Button>
      ) : (
        <Button onClick={handleLogout} variant="outline-success" style={out}>
          <img src={logoutIcon} alt="Logout Icon" style={iconout} />
        </Button>
      )}
    </div>
  );
};

export default Login;
