import React from 'react';
import Reservation from './Reservation';

//CSS
import styles from './Booking.module.css';


function Booking() {
  return (
    <> 
    <div className={styles.container}>
      <h3 className={styles.title}>Services</h3>
    <select className={styles.multi} class="form-select" multiple aria-label="Multiple select example">
    <option selected>Quel est votre choice</option>
    <option value="1">Balade sur Paris 1 Heure / 99 € </option>
    <option value="2">Balade sur Paris 1/30 Heure / 149 €</option>
    <option value="3">Balade sur Paris 2 Heure / 189 €</option>
    <option value="4">Déposer dans Paris / 49 €</option>
    <option value="5">Dépose à la gare / 59 €</option>
    <option value="6">Dépose à l'aéroport Charles de Gaulles / 129 €</option>
    <option value="7">Dépose à l'aéroport Orly / 99 €</option>
  </select>
  
  <div class="input-group mt-5 mb-5 border border-secondary">
  <span class="input-group-text">Vos Adresse</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
  <div className={styles.date}>
  <Reservation/> 
  </div>
  <div class="d-flex">
  <button class="btn btn-secondary mt-5" type="button">Réserver</button>
</div>
    </div>
    </>
  )
}

export default Booking