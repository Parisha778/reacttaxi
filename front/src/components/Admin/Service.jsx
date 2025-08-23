import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router';
import {BiHome, BiPen,BiMinusCircle} from 'react-icons/bi';
//CSS
import styles from './Reservation.module.css';

function Service() {

    const [service, setService] = useState('');
    const [allService, setAllService] = useState('');
    const [prix, setPrix] = useState('');
    const [confirmation, setConfirmation]= useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
      const fetchService= async() =>{
        try {
          const {data}= await axios.get('http://localhost:8000/api/service/all');
          setAllService(data);
        } catch (error) {
          console.error('Erreur lors de la récupération du service:',error.message);
        }
      };
      fetchService();
    },[]);

    const handleSubmit = async (event) =>{
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/service/add',{
          service,
          prix,
        });
        console.log(response.data);
        setConfirmation(true);
        setService('');
        setPrix('');
      } catch (error) {
        console.error('Erreur lors de l ajout du service:', error.message);
      }

      useEffect(() => {
      const fetchService = async () =>{
        try {
          const response = await axios.get(`http://localhost:8000/api/service/:id`);
          setService(response.data);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchService();
    },[id]);

    const handleUpdate = async (id) => {
      try {
        const response = await axios.put(`http://localhost://8000/api/service/update/${id}`, {service,prix});
        if (response.status === 200) {
          fetchServices();
        }
      } catch (error) {
        console.error('Error lors de la mise à jour:', error);
      }
    };
     
    const deleteService = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:8000/api/service/delete/${id}`);
        if (response.status=== 200) {
          fetchService();
        }
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
      }
    };

  return (
  <>
  <div>
      <h2 className="mt-5 mb-5">Service Disponible</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputService1" id='' className="form-label">Service</label>
        <input type="text" name="service" className="form-control"
        value={service} onChange={(e) => setService(e.target.value)} required/>     
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPrix" className="form-label">Prix(€)</label>
        <input type="number" name="prix" className="form-control"
        value={prix} onChange={(e)=> setPrix(e.target.value)} required/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input"/>
        <label className="form-check-label" id='' name='' htmlFor="exampleCheck1">Êtes-vous sûr</label>
      </div>
      <button className="btn btn-primary mt-1 mb-4 ms-5">Ajouter</button>
      {confirmation &&<p>Service ajouté avec succès !</p>}
      </form>

    <table className="table mt-4">
   <thead >
    <tr>
      <th scope="col">Services</th>
      <th scope="col">Prix (€)</th>
      <th scope="col">Action</th>
    </tr>
   </thead>
   <tbody>
     {allService&&allService.map((item)=>(
      <tr key={item._id}>
        <td>{item.service}</td>
        <td>{item.prix}</td>
        <td>
        <button onClick={() =>
          handleUpdate(item._id)}>
          <Link to={'/service/update/${service._id}'} className={styles.item}>
               <BiPen className={styles.icon}/> 
          </Link>
        </button>
        <button onClick={() =>
          deleteService(item._id)}>
          <Link to={'/service/delete/${service._id}'} className={styles.item}>
               <BiMinusCircle className={styles.icon}/>
          </Link>
        </button>
        </td>
      </tr> 
    ))}    
  </tbody>
  </table>
  </div> 
</> 
  )
}

export default Service