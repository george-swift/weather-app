import './style.css';
import './loading-component.css';
import { manageNavbar, reportManager } from './modules/UIManager.js';
import { dataFiller, searchValidator, celsiusToFahrenheit } from './modules/helpers.js';
import weatherReport from './modules/weatherAPI.js';

const handleSearch = () => {
  const searchField = document.querySelector('#searchField');
  const searchBtn = document.querySelector('#searchBtn');
  const displayError = document.querySelector('#errorMessage');
  const unit = document.querySelector('#temperature');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const loader = document.getElementById('loading-component');
    loader.classList.add('is-active');

    const userInput = searchField.value.trim();
    if (searchValidator(userInput)) {
      weatherReport(userInput)
        .then((response) => {
          dataFiller(response);
          searchField.value = '';
          unit.textContent = '°C';
          loader.classList.remove('is-active');
        })
        .catch(() => {
          // eslint-disable-next-line no-undef
          $('#errorModal').modal('show');
          displayError.textContent = 'City not found';
          searchField.value = '';
          loader.classList.remove('is-active');
        });
    } else {
      // eslint-disable-next-line no-undef
      $('#errorModal').modal('show');
      displayError.textContent = 'Invalid input. Enter a valid city name';
      searchField.value = '';
      loader.classList.remove('is-active');
    }
  });
};

const changeUnit = () => {
  const unitConverter = document.querySelector('.converter');
  const unit = document.querySelector('#temperature');

  unitConverter.addEventListener('click', () => {
    if (unit.textContent === '°C' && localStorage.getItem('weather-report')) {
      const weather = JSON.parse(localStorage.getItem('weather-report'));
      dataFiller(weather);

      const tempDisplays = document.getElementsByClassName('unit');
      Array.from(tempDisplays).forEach((display) => {
        const [temp] = display.textContent.split('°');
        display.textContent = `${celsiusToFahrenheit(temp)}°`;
      });

      unit.textContent = '°F';
    } else if (unit.textContent === '°F' && localStorage.getItem('weather-report')) {
      const weather = JSON.parse(localStorage.getItem('weather-report'));
      dataFiller(weather);
      unit.textContent = '°C';
    }
  });
};

manageNavbar();

reportManager();

handleSearch();

changeUnit();
