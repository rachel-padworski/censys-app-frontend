import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <>
                <form>
                    <h1 className="title">Geo Locater</h1>
                    <p className="content">To find your longitude and latitude, enter your address.</p>
                    <input placeholder="enter your address"></input><br></br>
                    <button className="submit">Submit</button>
                </form>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

