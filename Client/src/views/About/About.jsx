import styles from '../About/About.module.css'
import { FaGithub } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import picture from "../../assets/about.jpeg";

const About = () => {

return (
  <div className={styles.about}>
    <div className="container-fluid my-3">
      <div className='row'>
        <div className='col-md-6'>
          <Image src={picture} fluid style={{ width: '600px',
          height: '548px', 
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}/>
        </div>
      <div className={`col-md-6 ${styles.cont}`}  style={{
        border: "1px solid #dee2e6",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding:"12px"
      }} >
        <div className={styles.nosotros}>
          <h2>¡Movemos tu mundo!</h2>
          <br />
          <h4><b>Nuestra Misión:</b><br />
          Nuestro compromiso es garantizar la seguridad e integridad de los valores de nuestros clientes, brindar una excelente asesoría y superar continuamente sus expectativas. Cada miembro de la gran familia de BFS Express trabaja con honestidad y está calificado para brindar a nuestros clientes la mejor atención..</h4>
          <br />
          <h4><b>Nuestra Visión</b></h4>          
          <h4>Continuar siendo la empresa número uno del mercado en el transporte de compras por internet, y encomiendas,manteniendo a nuestros trabajadores comprometidos y capacitados con tecnología de punta para garantizar un servicio de calidad y con presencia en nuevos mercados.</h4>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <br></br>
      
        <h2><b>Nuestro equipo de desarrolladores de BSF</b></h2>
      <div className={` ${styles.devs}`}>
        <div className={ styles.dev}>
          <a href="https://github.com/Abel-Leiva" target="blank" className={styles.text}>
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/110953504?v=4" alt="" />
            <h2 className={styles.title}>Abel Leiva</h2>
            <h4 className={styles.text}>La tecnología está revolucionando la educación. <br />
            (Barack Obama)           
            <br />
            <br />
              <div className={styles.git}><FaGithub />Abel-Leiva</div>
              </h4> 
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/DFHenaoTigreros" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/126849575?v=4" alt="" />
            <h2 className={styles.title}>David Henao</h2>
            <h4 className={styles.text}>La educación es el arma para cambiar el mundo.<br />
            (Nelson Mandela)
            <br />
            <br />
              <div className={styles.git}><FaGithub />DFHenaoTigreros · he/him</div>
              </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/FSamayoa" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/137366812?v=4" alt="" />
            <h2 className={styles.title}>Fernando Samayoa</h2>
            <h4 className={styles.text}>La tecnología no es la respuesta, es la herramienta. <br />
            (William Kamkwamba)
            <br />
            <br />
              <div className={styles.git}><FaGithub />FSamayoa</div>
              </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/GonzalMartin13" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/104043132?v=4" alt="" />
            <h2 className={styles.title}>Gonzalo Martin</h2>
            <h4 className={styles.text}>Hello World.<br />
            ( Bill Gates.)  
            <br />
            <br />
            <div className={styles.git}><FaGithub />GonzalMartin13</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/Lumari-suma" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/67979701?v=4" alt="" />
            <h2 className={styles.title}>Lumari Suma</h2>
            <h4 className={styles.text}>La tecnología es la (ala) derecha de la educación.<br />
           (Randy Pausch)
           <br />
            <br />
              <div className={styles.git}><FaGithub />Lumari-suma</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/CEGGonzalez" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/136920851?u=122fa7a82be9268997ae95ac89f34bf2b14a0f5c&v=4" alt="" />
            <h2 className={styles.title}>Carlos González</h2>
            <h4 className={styles.text}>La educación y la tecnología se unen para el cambio.<br />
            (Salman Khan)
            <br />
            <br />
          <div className={styles.git}><FaGithub />CEGGonzalez</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/MarcelCausone" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/135276337?v=4" alt="" />
            <h2 className={styles.title}>Marcel Causone</h2>
            <h4 className={styles.text}>La educación es el arte de hacer visibles las cosas invisibles.<br />
            (Jean-François Lyotard)
            <br />
            <br />
          <div className={styles.git}><FaGithub />MarcelCausone</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a className={styles.text} href="https://github.com/xavierCS78" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/107232749?v=4" alt="" />
            <h2 className={styles.title}>Wilson Caro</h2>
            <h4 className={styles.text}>La educación es el único camino para escapar de la esclavitud mental.<br />
            (Frederick Douglass)
            <br />
            <br />
          <div className={styles.git}><FaGithub />xavierCS78</div>
            </h4>
          </a>
        </div>
      </div> 
      <hr />
      <hr />
      <h1>EL DREAMTEAM DE BFS</h1>
      <img src="../../../src/assets/BFSTeam.jpg" alt="DreamTeam BSF" />
    </div>
  );
}

export default About;