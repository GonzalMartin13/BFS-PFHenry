import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import Button from "../../components/Button/Button";
import Grafico from "./Graficos";
import ReactPaginate from "react-paginate";
import { getAllEnvios } from "../../utils/getAllEnvios";

const Content = ({
  selectedButton,
  //payments,
  //envio,
  users,
  admin,
  handleBlockUser,
  handleBlockEnvio,
}) => {
  const [adminList, setAdminList] = useState(admin);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [envio, setEnvio] = useState("");

  console.log(envio);
  useEffect(() => {
    handleEnvio();
  }, []);

  const handleEnvio = async () => {
    const envios = await getAllEnvios();
    setEnvio(envios);
  };

  const toggleActivation = (index) => {
    const updatedAdminList = [...adminList];
    updatedAdminList[index].isActive = !updatedAdminList[index].isActive;
    setAdminList(updatedAdminList);
  };

  // Función para manejar el cambio de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const renderTableRows = (data, currentPage, itemsPerPage) => {
    console.log(data);
    return data
      ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
      ?.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.servicios}</td>
          <td>${item.total}</td>
          <td>{item.status}</td>
          <td>
            <label className={styles.container_check}>
              {item.enabled ? (
                <input type="checkbox" checked={true} />
              ) : (
                <input type="checkbox" checked={false} />
              )}

              <div className={styles.checkmark}></div>
            </label>
          </td>
          {item.enabled ? (
            <td>
              <Button
                text={"Bloquear envio"}
                onClick={() => handleBlockEnvio(item)}
              />
            </td>
          ) : (
            <td>
              <Button
                text={"Desbloquear envio"}
                onClick={() => handleBlockEnvio(item)}
              />
            </td>
          )}
        </tr>
      ));
  };
  const renderTableRowsUser = (data, currentPage, itemsPerPage) => {
    return data
      ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
      ?.map((item, index) => (
        <tr key={index}>
          <td>{item.ID}</td>
          <td>{item.email}</td>
          <td>{item.name}</td>
          <td>{item.lastName}</td>
          <td>
            <label className={styles.container_check}>
              {item?.enabled ? (
                <input type="checkbox" checked={true} />
              ) : (
                <input type="checkbox" checked={false} />
              )}
              <div className={styles.checkmark}></div>
            </label>
          </td>
          {item.enabled ? (
            <td>
              <Button
                text={"Bloquear usuario"}
                onClick={() => handleBlockUser(item)}
              />
            </td>
          ) : (
            <td>
              <Button
                text={"Desbloquear usuario"}
                onClick={() => handleBlockUser(item)}
              />
            </td>
          )}
        </tr>
      ));
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
                    <th>Bloquear/Desbloquear</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRowsUser(users, currentPage, itemsPerPage)}
                </tbody>
              </table>
            </div>
            {/* Componente de paginación */}
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={"..."}
              pageCount={Math.ceil(users.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={(selected) =>
                handlePageClick(selected, selectedButton)
              }
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </>
        )}
      </div>
      <div>
        {selectedButton === "Envios" && (
          <>
            <h2>Administrador de Envios</h2>
            <div className={styles.envios_table_container}>
              <table className={styles.envios_table}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Categoría</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Bloquear/Desbloquear</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows(envio, currentPage, itemsPerPage)}
                </tbody>
              </table>
            </div>
            {/* Componente de paginación */}
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={"..."}
              pageCount={Math.ceil(envio.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={(selected) =>
                handlePageClick(selected, selectedButton)
              }
              containerClassName={"pagination"}
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
                    <th>Activar/Desactivar</th>
                  </tr>
                </thead>
                <tbody>
                  {admin?.map((admin, index) => (
                    <tr key={index}>
                      <td>{admin.nameAdmin}</td>
                      <td>{admin.emailAdmin}</td>
                      <td>
                        <button onClick={() => toggleActivation(index)}>
                          {admin.isActive ? "Desactivar" : "Activar"}
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
  handleBlockUser: PropTypes.func,
  handleBlockEnvio: PropTypes.func,
};

export default Content;
