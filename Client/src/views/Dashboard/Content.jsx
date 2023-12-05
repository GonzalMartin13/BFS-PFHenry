import PropTypes from 'prop-types';
import styles from "./Dashboard.module.css";
import Button from "../../Components/Button/Button";
import Grafico from "./Graficos";

const Content = ({
  selectedButton,
  payments,
  envio,
  users,
  admin,
  handleBlockUser,
  handleBlockEnvio,
}) => {

	return (
		
		<div className={styles.containerContext}>
			<h2>Registros de {selectedButton || "Administracion"} del sistema</h2>
			{selectedButton === "adminGraphs" && (<Grafico />)}
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
											{user?.enabled ? (
												<input type="checkbox" checked={true} />
											) : (
												<input type="checkbox" checked={false} />
											)}

											<div className={styles.checkmark}></div>
										</label>
									</td>

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
											{envio.enabled ? (
												<input type="checkbox" checked={true} />
											) : (
												<input type="checkbox" checked={false} />
											)}

											<div className={styles.checkmark}></div>
										</label>
									</td>
									{envio.enabled ? (
										<td>
											<Button
												text={"Bloquear envio"}
												onClick={() => handleBlockEnvio(envio)}
											/>
										</td>
									) : (
										<td>
											<Button
												text={"Desbloquear envio"}
												onClick={() => handleBlockEnvio(envio)}
											/>
										</td>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
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
					{selectedButton === "Admin" && (
				<div className={styles.envios_table_container}>
					<table className={styles.envios_table}>
						<thead>
							<tr>
								<th>Nombre de usuario</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{admin?.map((admin, index) => (
								<tr key={index}>
									<td>{admin.nameAdmin}</td>
									<td>{admin.emailAdmin}</td>
								</tr>
							))}
						</tbody>
					</table>x
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
  handleBlockUser: PropTypes.func,
  handleBlockEnvio: PropTypes.func,
};

export default Content;
