import React, { useState } from 'react';
import WeatherInput from './WeatherInput';
import { fetchWeatherData } from '../Services/WeatherApi';
import WeatherShow from './WeatherShow';

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const HandleData = async (city) => {
    setError(null);
    setData(null);

    try {
      const Getdata = await fetchWeatherData(city);
      setData(Getdata);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  console.log(data);

  return (
    <div className="min-h-screen bg-[url('images/pi4.jpg')] bg-cover bg-no-repeat">
    <div >
    <WeatherInput Searchcity={HandleData }  />
       {error && (
        <p className="text-red-600 pl-8 pt-8 ml-80 text-4xl font-semibold">
          {error}
        </p>
      )}
  
      {data && <WeatherShow WeatherData={data} />}
    </div>
  </div>
  
  );
};

export default Weather;

