import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './utilis/context/AuthContext.jsx';
import { BrowserRouter } from 'react-router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
       <AuthProvider>
        <App/>
       </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>  
 );

