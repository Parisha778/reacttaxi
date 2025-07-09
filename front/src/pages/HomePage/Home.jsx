import React from 'react';
import { useState,useEffect } from 'react';

//IMAGE

import Taxi from '../../assets/images/mototaxi.jpeg';

//CSS
import styles from './Home.module.css';

const Home = () => {

  

  return (
    <>
    <h1 className={styles.display}> Take an Easy Ride and Fast </h1>
    <section className={styles.home} >   
      <div className={styles.side}>    
        <img className={styles.img1}src={Taxi} alt="" />  
      </div>
      <div className={styles.contenu}>            
                        
        <p className={styles.lead}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sapiente illum ad atque voluptatibus. Nobis ab, perspiciatis saepe at earum culpa maiores repudiandae blanditiis rerum ipsa quo, illum ad sit unde? Neque, enim sapiente? Necessitatibus aspernatur eos corrupti non deleniti facere illo officia hic animi praesentium optio, ipsum, excepturi doloribus quaerat delectus repudiandae reprehenderit voluptates! Corrupti nisi quidem harum soluta..</p>
       </div>
    </section>
    <div>
      <button className={styles.button}> Réserver Votre Trajet</button>
    </div>
    </>
  );
};

export default Home;