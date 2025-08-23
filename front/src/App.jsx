import { BrowserRouter,Routes, Route } from 'react-router';
import './App.css';


import Home from './pages/HomePage/Home';
import Layout from './components/Layout/Layout';
import DashbordLayout from './components/Admin/DashbordLayout';
import Sidebar from './components/Admin/Sidebar';
import Service from './components/Admin/Service';
import Reservation from './components/Admin/Reservation';
import Membre from './components/Admin/Membre';
import Contact from './pages/Contact/Contact';
import Connexion from './pages/Authentification/Connexion';
import Inscription from './pages/Authentification/register';
import { AuthContext } from './utilis/context/AuthContext';


function App() {
  
  return ( 
 
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/inscription" element={<Inscription/>}/>
      <Route path="/connexion" element={<Connexion/>}/>
   </Route>

    <Route element={<DashbordLayout/>}>
        <Route path="/dashbord" element={<Service/>}/>
        <Route path="/dashbord/service" element={<Service/>}/> 
        <Route path="/dashbord/reservation" element={<Reservation/>}/>
        <Route path="/dashbord/membre" element={<Membre/>}/>
        <Route path="/service" element={<Service/>}/>  
        <Route path="/service/add" element={<Service/>}/> 
        <Route path="/service/all" element={<Service/>}/>
        <Route path="/service/:id" element={<Service/>}/> 
        <Route path="/service/delete/${service/_id}" element={<Service/>}/>
        <Route path="/service/update/${service._id}" element={<Service/>}/>  
        <Route path="/" element={<Home/>}/>  
    </Route>
    </Routes>
  
  );
}

export default App;
