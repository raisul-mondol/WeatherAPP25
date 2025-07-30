

const API_KEY = 'bd9bd101fbaceefa7b095b5d2a933eba';

export const fetchWeatherData = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error('City not found');
  }

  const data = await res.json();
  return data;
};


