import React from 'react'
import {BiHome, BiPen,BiMinusCircle,BiPlusCircle} from 'react-icons/bi'
import Sidebar from './Sidebar';
import { Link } from 'react-router';
//CSS
import styles from './Course.module.css';
const Membre = () => {
  return (
  <>

   <div>
        <h2 className="mt-5 mb-5">Membre</h2>
        <table className="table">
   <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom</th>
      <th scope="col">Date d'enregistration</th>
      <th scope="col">Adresse mail</th>
      <th scope="col">Action</th>
    </tr>
   </thead>
   <tbody className="table-group-divider">
    <tr>
      <td>101</td>
      <td>Azora</td>
      <td>TIDI</td>
      <td>12/02/2023</td>
      <td>azora@mail.com</td>   
      <td>
        <div className={styles.action}>
        <Link to="/membre/modifier" className={styles.item}>
            <BiPen className={styles.icon}/>
        </Link>
        <Link to="/membre/suprimer" className={styles.item}>
            <BiMinusCircle className={styles.icon}/>
        </Link>      
        </div>
      </td>
    </tr>
    </tbody>
  </table> 
  <div className={styles.ajouter}>
     <div className={styles.action}></div>
      <Link to="/membre/ajouter" className={styles.item}>
              <BiPlusCircle className={styles.icon}/>
      </Link>
      <h6>Ajouter un membre</h6> 
      </div>
  </div>       
 </>
  )
}

export default Membre