import maskInput from 'vanilla-text-mask';
import { rules, cardTypes } from './config.js';
import Utils from './utils.js';

export default class Field {

  constructor(field) {
    this.field = field;
    this.input = field.querySelector('input');
  }
  
  // устанавливаем маску
  setMask(mask) {
    this.maskedInput = maskInput({ inputElement: this.input, mask: Utils.maskToArray(mask) });
  }
  
  // иззменяем маску при выборе страны
  updateMask(mask){
    this.maskedInput.destroy();
    
    this.input.setAttribute('placeholder', mask);
    this.input.value = null;
    this.input.focus;
    
    this.maskedInput = maskInput({ inputElement: this.input, mask: Utils.maskToArray(mask) });
  }
  
  // обрабатываем событие ввода
  onInput(){
    this.input.addEventListener('keyup', () => {
      this.validate();
      this.changeButton();
      if(this.input.id === 'card_number') this.changeCardType();
    });
  }
  
  validate(){
    // удаляем символы маски, чтобы они не учитывались при валидации
    let fieldValue = this.field.dataset.mask ? this.input.value.replace(/_|\(|\)| |/g,'') : this.input.value;
    
    // если поле даты, то переводим ее в формат, понятный валидатору
    if(this.input.id === 'term') fieldValue = `20${fieldValue.split('/')[1]}-${fieldValue.split('/')[0]}`;
    if(this.input.id === 'name') fieldValue = fieldValue.replace(/ /g,'');
    
    // оставляем в массиве правил только невалидные
    const itemRules = rules[this.input.id].filter((item) => !Utils.checkRule(item, fieldValue));
    
    let error = this.field.querySelector('.field__error');
    
    // если есть хоть один невалидный, добавляем ошибку, если нет, то удаляем
    if(itemRules.length > 0){
      this.field.classList.add('has-error');
      
      if(error){
        error.textContent = itemRules[0].message;
      }else{
        error = document.createElement('span');
        error.classList.add('field__error');
        error.textContent = itemRules[0].message;
        this.field.appendChild(error);
      }
    }else{
      this.field.classList.remove('has-error');
      if(error) error.remove();
    }
  }
  
  // устанавливаем изображение типа карты при вводе
  changeCardType(){ 
    let cardTypeField = this.field.querySelector('.field__card-type');
    const cardType = Utils.checkCardType(cardTypes, this.input.value);
    
    if(cardType){
      if(cardTypeField){
        cardTypeField.setAttribute('src', `images/${cardType}.svg`);
        cardTypeField.setAttribute('alt', cardType);
      }else{
        cardTypeField = document.createElement('img');
        cardTypeField.classList.add('field__card-type');
        cardTypeField.setAttribute('src', `images/${cardType}.svg`);
        cardTypeField.setAttribute('alt', cardType);
        this.field.appendChild(cardTypeField);
      }
    }else{
      if(cardTypeField) cardTypeField.remove();
    }
  }
  
  // делаем кнопку неактивной, если есть хоть одна ошибка
  changeButton(){
    const button = document.querySelector('#send-form');
    const fields = document.querySelectorAll('.field');
    
    button.disabled = false;
    
    fields.forEach((item) => {
      const input = item.querySelector('input');
      if(item.classList.contains('has-error') || !input.value){
        button.disabled = true;
      }
    })
  }
}