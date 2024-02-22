import React from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
    }
    let apiKey = '8c78e9e7e9928cd1a2a6f923072c3dec';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
    );
}
