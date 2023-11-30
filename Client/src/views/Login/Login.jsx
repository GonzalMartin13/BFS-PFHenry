import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { login, logouted } from "../../redux/Slices/userSlice";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import logoutIcon from "../../assets/logout.svg";

const Login = () => {
  const dispatch = useDispatch();

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user.email_verified) {
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
    } else if (isAuthenticated && !user.email_verified) {
      Swal.fire({
        title: "Sesión iniciada",
        text: `${user.nickname} verifica tu Email para acceder a nuestros servicios`,
        icon: "success",
      });
    }
  }, [user]);

  const handleLogin = () => {
    loginWithRedirect();
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
          dispatch(logouted());
          logout();

          // Muestra un mensaje de éxito después del logout
          swalWithBootstrapButtons.fire({
            title: "Sesión cerrada!",
            text: "Haz cerrado sesíón",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={handleLogin}>Ingresar</Button>
      ) : (
        <Button onClick={handleLogout} variant="outline-success">
          <img src={logoutIcon} alt="Logout Icon" />
        </Button>
      )}
    </div>
  );
};

export default Login;
