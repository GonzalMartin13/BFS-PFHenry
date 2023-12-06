/* eslint-disable react/prop-types */
import style from "./Dashboard.module.css";
import Button from "../../Components/Button/Button";
import { BsClipboardDataFill, BsCursorFill, BsPeopleFill, BsFillGearFill} from 'react-icons/bs';

const Sidebar = ({ onButtonClick }) => {
	return (
		<div className={style.menuContext}>
			<h1 className={style.panelAdminTitle}>
			<Button text={<><BsClipboardDataFill /> Panel de Administración</>} onClick={() => onButtonClick("adminGraphs")} />			
			</h1>

			<ul className={style.menu}>
				<Button text={<><BsPeopleFill /> Usuarios</>} onClick={() => onButtonClick("Usuarios")} />

				<Button text={<><BsCursorFill /> Envíos</>} onClick={() => onButtonClick("Envios")} />

				{/* <Button text={<><BsCashCoin /> Pagos</>} onClick={() => onButtonClick("Pagos")} /> */}
					
				<Button text={<><BsFillGearFill /> Admin</>} onClick={() => onButtonClick("Admin")} />
					
			</ul>
		</div>
	);
};
export default Sidebar;