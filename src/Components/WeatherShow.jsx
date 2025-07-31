import React from 'react';

import { BsSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { MdSpeed } from "react-icons/md";


const WeatherShow = ({ WeatherData }) => {
  const { name, main, sys, weather, wind } = WeatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
   
    <div className=" min-h-screen flex justify-center">

      <div className=" w-2/3 bg-white/20 min-h-screen  backdrop-blur-3xl rounded-3xl ">
      <div className=' flex  flex-col justify-center items-center'>
      <h2 className="text-4xl font-bold text-red-950">{name}</h2>
       <img src={iconUrl} alt="weather icon" className="w-24 h-24 text-sky-400" />
       </div>

       <div className="bg-sky-100 opacity-100 shadow-2xl backdrop-blur-sm w-32 h-32 rounded-full flex flex-col
               items-center justify-center text-center mx-auto">
            
            <p className="text-6xl text-red-950">
           {Math.round(main.temp)}<sup className="text-2xl align-top">°C</sup>
            </p>

        </div >
        <div className="bg-white/20 backdrop-blur-sm shadow-md mt-2 flex justify-center text-yellow-400 ">
           <p className="text-2xl text-red-950">
           Feels Like :{Math.round(main.feels_like)}<sup className="text-xl align-top">°C</sup>
             </p>
            </div>


        <div className="grid grid-cols-2 m-4 text-center text-2xl gap-x-4 gap-y-4">
        
        <div className="flex flex-col items-center text-center">
              <BsSunriseFill className="text-6xl mb-1 text-yellow-400" />
              <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
        </div>

        <div className="flex flex-col items-center text-center">
          
              <BsSunsetFill className="text-6xl mb-1 text-red-400" />
               <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>

        <div className="flex flex-col items-center text-center">
        <MdDescription className="text-6xl mb-1 text-green-800" />
        <p className="capitalize">Description: {weather[0].description}</p>
        </div>

        <div className="flex flex-col items-center text-center">
        <MdSpeed  className="text-6xl mb-1 text-rose-800" />
        <p>Wind Speed: {(wind.speed * 3.6).toFixed(1)} km/h</p>
        </div>

              
            
  
</div>




      </div>
    </div>
  );
};

export default WeatherShow;
