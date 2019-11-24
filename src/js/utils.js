import validator from 'validator';

export default class Utils {
  
  static checkRule(rule, value){
    switch(rule.type){
      case 'required':
        return value ? true : false;

      case 'minLength':
        return value.length >= rule.value ? true : false;

      case 'maxLength':
        return value.length <= rule.value ? true : false;

      case 'email':
        return validator.isEmail(value) ? true : false; 

      case 'phone':
        return validator.isMobilePhone(value) ? true : false;

      case 'creditCard':
        return validator.isCreditCard(value) ? true : false; 

      case 'alpha':
        return validator.isAlpha(value) ? true : false;

      case 'number':
        return validator.isNumeric(value) ? true : false; 

      case 'afterToday':
        return validator.isAfter(value) ? true : false; 

      default:
        return true;
    }
  }
  
  static checkCardType(types, number){
    let result = false;
    
    types.forEach((type) => {
      type.values.forEach((item) => {
        if(number.startsWith(item)) result = type.type;
      });
    });
    
    return result;
  }
  
  static maskToArray(mask){
    return [...mask].map((item) => item === 'X' ? /\d/ : item);
  }

}