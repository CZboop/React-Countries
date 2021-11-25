import React, { useState } from "react";
import CountriesContainer from "../containers/CountriesContainer";
import ContinentList from "./ContinentList"
import continents from './continents.js'
import './Continent.css'

const Dashboard = () =>{
    const [show, setShow] = useState(false);

    const showCountriesContainer = () => {
        setShow(true);
    };

    const hideCountriesContainer = () => {
        setShow(false);
    };

    return(
        <div>
            <CountriesContainer show={show} handleClose={hideCountriesContainer} />
            <div className="ContinentList">
            <ContinentList  continents={continents}/>
            </div>
        </div>
    );

}

export default Dashboard