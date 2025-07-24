import {createContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  
  const [auth, setAuth] = useState(null);

  const navigate = useNavigate()

  const login = async (dataForm) => {
    
    setIsLoading(true); 
    try {
      const { data, status } = await axios.post(`http://localhost:8000/api/user/connexion`, dataForm);
      console.log(data);
      if(status === 200){
        
        localStorage.setItem("auth",JSON.stringify(data));

        setAuth(data);

        navigate('/')

        setIsLoading(false);  
      }
    } catch (e) {
      console.log(e.message);
      setIsLoading(false); 
    }
  };
   return (
     <AuthContext.Provider value={{ login, auth, isLoading  }}>
      {children}
  </AuthContext.Provider>
  ); 
};



