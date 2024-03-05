import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import axios from 'axios'
import './components/styles/WeatherCard.css'
import Loader from './components/Loader'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [tempSelect, settempSelect] = useState( )
  const [isLoading, setisLoading] = useState(true)

  const succes = info => {
    setCoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude
    })


  }
 useEffect (() => {
    navigator.geolocation.getCurrentPosition(succes)
 }, [])

 useEffect(() => {
  if(coords) {
 

    const APIKEY = '37fa061aaf8f9f0fc0d3ee711cefc745'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
 
      axios.get(url)
        .then(res => {
        setweather(res.data)
        const celsius = (res.data.main.temp - 273.15).toFixed(0)
        const fahrenheit = ((9/5 * celsius) + 32).toFixed(0)
        settempSelect({
          celsius, fahrenheit
        })

       })
      .catch(res => console.log(res.err))
      .finally(() => setisLoading(false))
 }
}, [coords])


  return (

    
    <div className='app'>
  
       {
         isLoading
        ? <Loader />
        : (
        <WeatherCard weather={weather}
         tempSelect = {tempSelect} />
      )
    }
    </div>
    
  )
}

export default App
