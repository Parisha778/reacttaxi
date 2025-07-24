import React from 'react'
import { Link } from 'react-router'
import {BiPhone, BiLogoWhatsapp,BiLogoFacebook,BiMailSend} from 'react-icons/bi'

import Logoimage from '../../assets/images/logo1.png';
import styles from './Contact.module.css';

const Contact=()=> {
  return (
    <div className={styles.containeur}>
       <h4 className={styles.title}>Nos Contact</h4>
        <div className={styles.menuList}>
            <Link to="/" className={styles.item}>
            <BiPhone className={styles.icon}/>    
            Contactez nous par Téléphone au 09 99 78 89 00
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/" className={styles.item}>
            <BiLogoWhatsapp className={styles.icon}/>
            Contactez nous par Wassap
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/" className={styles.item}>
            <BiLogoFacebook className={styles.icon}/>
            Contactez nous par Facebook
            </Link>
        </div>
        <div className={styles.menuList}>
            <Link to="/" className={styles.item}>
            <BiMailSend className={styles.icon}/>
            Contactez nous par E- mail 
            </Link>
        </div>
    </div>
  )
}

export default Contact