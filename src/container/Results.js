import React from 'react';
import styles from './Results.module.css'

const result = (props)=>{
    let info = null;
   if(props.data.length !== 0){
    info = (
        <div className = {styles.temp}>
            <img styles = {{opacity: '1'}} alt = 'icon' src = {`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}/>
            <h1>{(props.data.temp-273.15).toFixed(1)}°C</h1>
            <span>{props.data.weather}</span>
            <div className = {styles.info}>
                <span>Humidity: {props.data.humidity}%</span>
                <span>Clouds: {props.data.clouds}%</span>
                <span>MAX: {(props.data.max-273.15).toFixed((1))}°C MIN: {(props.data.min-273.15).toFixed(1)}°C</span>
       <span>Sunset: {new Date(props.data.sunset * 1000).toLocaleString().slice(10, 22)}</span> 
       <span>Sunrise: {new Date(props.data.sunrise * 1000).toLocaleString().slice(10, 22)}</span>
            </div>
        </div>
    )
   } 
    return(
        <div>
            {info}
        </div>
    )
}

export default result;