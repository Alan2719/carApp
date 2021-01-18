import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/wrapper"
import Card from "../components/card";
import API from "../utils/API";

function Home() {

    const [infoCars, setCars] = useState([]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        API.getInfo().then((dbCars) => {
            console.log(dbCars.data);
            setCars(dbCars.data)
        });
    }, []);

    return (
        <>
            <Jumbotron />
            <Wrapper>   
                <Card 
                    carsInfo = {infoCars}
                    // Repairing = {Repairing}
                />
            </Wrapper>
        </>
    )

}

export default Home;