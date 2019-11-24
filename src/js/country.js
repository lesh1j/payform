import maskInput from 'vanilla-text-mask';

export default class Country {

  constructor(country, field) {
    this.country = country;
    this.field = field;
    this.flag = country.querySelector('.country__flag');
    this.flagImage = this.flag.getAttribute('src');
    this.flagAlt = this.flag.getAttribute('alt');
  }
  
  setSelected(){
    const countryFlag = this.field.field.querySelector('#country-flag');

    countryFlag.setAttribute('src', this.flagImage);
    countryFlag.setAttribute('alt', this.flagAlt);
    
    this.field.updateMask(this.country.dataset.mask);
  }
  
  onChange(){
    this.country.addEventListener('click', () => this.setSelected());
  }

}