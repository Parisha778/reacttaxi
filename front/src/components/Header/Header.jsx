import React from 'react'
import { NavLink } from 'react-router';

//IMAGE
import Logoimage from '../../assets/images/logo2.png';

//CSS
import styles from './Header.module.css';

const Header = () => {
    return(
     <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logoimage}src={Logoimage} alt="" />
          </div>
          <div className={styles.navigation}>Nous Contacter</div>
          <div className={styles.navigation}>Devenir Notre Partenaire</div>
        </div>
    </header>            
    );
};
 
export default Header;
