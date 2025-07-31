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
    <div className="min-h-screen bg-[url('/images/myimage3.jpg')] bg-cover bg-no-repeat">

    <div >
    <WeatherInput Searchcity={HandleData }  />
    {error && (
  <p className="text-red-600 text-4xl font-semibold flex justify-center items-center h-full">
    {error}
  </p>
)}

  
      {data && <WeatherShow WeatherData={data} />}
    </div>
  </div>
  
  );
};

export default Weather;

