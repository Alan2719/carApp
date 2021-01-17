import React from 'react';
import "./styles.css"

function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 title">Car Maintenance System</h1>
            </div>
        </div>
    );
}

export default Jumbotron;