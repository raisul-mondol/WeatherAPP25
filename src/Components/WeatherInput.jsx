import React, { useState } from 'react';

const WeatherInput = ({ Searchcity }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    Searchcity(input);
    setInput('');
  };

  return (
    <form className='bg-yellow-500 w-full justify-center  flex space-x-4 p-2'>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter city name"
    className='w-80 p-2 rounded-md'
  />
  <button
  type="submit"
  className='w-20 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
>
  Search
</button>
</form>

  );
};

export default WeatherInput;