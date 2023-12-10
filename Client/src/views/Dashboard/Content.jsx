import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
// import Button from "../../components/Button/Button";
import Grafico from "./Graficos";
import ReactPaginate from "react-paginate";
import { getAllEnvios } from "../../utils/getAllEnvios";

const Content = ({
  selectedButton,
  envio,
  users,
  admin,
  handleToggleUser,
  toggleActivation,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
   
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
    return (
      data
        ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        ?.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.servicios}</td>
            <td>${item.total}</td>
            <td className={getStatusColorClass(item.status)}>{item.status}</td>
          </tr>
        ))
    );
  };

  const renderTableRowsUser = (data, currentPage, itemsPerPage) => {
         return (
        data
          ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          ?.map((item, index) => (
            <tr key={index}>
              <td>{item.ID}</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>
              <label className={styles.container_check}>
                      <input
                        type="checkbox"
                        checked={item.enabled}
                        onChange={() => handleToggleUser(item)}
                        disabled
                      />
                      <div className={styles.checkmark}></div>
                    </label>
              </td>
              <td>
              <button
                onClick={() => handleToggleUser(item)} 
                className="btn btn-warning"
              >
                {item.enabled ? "Bloquear" : "Desbloquear"}
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
      {selectedButton === "adminGraphs" && (
          <>
            <h2>Registros de Administración del sistema</h2>
            <Grafico />
          </>
        )}
      </div>
      <div>
      {selectedButton === "Usuarios" && (
          <>
            <h2>Administrador de Usuarios</h2>
            <div className={styles.envios_table_container}>
              <table className={styles.envios_table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Estado</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRowsUser(users, currentPage, itemsPerPage)}
                </tbody>
              </table>
            </div>
            {/* Componente de paginación */}
            <ReactPaginate className={styles.paginacion}
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              breakLabel={"..."}
              pageCount={Math.ceil(users.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={(selected) =>
                handlePageClick(selected, selectedButton)
              }
              containerClassName={"pagination justify-content-center"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </>
        )}
      </div>
      <div>
      
      {selectedButton === "Envios" && (
        <>
          <h2>Administrador de  Envios</h2>
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
         <ReactPaginate className={styles.paginacion}
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            breakLabel={"..."}
            pageCount={Math.ceil(envio.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => handlePageClick(selected, selectedButton)}
            containerClassName={"pagination justify-content-center gap: 1rem"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </>
      )}
        
      {selectedButton === "Admin" && (
        <>
        <h2>Administradores del sistema</h2>
        <div className={styles.envios_table_container}>
          <table className={styles.envios_table}>
            <thead>
              <tr>
                <th>Nombre Admin</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {admin?.map((admin, index) => (
                <tr key={index}>
                  <td>{admin.nameAdmin}</td>
                  <td>{admin.emailAdmin}</td>
                 
                  <td>
                  <label className={styles.container_check}>
                      <input
                        type="checkbox"
                        checked={admin.enabled}
                        onChange={() => toggleActivation(admin)}
                        disabled
                      />
                      <div className={styles.checkmark}></div>
                    </label>
                    </td>
                    <td>
                  <button
                onClick={() => toggleActivation(admin)} 
                className="btn btn-warning"
              >
                {admin.enabled ? "Bloquear" : "Desbloquear"}
                <FontAwesomeIcon icon={faEdit} />
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
  toggleActivation: PropTypes.func,
  };

export default Content
