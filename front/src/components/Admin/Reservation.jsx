import React from 'react';
import { Link } from 'react-router';
import {BiHome, BiPen,BiMinusCircle,BiPlusCircle} from 'react-icons/bi';


//CSS
import styles from './Reservation.module.css';
function Reservation() {
  return (
    <>

    <div>
        <h2 className="mt-5 mb-5">Réservation</h2>
        <form>
      <div class="mb-3 d-flex">
        <div class="d-flex flex-column">
        <label htmlFor="exampleInputPrenom1" class="form-label">Prénom</label>
        <input type="text " class="form-control" style={{width:'250px'}}/>
        </div>
        <div class="d-flex flex-column ps-5">
        <label htmlFor="exampleInputNom1" class="form-label">Nom</label>
        <input type="text" class="form-control" style={{width:'250px'}}/>
        </div>
      </div>
      <div class="mb-3 ">
        <label htmlFor="exampleInputNom1" class="form-label">Détail de réservation</label>
        <input type="text" className="form-control" style={{width:'550px'}}/>
      </div>
      <div class="mb-3 d-flex">
        <div class="d-flex flex-column">
        <label htmlFor="exampleInputNom1" class="form-label">Date et l'Heure</label>
        <input type="text" class="form-control" style={{width:'250px'}}/>    
        </div>
        <div class="d-flex flex-column ps-5">
        <label htmlFor="exampleInputNom1" class="form-label">Montant effectué</label>
        <input type="text" class="form-control" style={{width:'250px'}}/>
        </div>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputNom1" class="form-label">Adresse mail</label>
        <input type="text" class="form-control" style={{width:'550px'}}/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input"/>
        <label class="form-check-label" for="exampleCheck1">Êtes-vous sûr</label>
      </div>
      <button type="submit" class="btn btn-primary mt-1 mb-4 ms-5">Ajouter</button>
      </form>
        <table className="table">
   <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom</th>
      <th scope="col">Détail de réservation</th>
      <th scope="col">Date et Heure</th>
      <th scope="col">Montant effectué</th>
      <th scope="col">Adresse mail</th>
      <th scope="col">Action</th>
    </tr>
   </thead>
   <tbody className="table-group-divider">
    <tr>
      <td>101</td>
      <td>Azora</td>
      <td>TIDI</td>
      <td>Balade dans Paris 1 H</td>
      <td>12/02/2023 12H00</td>
      <td>89 euros</td>
      <td>azora@mail.com</td>
      <td>
        <div className={styles.action}>
        <Link to="/course/modifier" className={styles.item}>
            <BiPen className={styles.icon}/>
        </Link>
        <Link to="/course/suprimer" className={styles.item}>
            <BiMinusCircle className={styles.icon}/>
        </Link>
        </div>
      </td>
    </tr>
    </tbody>
  </table> 
  </div>     
 </>
  )
}

export default Reservation