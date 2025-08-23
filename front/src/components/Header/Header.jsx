import React from 'react'
import { NavLink } from 'react-router';
import { Link } from 'react-router'

//IMAGE
import Logoimage from '../../assets/images/logo1.png';

//CSS
import styles from './Header.module.css';

const Header = () => {
    return(
     <header className={styles.header}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className={styles.logo}>
                <img className={styles.logoimage}src={Logoimage} alt="" />
              </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className={styles.navigation}>
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link to="/" className={styles.item}>Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/inscription" className={styles.item}>Inscrivez-Vous</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={styles.item}>Nous Contacter</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashbord" className={styles.item}> Dashboard</Link>
        </li>



        <div className="dropdown text-end">
        <li className="nav-item">
           <Link to="/connexion" className={styles.item}>Se Connecter</Link>
        </li>

        <ul className="dropdown-menu text-small text-end" aria-labelledby="dropdownUser1">
            <li>
            <div className="text-center">
              <h4>Louis Musole</h4>
            </div>
            </li>
            <li>
              <Link to="/connexion" className="dropdown-item">Déconnexion</Link>
            </li>
        </ul>
        </div>      
      </ul>
      </div>
    </div>
  </div>
</nav>
        
</header>     

    );
};
 
export default Header;
