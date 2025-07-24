import React, { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios'

const Service =() => {

const [service,setService]= useState({
    isActive: true
})


const handleSubmit = async(event)=>{
    event.preventDefault()
    try{
    await axios.post('http://localhost:8000/api/service/all',service)
    }catch(e){
        console.log(e.message);
    }
}
return (
<>
<div className="ms-5">
<table class="table">
  <thead class="table-light">
    <th>Service</th>
    <th>Prix</th>
  </thead>
  <tbody>
    <tr>
        <td>Balade sur Paris 1 Heure</td>
        <td>99 Euros</td>
    </tr>
  </tbody>
</table>
</div>
</>
);
};
export default Service