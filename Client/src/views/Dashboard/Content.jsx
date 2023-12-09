import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import Button from "../../components/Button/Button";
import Grafico from "./Graficos";
import ReactPaginate from "react-paginate";
import { getAllEnvios } from "../../utils/getAllEnvios";

const Content = ({
  selectedButton,
  payments,
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

  console.log(envio)
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
    return data
      ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
      ?.map((item, index) => (
        <tr key={index}>
          {/* Renderizar las celdas según el tipo de dato (user, envío, admin, etc.) */}
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
          {/* ... otras celdas ... */}
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
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.ID}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <label className={styles.container_check}>
                      {user?.enabled ? (
                        <input type="checkbox" checked={true} />
                      ) : (
                        <input type="checkbox" checked={false} />
                      )}

                      <div className={styles.checkmark}></div>
                    </label>
                  </td>
                      <div className={styles.checkmark}></div>
                
                  {user.enabled ? (
                    <td>
                      <Button
                        text={"Bloquear usuario"}
                        onClick={() => handleBlockUser(user)}
                      />
                    </td>
                  ) : (
                    <td>
                      <Button
                        text={"Desbloquear usuario"}
                        onClick={() => handleBlockUser(user)}
                      />
                    </td>
                  )}
                </tr>
              ))}
              {renderTableRows(users, currentPage, itemsPerPage)}
            </tbody>
          </table>
        </div>
        <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            pageCount={Math.ceil(users.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => handlePageClick(selected, selectedButton)}
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
        <h2>Administrador de  Envios</h2>
        <div className={styles.envios_table_container}>
          <table className={styles.envios_table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Categoría</th>
                <th>Total</th>
                <th>Status</th>
                <th>Estado</th>
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
            onPageChange={(selected) => handlePageClick(selected, selectedButton)}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </>
      )}
      </div>
      {selectedButton === "Pagos" && (
        <div className={styles.envios_table_container}>
          <table className={styles.envios_table}>
            <thead>
              <tr>
                <th>ID de Pago</th>
                <th>Nombre de usuario</th>
                <th>Fecha de Pago</th>
                <th>Monto</th>
                <th>Método de Pago</th>
                <th>Estado de Pago</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>
                    {payment.User.firstName} {payment.User.lastName}
                  </td>
                  <td>{payment.payment_date}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.payment_method}</td>
                  <td>{payment.payment_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div>
        
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
              {renderTableRows(admin, currentPage, itemsPerPage)}
            </tbody>
          </table>
        </div>
         {/* Componente de paginación */}
         <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            pageCount={Math.ceil(admin.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => handlePageClick(selected, selectedButton)}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
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
  handleToggleEnvio: PropTypes.func,
  handleToggleUser: PropTypes.func,
};

export default Content