import React,{useState} from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle ={
    width:'100%',
    height:'400px',
};

const center ={
    lat: 48.8566,
    lng: 2.3522,
};

const ReservationPage =()=>{
    const [location, setLocation]= useState('');
    const [destination,setDestination]= useState('');

    const handleLocationChange=(e) =>{
        setLocation(e.traget.value);
    };
    const hangleDestinationChange=(e)=>{
        setDestination(e.traget.value);
    };
    const handleSubmit=()=>{

    };

    return(
        <div>
            <h1>Réserver Votre Trajet</h1>
            <input type="text" placeholder="Adresse de Location" value={location}
            onChange={handleLocationChange} style={{ marginBottom:'10px', width:'100%', padding:'8px'}}
            />
            <input type="text" placeholder="Adresse de Destination" value={destinationtion}
            onChange={handleDestinationChange} style={{ marginBottom:'10px', width:'100%', padding:'8px'}}
            />
            <button onClick={handleSubmit} style={{ marginBottom:'10px'}}>Réserver Votre Trajet</button>
            <LoadScript googleMapsApiKey="#">
                <GoogleMap mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                >GOOD</GoogleMap>
            </LoadScript>
        </div>
    );   
};

export default ReservationPage;