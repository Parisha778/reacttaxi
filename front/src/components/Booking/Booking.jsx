import React, { useState } from 'react';
import Calendrier from './Calendrier';

//CSS
import styles from './Booking.module.css';


function Booking() {
  const [service, setService] = useState("");
  const [adresse, setAdresse] = useState("");

  const handleSubmit = async (e) => {
        e.preventDefault();
        const data ={ service, adresse};
        const response = await fetch ('/api/service', { 
          method: 'POST',
          headers: {'Contentent-Type': 'application/json'},
          body: JSON.stringify(data),
        });

        if (response.ok){
          console.log("Service ajouté !");
        }else{
          console.error("Erreur lors de l'ajout du service");
        }
  };
  return (
    <> 
    <div className={styles.container}>
      <h3 className={styles.title}>Services</h3>
      <form onSubmit={handleSubmit}>

      </form>
    <select value={service} onChange={(e) => setService(e.target.value)}
     className={styles.multi} class="form-select" multiple aria-label="Multiple select example">
    <option value="" selected>Quel est votre choice</option>
    <option value="1">Balade sur Paris 1 Heure / 99 € </option>
    <option value="2">Balade sur Paris 1/30 Heure / 149 €</option>
    <option value="3">Balade sur Paris 2 Heure / 189 €</option>
    <option value="4">Déposer dans Paris / 49 €</option>
    <option value="5">Dépose à la gare / 59 €</option>
    <option value="6">Dépose à l'aéroport Charles de Gaulles / 129 €</option>
    <option value="7">Dépose à l'aéroport Orly / 99 €</option>
  </select>
  
  <div className="input-group mt-5 mb-5 border border-secondary">
  <span className="input-group-text">Vos Adresse</span>
  <textarea className="form-control" aria-label="With textarea" 
  value={adresse} onChange={(e) => setAdresse (e.target.value)}>
  </textarea>
  </div>

  <div class="d-flex">
    <button class="btn btn-secondary mt-5" type="submit">Réserver</button>
  </div>

  <div className={styles.date}>
  <Calendrier/> 
  </div>
</div>
</>
  );
}

export default Booking;