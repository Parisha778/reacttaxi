import React from 'react';
import { Link } from 'react-router';
import Logoimage from '../../assets/images/logo1.png';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
        <ul>
            <img className={styles.logoimage} src={Logoimage} alt="" />       
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/inscription">Inscriez-vous</Link>
            </li>
            <li>
                <Link to="/contact">Nous Contacter</Link>
            </li>
            <li>
                <Link to="/dashbord">Dashboard</Link>
            </li>
            <li>
                <Link to="/connexion">Se Connecter</Link>
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
        </ul>
    </nav>
  )
}

export default Navbar