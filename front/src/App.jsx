import { BrowserRouter,Routes, Route } from 'react-router';
import './App.css';


import Home from './pages/HomePage/Home';
import Layout from './components/Layout/Layout';
import DashbordLayout from './components/Admin/DashbordLayout';
import Sidebar from './components/Admin/Sidebar';
import Service from './components/Admin/Service';
import Course from './components/Admin/Course';
import Membre from './components/Admin/Membre';
import CourseModifier from './components/Admin/CourseModifier';
import CourseSuprimer from './components/Admin/CourseSuprimer';
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
        <Route path="/dashbord/course" element={<Course/>}/>
        <Route path="/dashbord/membre" element={<Membre/>}/>
        <Route path="/course/modifier" element={<CourseModifier/>}/>
        <Route path="/course/suprimer" element={<CourseSuprimer/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/course" element={<Course/>}/>
        
        <Route path="/" element={<Home/>}/>  
    </Route>

    </Routes>
  
  );
}

export default App;
