import React, { useState } from 'react';
import { fetchLocation } from '../actions/fetchLocation';

export default function LocationForm() {
    const [val, setVal] = useState();
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState({
        latitude: '',
        longitude: '',
    });


    const OnChange = (e) => {
        setIpAddress(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const location = await fetchLocation(ipAddress);
        setLocation(location);
        setVal('');
    };


    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <h1 className="title">Geo Locator</h1>
                <p className="content">To find your latitude and longitude, enter your IP address.</p>
                <input onChange={OnChange} value={val} type="text" name="location" placeholder="enter an IP address"></input><br></br>
                <button className="submit" type="submit">Submit</button>
            </form>
            <div className="location">
                <h2 className="location--heading">Latitude: {location.latitude}</h2><br></br>
                <h2 className="location--heading">Longitude: {location.longitude}</h2>
            </div>
        </>
    )
}