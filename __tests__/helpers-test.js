/**
 * @jest-environment jsdom
*/

import { defineAttributes, searchValidator, celsiusToFahrenheit } from '../src/modules/helpers.js';

test('Adding attributes to elements', () => {
  const attributes = {
    button: {
      class: 'btn btn-secondary bg-gradient',
      id: 'test-button',
    },
  };

  const button = document.createElement('button');
  expect(button.classList.length).toEqual(0);
  defineAttributes(button, attributes.button);
  expect(button.classList.length).toEqual(3);
  expect(button.id).toMatch(attributes.button.id);
});

test('Ensures that only city names are filled in search field', () => {
  let input = '123';
  expect(searchValidator(input)).toBe(false);

  input = '';
  expect(searchValidator(input)).toBe(false);

  input = 'Paris';
  expect(searchValidator(input)).toBe(true);
});

test('Converts temperatures to fixed decimal places from Celsius to Fahrenheit', () => {
  const temp = 24.75;
  const result = parseFloat(celsiusToFahrenheit(temp));
  expect(result).toEqual(76.5);
});
