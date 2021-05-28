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
  const data = document.createElement('p');
  const figure = document.createElement('figure');

  const icon = document.createElement('img');

  const value = document.createElement('p');
  value.textContent = '- -';

  return {
    wrapper, param, data, figure, icon, value,
  };
};

const creatListGroup = (arr, parent) => {
  arr.forEach((parameter) => {
    const list = document.createElement('li');
    defineAttributes(list, attributes.measurements.list);

    const small = document.createElement('small');
    small.textContent = parameter;

    const heading = document.createElement('h5');
    heading.id = parameter.split(' ').join('-').toLowerCase();
    heading.textContent = '- -';

    list.append(small, heading);
    parent.appendChild(list);
  });
};

export { defineAttributes, createWidgets, creatListGroup };