import React, { useState } from 'react';
import { fetchLocation } from '../actions/fetchLocation';

export default function LocationForm() {
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState('');

    const handleOnChange = (e) => {
        setIpAddress(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const location = await fetchLocation(ipAddress);
        setLocation(location);
    }
  
    return (
        <>
            <form className="form">
                <h1 className="title">Geo Locater</h1>
                <p className="content">To find your longitude and latitude, enter your address.</p>
                <input onChange={handleOnChange} type="text" name="location" placeholder="enter an IP address"></input><br></br>
                <button onSubmit={onSubmit} className="submit" type="submit">Submit</button>
            </form>
            <div className="result">
                <h2>Latitude: {location.latitude}</h2><br></br>
                <h2>Longitude: {console.log(location)}</h2>
            </div>
        </>
    )
}