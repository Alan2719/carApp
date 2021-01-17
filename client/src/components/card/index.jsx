import React, {useState} from "react";
import "./styles.css";


function carCard(props) {
    console.log("CARD",props.carsInfo)

    const [isActive, setActive] = useState({
        idArray: []
    });

    function toggleActive(index) {
        //event.preventDefault();
        console.log(index);
        console.log(isActive.idArray);
        let array = isActive.idArray;
        array.push(index);
        setActive({...isActive, idArray: array});
        console.log(isActive.idArray);
    }

    function toggleActiveStyles(index) {
        let idArray = isActive.idArray;
        if (idArray.includes(index)) {
            return "card-body inactive"
        } else {
            return "card-body active"
        }
        //console.log(isActive.idArray);
    }
    
    // function toggleActiveStyles(index) {
    //     if(isActive) 
    // }

    return (
        <>
        {props.carsInfo.length !== 0 ? (
            props.carsInfo.map(({ _id, carid, maker, model, kilometers, estimatedate, description }) => {
                return (
                    <div className="card">
                        <img className="card-img-top" src="..." alt="" />
                        <div className={toggleActiveStyles(_id)}>
                            <h5 className="card-title">Card id: {carid}</h5>
                            <p className="card-text"><strong>Description:</strong> {description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Maker:</strong> {maker}</li>
                            <li className="list-group-item"><strong>Model:</strong> {model}</li>
                            <li className="list-group-item"><strong>kilometers:</strong> {kilometers}</li>
                            <li className="list-group-item"><strong>Estimate date:</strong> {estimatedate}</li>
                            <li className="list-group-item"><button type="button" className="btn btn-primary" data-value={_id} onClick={() => {toggleActive(_id)}}><i class="fas fa-tools"></i></button></li>
                            {/* <label className="switch"><input type="checkbox"><span className="slider"></span></input></label> */}
                        </ul>
                        {/* <div className="card-body">
                            
                        </div> */}
                    </div>
                )
            })
            
        ) : (
            <></>
        )}
    </>
    )
}

export default carCard;
