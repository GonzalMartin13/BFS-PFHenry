/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import Grafico from "./Graficos";
import ReactPaginate from "react-paginate";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png"


const Content = ({ selectedButton, envio, users, admin, handleToggleUser, handleToggleActivation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [hasPerformedAction, setHasPerformedAction] = useState(false);
  const itemsPerPage = 10;

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const Checkbox = ({ value, onChange }) => {
    const [checked, setChecked] = useState(value);

    const handleChange = (e) => {
      setChecked(e.target.checked);
      onChange(e.target.checked);
    };

    return (
      <label className={styles.container_check}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled
        />
        <div className={styles.checkmark}></div>
      </label>
    );
  };

  // Función para manejar el cambio de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "En tránsito":
        return styles.status_yellow;
      case "Entregado":
        return styles.status_green;
      case "Pendiente":
        return styles.status_red;
      default:
        return "";
    }
  };

  const renderTableRows = (data, currentPage, itemsPerPage) => {
    return data
      ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
      ?.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.servicios}</td>
          <td>${item.total}</td>
          <td className={getStatusColorClass(item.status)}>{item.status}</td>
        </tr>
      ));
  };

  const renderTableRowsUser = (data, currentPage, itemsPerPage) => {
    const filteredUsers = data?.filter((user) => {
      const userName = user?.name || "";
      return userName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const sortedAndFilteredData = filteredUsers
      ?.sort((a, b) => {
        // Verificación de nulidad o indefinición antes de llamar a toUpperCase()
        const nameA = a.name ? a.name.toUpperCase() : "";
        const nameB = b.name ? b.name.toUpperCase() : "";
        if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
        if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
      ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    return (
      sortedAndFilteredData &&
      sortedAndFilteredData.map((item, index) => (
        <tr key={index}>
          <td>{item.ID}</td>
           <td className={`${styles.fullEmail}`}>{item.email}</td>
          <td>{item.name}</td>
          <td>{item.lastName}</td>
          <td>
            <button
              onClick={() => handleToggleUser(item)}
              className="btn btn-warning">
              {item.enabled ? "Desbloquear" : "Bloquear"}
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </td>
        </tr>
      ))
    );
  };

  return (
    <div className={styles.containerContext}>
      <div>
        {!hasPerformedAction && selectedButton !== "adminGraphs" && (
          selectedButton !== "Usuarios" && selectedButton !== "Admin" && selectedButton !== "Envios" && (
            <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{
               display: 'block',
               margin: 'auto',
               border: "1px solid #dee2e6",
               borderRadius: "45px",
               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            />
          )
        )}

        {selectedButton === "adminGraphs" && (
          <>
            <h2>Registros de Administración</h2>
            <Grafico />
          </>
        )}
      </div>
      <div>
        {selectedButton === "Usuarios" && (
          <>
            <h2 className="mb-4">Tabla de Usuarios</h2>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              style={{
                borderRadius: '8px',
                padding: '8px',
                border: '1px solid #ccc',
              }}
            />
            <div className={styles.contenedorFiltro}>
              <div className={styles.filtro}>
                <label htmlFor="sortOrder">Ordenar por Nombre:</label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                </select>
              </div>
            </div>
            <div className={styles.envios_table_container}>
              <table className={styles.envios_table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRowsUser(users, currentPage, itemsPerPage)}
                </tbody>
              </table>
            </div>
            {/* Componente de paginación */}
            <ReactPaginate
              className={styles.paginacion}
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              breakLabel={"..."}
              pageCount={Math.ceil(users.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              subContainerClassName={"pages pagination"}
              activeClassName={styles.activePage}
            />
          </>
        )}
      </div>
      <div>
        {selectedButton === "Envios" && (
          <>
            <h2 className="mb-4">Tabla de Envios</h2>
            <div className={styles.envios_table_container}>
              <table className={styles.envios_table}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Categoría</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows(envio, currentPage, itemsPerPage)}
                </tbody>
              </table>
            </div>
            {/* Componente de paginación */}
            <ReactPaginate
              className={styles.paginacion}
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              breakLabel={"..."}
              pageCount={Math.ceil(envio.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={(selected) => handlePageClick(selected, selectedButton)}
              containerClassName={"pagination justify-content-center gap-1rem"}
              subContainerClassName={"pages pagination"}
              activeClassName={styles.activePage}
            />
          </>
        )}

        {selectedButton === "Admin" && (
          <>
            <h2 className="mb-4">Administradores</h2>
            <div className={styles.envios_table_container}>
              <table className={styles.envios_table}>
                <thead>
                  <tr>
                    <th>Nombre Admin</th>
                    <th>Email</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {admin?.map((admin, ID) => (
                    <tr key={ID}>
                      <td>{admin?.nameAdmin || "N/A"}</td>
                      <td>{admin?.emailAdmin || "N/A"}</td>
                      <td>
                        <button
                          onClick={() => handleToggleActivation(admin)}
                          style={{
                            backgroundColor: admin.isActive ? "green" : "red",
                            color: "white",
                            cursor: "pointer",
                            padding: "4px",
                            borderRadius: "5px",
                          }}>
                          {admin?.isActive ? "Activo" : "Inactivo"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
Content.propTypes = {
  selectedButton: PropTypes.string,
  payments: PropTypes.array,
  envio: PropTypes.array,
  admin: PropTypes.array,
  users: PropTypes.array,
  handleToggleUser: PropTypes.func,
  handleBlockAdmin: PropTypes.func,
  handleToggleActivation: PropTypes.func,
};

export default Content;