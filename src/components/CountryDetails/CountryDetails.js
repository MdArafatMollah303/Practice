import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `http://restcountries.eu/rest/v2/name/{name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[]);
    return (
        <div>
            <p>Name: {country.name}</p>
            <p>NativeName: {country.nativename}</p>
        </div>
    );
};

export default CountryDetails;