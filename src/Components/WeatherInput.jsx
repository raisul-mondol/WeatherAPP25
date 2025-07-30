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
    <div className="flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mt-16"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city name"
          className="px-4 py-3 w-full sm:w-96 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default WeatherInput;