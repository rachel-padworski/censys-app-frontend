// import React from 'react';

// export default class LocaterForm extends React.component {
    
//     constructor(props) {
//         super(props);
//         this.state = {value: ''}

//         this.handleOnChange = this.handleOnChange.bind(this);
//         this.OnSubmit = this.OnSubmit.bind(this);
//     }
    
    
//     handleOnChange(e) {
//         console.log(e.target.value, "value")
//         // set location using the user's ipaddress
//     }
    
//     onSubmit(e) {
//         e.preventDefault();
//     }
    
    
//     render() {
//         const { error, location, setLocation } = this.state;

//         if(error) {
//             return <div>Error: {error.message}</div>;
//         }
//         else {

//             return (
//                 <>
//                     <form className="form">
//                         <h1 className="title">Geo Locater</h1>
//                         <p className="content">To find your longitude and latitude, enter your address.</p>
//                         <input type="text" name="location" placeholder="enter an IP address" onChange={this.handleOnChange}></input><br></br>
//                         <button className="submit" type="submit" onSubmit={this.onSubmit}>Submit</button>
//                     </form>
//                     <div className="result">
//                         <h2>Latitude: {location.latitude}</h2><br></br>
//                         <h2>Longitude: {location.longitude}</h2>
//                     </div>
//                 </>
//             )
//         }
//     }
// }
            