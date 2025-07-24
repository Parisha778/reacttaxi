import React from 'react';
import Booking from '../../components/Booking/Booking';
//IMAGE

import Taxi from '../../assets/images/mototaxi.jpeg';

//CSS

import styles from './Home.module.css';

const Home = () => {
  return (
    <>
    <div className={styles.container}>
    <h2 className={styles.title}> Take an Easy Ride and Fast </h2>
    <section className={styles.home} >   
      <div className={styles.side}>    
        <img className={styles.img1}src={Taxi} alt="" />  
      </div>
      <div className={styles.contenu}>                             
        <p className={styles.lead}>ElleLorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sapiente illum ad atque voluptatibus. Nobis ab, perspiciatis saepe at earum culpa maiores repudiandae blanditiis rerum ipsa quo, illum ad sit unde? Neque, enim sapiente? Necessitatibus aspernatur eos corrupti non deleniti facere illo officia hic animi praesentium optio..
         Nobis ab, perspiciatis saepe at earum culpa maiores repudiandae blanditiis rerum ipsa quo, illum ad sit unde? Neque, enim sapiente? Necessitatibus aspernatur eos corrupti non deleniti facere illo officia hic animi praesentium optio.
        </p>
       </div>
    </section>
    <section className='row'>
      <div className='col-sm-8'>
        <Booking/>
      </div>
    </section>
    </div>
    </> 
  );
};

export default Home;