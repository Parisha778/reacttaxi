import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router';

//IMAGE
import Insta from '../../assets/images/instagram.png';
import Facebook from '../../assets/images/iconfacebook.png';
import Youtube from '../../assets/images/youtube.png';

//CSS
import styles from './Footer.module.css';

const Footer = () => {
  return ( 
   <footer>
        <div className={styles.footer}>
          <p className={styles.text}>Nos Résaux Sociaux</p>
          <div className={styles.reseau}>          
            <img src={Insta} alt="" className={styles.icon}/> 
            <img src={Facebook} alt=""className={styles.icon}/>
            <img src={Youtube} alt="" className={styles.icon}/>
          </div>   
          <hr className="horizontal-line"/>
          <div className="footer-text">
          <Link className="link">Copyright 2025</Link>         
          </div>
        </div> 
    </footer>    
  );
};

export default Footer;
