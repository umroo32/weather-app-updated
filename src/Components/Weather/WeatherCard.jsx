import React, { useEffect, useState } from 'react'

const WeatherCard = ({temp,humidity,pressure,weatherMood,name,speed,country,sunset}) => {
   const [weatherState, setWeatherState ] = useState("")
  let sec = sunset;
  let date = new Date(sec * 1000)
  let timeIntoString = `${date.getHours()}:${date.getMinutes()}` 

  useEffect(()=>{
    if(weatherMood){
        switch (weatherMood) {
            case "Clouds":
                setWeatherState("wi-day-cloudy")
                break;
                case "haze":
                setWeatherState("wi-fog")
                break;
                case "Clear":
                setWeatherState("wi-day-sunny")
                break;
        
            default:
                setWeatherState("wi-day-sunny")
                break;
        }
    }
  },[weatherMood])
  return (
    <article className='widget'>
    <div className='weatherIcon'>
        <i className={`wi ${weatherState}`} />
    </div>
    <div className='weatherInfo'>
        <div className='temperature'>
            <span className='px-4'>{temp}°C
            </span>
        </div>
        <div className='description'>
            <div className='weatherCondition'>{weatherMood}</div>
            <div className='place'>
               {name},{country}
            </div>
        </div>
    </div>
    <div className='date'>{new Date().toLocaleString()}</div>
    <div className="extra-temp">
  <div className="temp-info-minmax">
    <div className="two-sided-section">
      <p>
        <i className={"wi wi-sunset"}></i>
      </p>
      <p className="extra-info-leftside">
        {timeIntoString}PM <br />
        Sunset
      </p>
    </div>

    <div className="two-sided-section">
      <p>
        <i className={"wi wi-humidity"}></i>
      </p>
      <p className="extra-info-leftside">
        {humidity}% <br />
        Humidity
      </p>
    </div>
  </div>

  <div className="weather-extra-info">
    <div className="two-sided-section">
      <p>
        <i className={"wi wi-rain"}></i>
      </p>
      <p className="extra-info-leftside">
       {pressure}p <br />
        Pressure
      </p>
    </div>

    <div className="two-sided-section">
      <p>
        <i className={"wi wi-strong-wind"}></i>
      </p>
      <p className="extra-info-leftside">
      {speed}km/h <br />
        Speed
      </p>
    </div>
    </div>
    </div>
</article>
  )
}

export default WeatherCard