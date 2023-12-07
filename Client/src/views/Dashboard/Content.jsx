import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import Grafico from "./Graficos";
import { useState } from 'react';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Content = ({
  selectedButton,
  envio,
  users,
  admin,
	handleToggleUser,
	handleToggleEnvio,
  }) => {

	const [adminList, setAdminList] = useState(admin);

  const toggleActivation = (index) => {
    const updatedAdminList = [...adminList];
    updatedAdminList[index].isActive = !updatedAdminList[index].isActive;
    setAdminList(updatedAdminList);
  };
	return (
		<div className={styles.containerContext}>
			<div>
				<h2>Registros de Administración del sistema</h2>
				<br />
				{selectedButton === "adminGraphs" && <Grafico />}
			</div>
	
			{selectedButton === "Usuarios" && (
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
                      <input
                        type="checkbox"
                        checked={user.enabled}
                        onChange={() => handleToggleUser(user)}
												disabled
                      />
                      <div className={styles.checkmark}></div>
                    </label>
                  </td>
                  <td>
                  <button onClick={() => handleToggleUser(user)} className="btn btn-warning">
                   {user.enabled ? "Bloquear" : "Desbloquear"}
										<FontAwesomeIcon icon={faEdit} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
	
			{selectedButton === "Envios" && (
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
							{envio?.map((envio, index) => (
								<tr key={index}>
									<td>{envio.id}</td>
									<td>{envio.servicios}</td>
									<td>${envio.total}</td>
									<td>{envio.status}</td>
									<td>
									<label className={styles.container_check}>
                      <input
                        type="checkbox"
                        checked={envio.enabled}
                        onChange={() => handleToggleEnvio(envio)}
												disabled
                      />
                      <div className={styles.checkmark}></div>
                    </label>
                  </td>
                  <td>
									<button onClick={() => handleToggleEnvio(envio)} className="btn btn-warning">
									<FontAwesomeIcon icon={faEdit} />
                   {envio.enabled ? "Bloquear" : "Desbloquear"}
                   </button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
			{selectedButton === "Admin" && (
				<div className={styles.envios_table_container}>
					<table className={styles.envios_table}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre Admin</th>
								<th>Email</th>
								<th>Estado</th>
							</tr>
						</thead>
						<tbody>
							{admin?.map((admin, index) => (
								<tr key={index}>
									<td>{admin.ID}</td>
									<td>{admin.nameAdmin}</td>
									<td>{admin.emailAdmin}</td>
									<td>
										<button onClick={() => toggleActivation(index)} className="btn btn-warning">
											<FontAwesomeIcon icon={faEdit} />
											{admin.isActive ? "Desactivar" : "Activar"}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
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

export default Content;
