import attributes from './domManager.js';

const defineAttributes = (elem, attributes, asset = null) => {
  Object.entries(attributes).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });
  if (asset) elem.src = asset;
};

const createWidgets = () => {
  const wrapper = document.createElement('div');
  defineAttributes(wrapper, attributes.widgets.wrapper);

  const param = document.createElement('p');
  param.classList.add('fw-bolder');

  const data = document.createElement('p');
  const figure = document.createElement('figure');
  defineAttributes(figure, attributes.widgets.figure);

  const icon = document.createElement('img');

  const value = document.createElement('p');
  value.textContent = '- -';

  return {
    wrapper, param, data, figure, icon, value,
  };
};

const creatListGroup = (arr, parent) => {
  const tempData = ['FEELS LIKE', 'TEMP MIN', 'TEMP MAX'];

  arr.forEach((parameter) => {
    const list = document.createElement('li');
    defineAttributes(list, attributes.measurements.list);

    const small = document.createElement('small');
    small.textContent = parameter;

    const heading = document.createElement('h5');
    heading.id = parameter.split(' ').join('-').toLowerCase();
    heading.textContent = '- -';

    if (tempData.includes(parameter)) heading.classList.add('unit');

    list.append(small, heading);
    parent.appendChild(list);
  });
};

const searchValidator = (input) => input !== '' && Number.isNaN(input - 1);

const titleCase = (text) => text[0].toUpperCase() + text.slice(1).toLowerCase();

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);

const celsiusToFahrenheit = (temp) => ((temp * 9) / 5 + 32).toFixed(1);

const unixToUTC = (unix) => {
  const T = new Date(unix * 1000);
  const hours = T.getHours() < 10 ? `0${T.getHours()}` : T.getHours();
  const minutes = T.getMinutes() < 10 ? `0${T.getMinutes()}` : T.getMinutes();
  return `${hours} : ${minutes}`;
};

const timezone = (time) => {
  const zone = Math.sign(time / 3600) === 1 ? `+${time / 3600}` : time / 3600;
  return `UTC ${zone}`;
};

const dataFiller = (response) => {
  document.body.className = `background-${response.weather[0].main.toLowerCase()}`;
  document.querySelector('#location-name').textContent = response.name;
  document.querySelector('#weather-description').textContent = titleCase(response.weather[0].description);
  document.querySelector('.temperature').textContent = `${kelvinToCelsius(response.main.temp)}°`;
  document.querySelector('.weather-main').textContent = response.weather[0].main;
  document.querySelector('.longitude').textContent = response.coord.lon;
  document.querySelector('.latitude').textContent = response.coord.lat;
  document.querySelector('.visibility').textContent = response.visibility;
  document.querySelector('.cloudiness').textContent = `${response.clouds.all} %`;
  document.querySelector('.wind-direction').textContent = `${response.wind.deg}°`;
  document.querySelector('.calculation-time').textContent = `${unixToUTC(response.dt)}`;
  document.querySelector('#feels-like').textContent = `${kelvinToCelsius(response.main.feels_like)}°`;
  document.querySelector('#temp-min').textContent = `${kelvinToCelsius(response.main.temp_min)}°`;
  document.querySelector('#temp-max').textContent = `${kelvinToCelsius(response.main.temp_max)}°`;
  document.querySelector('#wind-speed').textContent = `${response.wind.speed} m/s`;
  document.querySelector('#sea-level').textContent = `${response.main.sea_level ? response.main.sea_level : '- -'} hPa`;
  document.querySelector('#sunrise-time').textContent = `${unixToUTC(response.sys.sunrise)}`;
  document.querySelector('#sunset-time').textContent = `${unixToUTC(response.sys.sunset)}`;
  document.querySelector('#pressure').textContent = `${response.main.pressure} hPa`;
  document.querySelector('#humidity').textContent = `${response.main.humidity} %`;
  document.querySelector('#timezone').textContent = `${timezone(response.timezone)}`;
};

export {
  defineAttributes,
  createWidgets,
  creatListGroup,
  searchValidator,
  dataFiller,
  celsiusToFahrenheit,
};