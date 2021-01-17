import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/wrapper"
import Card from "../components/card";
import API from "../utils/API";

function Home() {

    const [infoCars, setCars] = useState([]);

    useEffect(() => {
        API.getInfo().then((dbCars) => {
            console.log(dbCars.data);
            setCars(dbCars.data)
        });
    }, []);

    // function Repairing(event) {
    //     event.preventDefault();
    //     let carId = event.currentTarget.getAttribute("data-value");
    //     console.log(carId);
    // }

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