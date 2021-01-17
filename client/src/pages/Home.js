import React, { useState, useRef } from "react";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/wrapper"
import Card from "../components/card";

function Home() {

    return (
        <>
            <Jumbotron />
            <Wrapper>   
                <Card />
            </Wrapper>
        </>
    )

}

export default Home;