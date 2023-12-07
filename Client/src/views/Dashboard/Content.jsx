import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content = ({
  selectedButton,
  users,
	envio,
  admin,
	handleToggleUser,
	handleToggleEnvio,
}) => {
  const data = [
    {
      name: "Jun",
      cr: 4000,
      cv: 2400,
      amt: 2400,
    },
    {
      name: "Jul",
      cr: 3000,
      cv: 1398,
      amt: 2210,
    },
    {
      name: "Ago",
      cr: 2000,
      cv: 5800,
      amt: 2290,
    },
    {
      name: "Sept",
      cr: 2780,
      cv: 3908,
      amt: 2000,
    },
    {
      name: "Oct",
      cr: 1890,
      cv: 4800,
      amt: 2181,
    },
    {
      name: "Nov",
      cr: 2390,
      cv: 3800,
      amt: 2500,
    },
    {
      name: "Dic",
      cr: 3490,
      cv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className={styles.containerContext}>
      <h2>Registros de {selectedButton || "Administracion"} del sistema</h2>
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
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.ID}>
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
                <th>Accion</th>
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
                <th>Nombre de usuario</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {admin?.map((admin, index) => (
                <tr key={index}>
									<td>{admin.ID}</td>
                  <td>{admin.nameAdmin}</td>
                  <td>{admin.emailAdmin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className={styles.charts}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cr" fill="#8884d8" />
            <Bar dataKey="cv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cr"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="cv " stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
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
	handleToggleEnvio: PropTypes.func,
};

export default Content;
