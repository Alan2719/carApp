import React from 'react';
import "./styles.css"

function Wrapper({ children }) {
    return (
        <div className="container box">
            <h3>Car List <i class="fas fa-car"></i></h3>
            {children}
        </div>
    );
}

export default Wrapper;