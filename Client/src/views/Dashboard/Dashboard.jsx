/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import style from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { getAllUser } from "../../utils/getAllUser";
import { getAllEnvios } from "../../utils/getAllEnvios";
import { getAllAdmin } from "../../utils/geatAllAdmin";
import axios from "axios";
import Swal from "sweetalert2";

const Dashboard = ({ updateContextUser }) => {
  const [adminGraphs, setAdminGraphs] = useState([]);
  const [users, setUsers] = useState([]);
  const [envio, setEnvio] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");
  const [adminList, setAdminList] = useState(admin);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("userOnSession"));
    if (session?.email !== "") {
      updateContextUser(session);
    }
    handleUsers();
    handleEnvio();
    handleAdmin();
  }, [adminList]);

  const handleButtonClick = (button) => {
    if (button === "adminGraphs") {
      setSelectedButton(button);
      setAdminGraphs(true);
    } else if (button === "Usuarios") {
      setSelectedButton(button);
      handleAdmin();
    } else if (button === "Envios") {
      setSelectedButton(button);
      handleEnvio();
    } else if (button === "Admin") {
      setSelectedButton(button);
      handleAdmin();
    }
  };

  const handleUsers = async () => {
    const usuarios = await getAllUser();
    setUsers(usuarios);
  };

  const handleEnvio = async () => {
    const envio = await getAllEnvios();
    setEnvio(envio);
  };

  const handleAdmin = async () => {
    const admin = await getAllAdmin();
    setAdmin(admin);
  };


  const handleToggleUser = async (user) => {
    const message = user.enabled
      ? "bloquear a este usuario"
      : "desbloquear a este usuario";

    const result = await Swal.fire({
      title: `¿Deseas ${message} en la plataforma?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3d0dca",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
      customClass: {
        popup: "mySwal",
      },
    });

    if (result.isConfirmed) {
      try {
        // Realiza la solicitud HTTP
        await axios.get(`http://localhost:3001/user/`, {
          ...user,
          enabled: !user.enabled,
        });

        // Actualiza el estado local y persiste los cambios en localStorage
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.ID === user.ID ? { ...u, enabled: !u.enabled } : u))
        );
        localStorage.setItem('users', JSON.stringify(users));

        Swal.fire({
          title: `Este usuario ha sido ${user.enabled ? "bloqueado" : "desbloqueado"} en BFS`,
          icon: "success",
          customClass: {
            popup: "mySwal",
          },
        });
      } catch (error) {
        console.error("Error al realizar la solicitud HTTP:", error);
        Swal.fire({
          title: "Error al realizar la acción",
          text: "Hubo un problema al intentar realizar la acción. Por favor, inténtalo de nuevo.",
          icon: "error",
          customClass: {
            popup: "mySwal",
          },
        });
      }
    }
  };
  const handleToggleActivation = async (admin) => {
    try {
      const result = await Swal.fire({
        title: `¿Estás seguro de ${admin.isActive ? "desactivar" : "activar"} este administrador?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        // Realiza la llamada a la API para cambiar el estado del administrador
        await axios.put(`http://localhost:3001/admin/${admin.ID}`, {
          isActive: !admin.isActive,
        });

        // Actualiza el estado en el frontend utilizando las acciones de Redux
        const updatedAdminList = adminList.map((a) =>
          a.ID === admin.ID ? { ...a, isActive: !admin.isActive } : a
        );

        setAdminList(updatedAdminList); // Actualiza adminList

        Swal.fire({
          title: 'Éxito',
          text: `El administrador ha sido ${admin.isActive ? 'desactivado' : 'activado'} correctamente.`,
          icon: 'success',
        });
      }
    } catch (error) {
      console.error('Error al activar/desactivar administrador:', error);
    }
  };


  return (
    <div className={style.container}>
      <Sidebar onButtonClick={handleButtonClick} />
      <Content
        selectedButton={selectedButton}
        users={users}
        envio={envio}
        admin={admin}
        handleToggleUser={handleToggleUser}
        handleToggleActivation={handleToggleActivation}
      />
    </div>
  );
};

export default Dashboard;
