import { useState } from "react"


const WeatherCard = ({weather, tempSelect}) => {

const [isCelsius, setisCelsius] = useState(true)
const changeTemp =  () => {
  setisCelsius(!isCelsius)
}
  return (
    <article className="weather">
      <h1 className="weather-title">Weather App</h1>
    <h2 className="weather-country">{weather?.name}, {weather?.sys.country}</h2>
    <section className="weather-body">
        <header className="weather-img">
        <img className="weather-icon" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </header>
        <article className="weather-condition">
          <h3 className="weather-description">"{weather?.weather[0].description}"</h3>
          <ul className="weather-list">
            <li className="weather-item"><span>Velocidadd del viento </span><span className="weather-value">{(weather?.wind.speed * 18/5).toFixed(1)} km/h</span></li>
            <li className="weather-item"><span>Nubes </span><span className="weather-value">{weather?.clouds.all} %</span></li>
            <li className="weather-item"><span>Humedad </span><span className="weather-value">{weather?.main.humidity} %</span></li>
            <li className="weather-item"><span>Presion </span><span className="weather-value">{weather?.main.pressure} hPa</span></li>
          </ul>
        </article>
        <section className="weather-principal">
          <h2 className="weather-temp">{isCelsius ? `${tempSelect?.celsius} °C` : `${tempSelect?.fahrenheit}  °F`}</h2>
        </section>
        <button className="button" onClick={changeTemp}>Cambiar a °F/°C</button>
    </section>
    
    </article>
  )
}

export default WeatherCard