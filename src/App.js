import React from 'react';
import LocationForm from './components/LocationForm';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <LocationForm />
            </div>
        )
    }
}

export default App;

