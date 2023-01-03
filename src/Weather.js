import axios from "axios";
import React from "react";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in Wenatchee is ${Math.round(response.data.main.temp)}°F`);
    }
    let apiKey = `3a8d7f059fc61ac00591426445cb607a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="Weather">
            <h2>
                Cloudy with a chance of meatballs
        </h2>
            <a href="shecodes.io" target="_blank">SheCodes</a>
        </div>

    )
}