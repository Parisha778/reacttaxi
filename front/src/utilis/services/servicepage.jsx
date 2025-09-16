import React, { useState, useEffect} from 'react';
import { Link } from 'react-router';
import axios from 'axios'
import { service } from '../../../../back/controllers/service.controller';

const Servicepage =() => {
  const [services,setServices]= useState([]);
  const [error, setError] = useState(null);

   useEffect (() => {
  //Fonction asynchrone fetchArticle qui récupère les services depuis l'API
  const fetchService = async () =>{
    try {
      //récupérer les services à partir de l'API à l'adress http://localhost:8000/api/service/all
    const response = await fetch(`http://localhost:8000/api/service/all`);
     if(!response.ok){
      throw new Error('Erreur lors de la récupération des services');
     }
     // si la requête est réussie, les données de l'API sont converti en JSON
    const data = await response.json();
    // services récupérés sont stock dans l'état "setService" ,déclenche un nouveau rendu avec les services récupéreés
    setServices(data);
  }catch (error) {
    setError(error.message);
    }
  };
 
 fetchService();
},[]); 
return (
<>
<>Nos Services</>
  <div className="ms-5">
  <table class="table">
   <thead class="table-light">
    <th>Service</th>
    <th>Prix</th>
   </thead>
   <tbody>
    {service.map(service =>(
      <tr key={service.id}>
        <td>{service.name}</td>
        <td>{service.price}</td>
      </tr>
    ))}
   </tbody>
  </table>
  </div>
</>);


export default Servicepage;