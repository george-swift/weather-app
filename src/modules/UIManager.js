import attributes from './domManager.js';
import { defineAttributes, createWidgets, creatListGroup } from './helpers.js';
import Weather from '../assets/weather-app.gif';
import Temperature from '../assets/temperature.png';
import Long from '../assets/longitude.png';
import Lat from '../assets/latitude.png';
import Telescope from '../assets/visibility.png';
import Cloud from '../assets/cloudiness.png';
import Windstock from '../assets/wind-direction.png';
import DataTime from '../assets/data-time.png';

const manageNavbar = () => {
  const navbarBrand = document.querySelector('.navbar-brand');

  const icon = document.createElement('img');
  defineAttributes(icon, attributes.navbar.icon, Weather);

  navbarBrand.append(icon, 'Weather App');
};

const highlight = () => {
  const section = document.createElement('section');
  defineAttributes(section, attributes.highlight.section);

  const wrapper = document.createElement('div');
  defineAttributes(wrapper, attributes.highlight.wrapper);

  const location = document.createElement('h3');
  defineAttributes(location, attributes.highlight.location);
  location.textContent = '- -';

  const description = document.createElement('h4');
  defineAttributes(description, attributes.highlight.description);
  description.textContent = '- -';

  const temperature = document.createElement('h1');
  defineAttributes(temperature, attributes.highlight.temperature);
  temperature.textContent = '- -';

  wrapper.append(location, description, temperature);

  section.appendChild(wrapper);

  return section;
};

const weather = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Now';
  data.textContent = 'Weather';
  defineAttributes(icon, attributes.widgets.icon, Temperature);
  figure.appendChild(icon);
  value.classList.add('weather-main');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const coordLong = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Coord';
  data.textContent = 'Long';
  defineAttributes(icon, attributes.widgets.icon, Long);
  figure.appendChild(icon);
  value.classList.add('longitude');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const coordLat = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Coord';
  data.textContent = 'Lat';
  defineAttributes(icon, attributes.widgets.icon, Lat);
  figure.appendChild(icon);
  value.classList.add('latitude');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const visibility = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Cond';
  data.textContent = 'Visibility';
  defineAttributes(icon, attributes.widgets.icon, Telescope);
  figure.appendChild(icon);
  value.classList.add('visibility');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const cloudiness = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Clouds';
  data.textContent = 'All';
  defineAttributes(icon, attributes.widgets.icon, Cloud);
  figure.appendChild(icon);
  value.classList.add('cloudiness');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const wind = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Wind';
  data.textContent = 'Deg';
  defineAttributes(icon, attributes.widgets.icon, Windstock);
  figure.appendChild(icon);
  value.classList.add('wind-direction');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const collectionTime = () => {
  const {
    wrapper,
    param,
    data,
    figure,
    icon,
    value,
  } = createWidgets();

  param.textContent = 'Data';
  data.textContent = 'Time';
  defineAttributes(icon, attributes.widgets.icon, DataTime);
  figure.appendChild(icon);
  value.classList.add('calculation-time');
  wrapper.append(param, data, figure, value);
  return wrapper;
};

const apiWidgets = () => {
  const widgetSection = document.createElement('section');
  defineAttributes(widgetSection, attributes.widgets.section);

  const container = document.createElement('div');
  defineAttributes(container, attributes.widgets.div);

  const apiWeather = weather();
  const apiCoordLong = coordLong();
  const apiCoordLat = coordLat();
  const apiVisibility = visibility();
  const apiCloudiness = cloudiness();
  const apiWind = wind();
  const apiDataTime = collectionTime();

  container.append(
    apiWeather, apiCoordLong, apiCoordLat, apiVisibility, apiCloudiness, apiWind, apiDataTime,
  );

  widgetSection.appendChild(container);
  return widgetSection;
};

const measurements = () => {
  const detailSection = document.createElement('section');
  defineAttributes(detailSection, attributes.measurements.section);

  const container = document.createElement('div');
  container.classList.add('container');

  const topRow = document.createElement('div');
  defineAttributes(topRow, attributes.measurements.wrapper);

  const paramsTop = ['FEELS LIKE', 'TEMP MIN', 'TEMP MAX', 'WIND SPEED', 'SEA LEVEL'];

  creatListGroup(paramsTop, topRow);

  const bottomRow = document.createElement('div');
  defineAttributes(bottomRow, attributes.measurements.wrapper);

  const paramsBottom = ['SUNRISE TIME', 'SUNSET TIME', 'PRESSURE', 'HUMIDITY', 'TIMEZONE'];

  creatListGroup(paramsBottom, bottomRow);

  container.append(topRow, bottomRow);
  detailSection.appendChild(container);

  return detailSection;
};

const reportManager = () => {
  const main = document.querySelector('#container');

  const highlighted = highlight();
  const widgets = apiWidgets();
  const weatherDetails = measurements();

  main.append(highlighted, widgets, weatherDetails);
};

export { manageNavbar, reportManager };