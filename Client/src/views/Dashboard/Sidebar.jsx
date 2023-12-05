import style from "./Dashboard.module.css";
import Button from "../../Components/Button/Button";

const Sidebar = ({ onButtonClick }) => {
	return (
		<div className={style.menuContext}>
			<h1 className={style.panelAdminTitle}>
				Panel de Administracion
			</h1>
			<ul className={style.menu}>
				<Button text={"Usuarios"} onClick={() => onButtonClick("Usuarios")}>
					Users
				</Button>
				<Button text={"Envios"} onClick={() => onButtonClick("Envios")}>
					envio
				</Button>
				<Button text={"Pagos"} onClick={() => onButtonClick("Pagos")}>
					payments
				</Button>
				<Button text={"Admin"} onClick={() => onButtonClick("Admin")}>
					admin
				</Button>
			</ul>
		</div>
	);
};
export default Sidebar;