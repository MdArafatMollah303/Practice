import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = (props) => {
    const {name, timezones, region} = props.country;
    const countryStyle = {
        border : '1px solid black',
        margin : '20px',
        padding : '20px',
        borderRadious : '15px',
    }
    return (
        <div style={countryStyle}>
            <h3>Country : {name}</h3>
            <p>Time: {timezones}</p>
            <p>region: {region}</p>
            <CountryDetails/>
            <button><Link to={`/country/${name}`}>CountryDetail</Link></button>
        </div>
    );
};

export default Country;