import React, { useState } from 'react';
import { fetchLocation } from '../actions/fetchLocation';

export default function LocationForm() {
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState({
        latitude: '',
        longitude: '',
    });

    const handleOnChange = (e) => {
        setIpAddress({...location, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(location.latitude)
        const location = await fetchLocation(ipAddress);
        console.log(location.latitude)
        setLocation(location);

    };
  
    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <h1 className="title">Geo Locater</h1>
                <p className="content">To find your longitude and latitude, enter your address.</p>
                <input onChange={handleOnChange} type="text" name="location" placeholder="enter an IP address"></input><br></br>
                <button className="submit" type="submit">Submit</button>
            </form>
            <div className="result">
                <h2>Latitude: {location.latitude}</h2><br></br>
                <h2>Longitude: {console.log(location.longitude)}</h2>
            </div>
        </>
    )
}