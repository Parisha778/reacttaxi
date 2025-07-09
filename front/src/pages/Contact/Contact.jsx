import React from 'react';
import { useState,useEffect } from 'react';

//IMAGE
import Iconphone from '../../assets/images/icontelephone.jpeg';
import Iconwatsapp from '../../assets/images/iconwasap.png';
import Iconmail from '../../assets/images/iconmail.png';
import Iconfacebook from '../../assets/images/iconfacebook.png';
import Iconline from '../../assets/images/iconline.png';

//CSS
import styles from './Contact.module.css';

const Contact = () => {
  return (
  <>
  <h2 className="title">Contactez-nous</h2>
  <div className="containeur"> 
    <div className="contact1">
      <img className={styles.image} src="../images/icontelephone.jpeg" alt=""/>
      <a  className="text" href="#">+33 2 45 65 83 83</a>
    </div>
    <div className="contact1">
      <img className={styles.image} src="../images/iconwasap.png" alt=""/>
      <a className="text" href="#">Contactez-nous par Wasapp</a>
    </div>
    <div className="contact1">
      <img className={styles.image} src="../images/iconmail.png" alt=""/>
      <a className="text" href="#">Contactez-nous par Email</a>
    </div>
    
    <div className="contact1">
      <img className={styles.image} src="../images/icon facebook.png" alt=""/>
      <a className="text" href="#">Contactez-nous par Facebook</a>
    </div>
    <div className="contact1">
      <img className={styles.image} src="../images/iconline.png" alt=""/>
      <a className="text" href="#">Contactez-nous par Line</a>
    </div>
  </div>
</>
  )
}

export default Contact