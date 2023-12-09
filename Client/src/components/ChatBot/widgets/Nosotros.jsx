import React, { useState } from 'react';
import styles from "../widgets/faq.module.css"

const Nosotros = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };
  
    return (
      <div className={styles.seccionNomb}>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/Abel-Leiva')}>Abel</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/CEGGonzalez')}>Carlos</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/DFHenaoTigreros')}>David</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/FSamayoa')}>Fernando</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/GonzalMartin13')}>Gonzalo</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/Lumari-suma')}>Luz</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/MarcelCausone')}>Marcel</button>
        <br></br>
        </div>
        <div>
        <button className={styles.nombres} onClick={() => openLinkInNewTab('https://github.com/xavierCS78')}>Wilson</button>
        <br></br>
        </div>
      </div>
    );
  };
  
  export default Nosotros;