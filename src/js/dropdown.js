export default class Dropdown {

  constructor(dropdown) {
    this.dropdown = dropdown;
    this.title = dropdown.querySelector('.dropdown__title');;
    this.items = dropdown.querySelectorAll('.dropdown__item');
  }
  
  onTitleClick(){
    this.title.addEventListener('click', (e) => this.dropdown.classList.toggle('open'));
  }
  
  onItemClick(){
    this.items.forEach((item) => item.addEventListener('click', () => this.dropdown.classList.remove('open')));
  }
  
  onOffsetClick(){
    window.addEventListener('click', (e) => {
      if (!this.dropdown.contains(e.target)) {
        this.dropdown.classList.remove('open');
      }
    });
  }

}