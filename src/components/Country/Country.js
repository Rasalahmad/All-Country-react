import React from 'react';
import './Country.css'

const Country = (props) => {
    // const {flag,} = props.country
    // console.log(props.country)
    const {flag, name, capital, population} = props.country;
    return (
        <div className = 'country'>
            <img style = {{width: '200px'}} src={flag} alt="" />
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p> <small>Population: {population}</small> </p>    
        </div>
    );
};

export default Country;