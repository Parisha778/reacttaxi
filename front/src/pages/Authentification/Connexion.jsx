import React,{ useContext, useState} from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../utilis/context/AuthContext.jsx'

  const Connexion = () => {

  const [user, setUser] =useState({});
  const {login} = useContext (AuthContext);

  const handleChange = event => {
    const { name, value } = event.target
    setUser(prevUser => ({...prevUser,[name]:value }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(user)
  }
  return (
    <>
    <div className="ms-5">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Addresse mail</label>
      <input type="email"
      name ="email"
       className="form-control" id="exampleInputEmail1" 
      onChange={handleChange}/>
      </div>
      <div>
      <label htmlFor="exampleInputPassword1" className="form-label">Mode de passe</label>
      <input type="password" 
      name="password"
      className="form-control" id="password" 
      onChange={handleChange}/>
      </div>
   <button type="submit" className="btn btn-primary"> Connecter</button>
  </form>
  <div className='mt-4'>
  <Link to='/register'> Êtes vous déja enregisté ? </Link>
  </div>
  </div>
    </>
  )
}

export default Connexion