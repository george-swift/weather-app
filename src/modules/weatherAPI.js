const getWeather = async (city) => {
  const response = await fetch(`https://${process.env.WEATHER_URL}?q=${city}&appid=${process.env.API_KEY}`);
  const weatherReport = await response.json();

  localStorage.setItem('weather-report', JSON.stringify(weatherReport));
  return weatherReport;
};

const handleErrors = (fn) => (...params) => fn(...params).catch((error) => {
  throw new Error(error);
});

const weatherReport = handleErrors(getWeather);

export default weatherReport;