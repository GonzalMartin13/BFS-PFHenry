import styles from '../About/About.module.css'
import { FaGithub } from "react-icons/fa";
import Image from 'react-bootstrap/Image';

const About = () => {

return (
  <div>
  <Image src="https://www.eltiempo.com/files/image_640_428/uploads/2018/04/24/5adf56453d3ce.jpeg" fluid style={{ width: '100%', height: '800px' }}/>
    <div className={styles.about}>
      <br />
      <div className={styles.cont}>
        <div className={styles.nosotros}>
        <h1>En BFS</h1>
          <h2>¡Movemos tu mundo!</h2>
          <br />
          <h4><b>Nuestra Misión:</b><br />
          Nuestro compromiso es garantizar la seguridad e integridad de los valores de nuestros clientes, brindar una excelente asesoría y superar continuamente sus expectativas. Cada miembro de la gran familia Liberty Express trabaja con honestidad y está calificado para brindar a nuestros clientes la mejor atención..</h4>
          <br />
          <h4><b>Nuestra Visión</b></h4>
          
          <h4>Continuar siendo la empresa número uno del mercado en el transporte de compras por internet, y encomiendas,manteniendo a nuestros trabajadores comprometidos y capacitados con tecnología de punta para garantizar un servicio de calidad y con presencia en nuevos mercados.</h4>
        </div>
      </div>
      
      <br />
      <div className={styles.devs}>
        <div className={styles.dev}>
          <a href="https://github.com/Abel-Leiva" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/110953504?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Abel Leiva</h2>
            <h4 style={{color:"black", width:"70%"}}>La tecnología está revolucionando la educación. <br /><br />
            (Barack Obama)           
              <div className={styles.git}><FaGithub />Abel-Leiva</div>
              </h4> 
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/DFHenaoTigreros" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/126849575?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>David Henao</h2>
            <h4 style={{color:"black", width:"70%"}}>La educación es el arma para cambiar el mundo.<br /> <br />
            (Nelson Mandela)
              <div className={styles.git}><FaGithub />DFHenaoTigreros · he/him</div>
              </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/FSamayoa" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/137366812?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Fernando Samayoa</h2>
            <h4 style={{color:"black", width:"70%"}}>La tecnología no es la respuesta, es la herramienta. <br /><br />
            (William Kamkwamba)
              <div className={styles.git}><FaGithub />FSamayoa</div>
              </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/GonzalMartin13" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/104043132?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Gonzalo Martin</h2>
            <h4 style={{color:"black", width:"70%"}}>La tecnología puede amplificar el aprendizaje.<br /><br />
            ( Bill Gates.)
            <div className={styles.git}><FaGithub />GonzalMartin13</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/Lumari-suma" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/67979701?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Lumari Suma</h2>
            <h4 style={{color:"black", width:"70%"}}>La tecnología es la (ala) derecha de la educación.<br /><br />
           (Randy Pausch)
              <div className={styles.git}><FaGithub />Lumari-suma</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/CEGGonzalez" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/136920851?u=122fa7a82be9268997ae95ac89f34bf2b14a0f5c&v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Carlos González</h2>
            <h4 style={{color:"black", width:"70%"}}>La educación y la tecnología se unen para el cambio.<br /><br />
            (Salman Khan)
          <div className={styles.git}><FaGithub />CEGGonzalez</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/MarcelCausone" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/135276337?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Marcel Causone</h2>
            <h4 style={{color:"black", width:"70%"}}>La educación es el arte de hacer visibles las cosas invisibles.<br /><br />
            (Jean-François Lyotard)
          <div className={styles.git}><FaGithub />MarcelCausone</div>
            </h4>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/xavierCS78" target="blank">
            <img className={styles.imgDev} src="https://avatars.githubusercontent.com/u/107232749?v=4" alt="" />
            <h2 style={{color:"blue", width:"70%"}}>Wilson</h2>
            <h4 style={{color:"black", width:"70%"}}>La educación es el único camino para escapar de la esclavitud mental.<br /><br />
            (Frederick Douglass)
          <div className={styles.git}><FaGithub />xavierCS78</div>
            </h4>
          </a>
        </div>
      </div>
      <hr />
      </div>
    </div>
  );
}

export default About;