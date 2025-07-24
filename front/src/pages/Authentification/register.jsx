import React, { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios'

const Register =() => {

const [user,setUser]= useState({
    isActive: true
})

const handleChange =(event)=>{
    const { name,value} = event.target
    setUser(user => ({...user,[name]: value}))
}

const handleSubmit = async(event)=>{
    event.preventDefault()
    try{
    await axios.post('http://localhost:8000/api/user/inscription',user)
    }catch(e){
        console.log(e.message);
    }
}
return (
<>
<div className="ms-5">
<form onSubmit={handleSubmit}>
    
      <div className="mb-3">
      <label htmlFor="exampleInputName1" className="form-label">Nom</label>
      <input type="text"
      name="username"
      className="form-control"  aria-describedby="email"
      onChange={handleChange}/>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Addresse Mail</label>
      <input type="email"
      name="email"
        className="form-control" aria-describedby="email"
      onChange={handleChange}/>
      </div>
    
     <div className='mb-3'>
      <label htmlFor="exampleInputPassword1" className="form-label">Mode de passe</label>
      <input type="password" className="form-control" 
      name="password"
      onChange={handleChange}/>
      </div>
     <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" />
     <label className="form-check-label" htmlFor="exampleCheck1">Accepter la condition générale</label>
    </div>

    <button type="submit" className="btn btn-primary">Inscrire</button>
</form>
</div>
</>
);
};
export default Register