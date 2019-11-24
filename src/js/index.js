import PerfectScrollbar from 'perfect-scrollbar';
import Field from './field.js';
import Country from './country.js';
import Dropdown from './dropdown.js';

import './../sass/styles.scss';

const fields = document.querySelectorAll('.field');

// перебираем все поля
fields.forEach((item) => {
  // создаем экземпляр поля
  const field = new Field(item); 
  
  // если у поля есть data-mask, то уставливаем ему маску
  if(item.dataset.mask) field.setMask(item.dataset.mask);
  
  // если поле телефона, то создаем экземпляры стран и вызываем метод onChange
  if(item.classList.contains('phone')){
    const countries = item.querySelectorAll('.country');   
    countries.forEach((countryItem) => new Country(countryItem, field).onChange());
  }
  
  field.onInput(); 
  
});


const dropdowns = document.querySelectorAll('.dropdown');

// перебираем все дропдауны и вешаем события
dropdowns.forEach((item) => {
  const dropdown = new Dropdown(item);
  dropdown.onTitleClick();
  dropdown.onItemClick();
  dropdown.onOffsetClick();
});

const customScrolls = document.querySelectorAll('.custom-scroll');

customScrolls.forEach((item) => {
  new PerfectScrollbar(item, {
    wheelSpeed: 0.5,
    wheelPropagation: false,
  });
});