import React from 'react'
import { useEffect, useState } from 'react'

const Card = (props) => {

      const city = useState(props.name);
      const [weather, setWeather] = useState(null);
      const [visible, setVisible] = useState(true); // ✅ new state
      const API_KEY = "f0aa4548bffa4b2089d173245250604"; 
    
      useEffect(() => {
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        )
          .then((res) => res.json())
          .then((data) => {
            setWeather(data);
          })
          .catch((err) => console.error("Error fetching weather:", err));
      }, [city]);
    
      const handleClick = () => {
        setVisible(false); // ✅ Hide the card
      };

      if (!visible) return null; // ✅ Don't render anything if hidden

  return (
    <div className="bg-gray-900 rounded-lg shadow-none hover:shadow-[0px_0px_40px_rgba(218,222,226,0.5)] transition-shadow duration-300 p-4 m-4 backdrop-blur-lg w-[30rem] h-[40rem] flex flex-col  items-center">
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>{props.name}</div>
        {weather && weather.current ? (
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex flex-col items-center space-y-[4rem] mt-[2rem] text-center"> 
          <p>🌡 Temp: {weather.current.temp_c} °C</p>
          <p>☁️ Condition: {weather.current.condition.text}</p>
          <p>💧 Humidity: {weather.current.humidity}%</p>
          <button onClick={handleClick} className='border-2 border-white p-4 m-4 hover:bg-black hover:text-white rounded-full'>Not Interested</button>
        </div>
      ) : (
        <p className="text-gray-400 mt-4">Loading...</p>
      )}
    </div>
  )
}

export default Card