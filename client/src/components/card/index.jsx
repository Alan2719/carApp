import React from "react";
import "./styles.css";


function carCard() {

    return (
        <>
        <div className="card">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                
            </div>
        </div>
    </>
    )
}

export default carCard;
