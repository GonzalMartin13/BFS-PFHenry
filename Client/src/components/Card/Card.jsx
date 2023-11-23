import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div>
      <div>
        <Link>
          <img
            src="https://thumbs.dreamstime.com/z/motorcycle-delivery-box-isolated-white-background-d-render-58251633.jpg?w=768"
            alt="Servicio Express"
            style={{ width: '300px', height: '200px'}}
          />
          <h3>Servicio Express</h3>
          <p>Hasta 15 kg | 40x40x40 cm</p>
        </Link>
      </div>
      <div>
        <Link>
          <img
            src="https://fotos.perfil.com/2018/05/01/5-nuevo-renault-kangoo-pasajeros-zen-2.jpg"
            alt="Servicio Regular"
            style={{ width: '300px', height: '200px'}}
          />
          <h3>Servicio Regular</h3>
          <p>Hasta 60 kg | 80x85x40 cm</p>
        </Link>
      </div>
      <div>
        <Link>
          <img
            src="https://img.freepik.com/fotos-premium/camioneta-carga-moderna-logistica-rapida-conveniente-dentro-ciudad_124507-54626.jpg?w=996"
            alt="Servicio por volumen"
            style={{ width: '300px', height: '200px'}}
          />
          <h3>Servicio por volumen</h3>
          <p>Hasta 800 kg | 330x145x140 cm</p>
        </Link>
      </div>
      <div>
        <Link>
          <img
            src="https://embalia.com/wp-content/uploads/2022/04/embalaje-de-productos-fragiles.jpg"
            alt="Servicio delicado"
            style={{ width: '300px', height: '200px'}}
          />
          <h3>Servicio delicado</h3>
          <p>Hasta 60 kg | 80x85x40 cm</p>
        </Link>
      </div>
    </div>
  );
};

export default Card1;
