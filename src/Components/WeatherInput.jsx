import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

const WeatherInput = ({ Searchcity }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    Searchcity(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center p-4">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city Name"
          className="w-80 p-2 pr-10 pl-10 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-600"
        >
          <FcSearch className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default WeatherInput;
