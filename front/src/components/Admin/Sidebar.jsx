import React from 'react'
import { Link } from 'react-router'
import {BiHome, BiBookAlt,BiMale,BiMap,BiLeftArrow} from 'react-icons/bi'

import Logoimage from '../../assets/images/logo1.png';
import styles from './Sidebar.module.css';

const Sidebar=()=> {
  return (
    <div className={styles.menu}>
        <div className={styles.logo}>
            <img className={styles.logoimage}src={Logoimage} alt=""/>
        </div>
        <div className={styles.menuList}>
            <Link to="/dashbord" className={styles.item}>
            <BiHome className={styles.icon}/>    
            Dashboard
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/dashbord/service" className={styles.item}>
            <BiBookAlt className={styles.icon}/>
            Service disponible
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/dashbord/membre" className={styles.item}>
            <BiMale className={styles.icon}/>
            Membre
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/dashbord/course" className={styles.item}>
            <BiMap className={styles.icon}/>
            Course
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/" className={styles.item}>
            <BiLeftArrow className={styles.icon}/>
            Retour au Pagehome
            </Link>
        </div>
    </div>
  )
}

export default Sidebar