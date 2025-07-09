import { Routes, Route } from 'react-router';
import './App.css';

//COMPOSANTS ET PAGES
import Home from './pages/HomePage/Home';
import Layout from './components/Layout/Layout';


function App() {
  
  return (
    
       <Routes>
         <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          </Route>
       </Routes>
    
  );
}

export default App;
