import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCard from './WeatherCard'

const Temp = () => {
    const [search, setSearch] = useState('Peshawar')
    const [ tempData, setTempData] = useState("")

    const getWeatherData = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fa33d0978ffd2dd0c25279e64e7a75fd`
            let res = await fetch(url);
            let data = await res.json();
            const {temp,humidity, pressure} = data.main;
            const {main: weatherMood} = data.weather[0]
            const {name} = data
            const {speed} = data.wind
            const {country,sunset} = data.sys

            const myAppWeatheInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            }
            setTempData(myAppWeatheInfo)
            console.log(myAppWeatheInfo)
        }catch(error){
            console.log(error)
            alert('No Data Found!')
        }
    }

    useEffect(()=>{
        getWeatherData()
    },[])
  return (
    <>
        <div className='wrap '>
            <div className='search'>
                <input onChange={(e)=> setSearch(e.target.value)} value={search} type='search' placeholder='Search...' autoFocus id='search' className='searchTerm'/>
                <button onClick={getWeatherData} className='searchButton' type='button'>Search</button>
            </div>
        </div>
        
        <WeatherCard {...tempData} />
    </>
  )
}

export default Temp