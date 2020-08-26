export default class NavHandler {
  constructor() {
    this.selected = document.querySelector('.nav-item--selected');
    this.navButtons = document.querySelectorAll('.nav-item');
  }

  addEventListeners() {
    this.navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.selected.classList.remove('nav-item--selected');
        btn.classList.add('nav-item--selected');
        this.selected = btn;
      });
    });
  }

  load() {
    this.addEventListeners();
  }
}
