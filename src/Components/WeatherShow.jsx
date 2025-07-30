import React from 'react';

const WeatherShow = ({ WeatherData }) => {
  const { name, main, sys, weather, wind } = WeatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
   
    <div className="flex items-start justify-start min-h-screen pl-8 pt-8 ml-80">

      <div className="bg-slate-800 bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-sm w-full text-white text-center border border-white/20">
        

        <div className="text-2xl space-y-2">
          <h2 className="text-4xl font-bold mb-4">{name}</h2>
          <img src={iconUrl} alt="weather icon" className="mx-auto mb-4 w-20 h-20" />
          <p>Temp: {Math.round(main.temp)}°C</p>
          <p>Feels: {Math.round(main.feels_like)}°C</p>
          <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
          <p className="capitalize">Description: {weather[0].description}</p>
          <p>Wind Speed: {(wind.speed * 3.6).toFixed(1)} km/h</p>
        </div>

      </div>
    </div>
  );
};

export default WeatherShow;
