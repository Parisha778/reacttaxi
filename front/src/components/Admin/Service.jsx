import React from 'react'
import { Link } from 'react-router'
import {BiHome, BiPen,BiMinusCircle,BiPlusCircle} from 'react-icons/bi'
//CSS
import styles from './Course.module.css';

function Service() {
  return (
  <>
  <div>
      <h2 className="mt-5 mb-5">Service Disponible</h2>
      <form>
      <div class="mb-3">
        <label htmlFor="exampleInputService1" class="form-label">Service</label>
        <input type="text" class="form-control" aria-describedby="emailHelp"/>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputPrix1" class="form-label">Prix</label>
        <input type="text" class="form-control"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary mt-1 mb-4 ms-5">Ajouter</button>
      </form>
        <table className="table mt-4">
   <thead >
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Prix</th>

      <th scope="col">Action</th>
    </tr>
   </thead>
   <tbody className="table-group-divider">
    <tr>
      <td>Balade sur Paris 1 Heure</td>
      <td>99 Euros</td>
       <div className={styles.action}>
        <Link to="/course/modifier" className={styles.item}>
            <BiPen className={styles.icon}/>
        </Link>
        <Link to="/course/suprimer" className={styles.item}>
            <BiMinusCircle className={styles.icon}/>
        </Link>
      </div>
    </tr>
    <tr>
      <td>Balade sur Paris 1/30 Heure</td>
      <td>149 Euros</td>
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
    <tr>
      <td>Balade sur Paris 2 Heure</td>
      <td>189 Euros</td>
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
    <tr>
      <td>Déposer dans Paris</td>
      <td>49 Euros</td>
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
    <tr>
      <td>Dépose à la gare</td>
      <td>79 Euros</td>
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
    <tr>
      <td>Dépose à l'aéroport Charles de Gaulles</td>
      <td>149 Euros</td>
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
    <tr>
      <td>Dépose à l'aéroport Orly</td>
      <td>129 Euros</td>
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
  <div className={styles.ajouter}>
   <div className={styles.action}></div>
    <Link to="/course/ajouter" className={styles.item}>
            <BiPlusCircle className={styles.icon}/>
    </Link>
    <h6 className="mb-4">Ajouter un service</h6> 
    </div>
  </div> 
</> 
  )
}

export default Service