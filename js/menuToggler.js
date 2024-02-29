export default class MenuToggler {
  #bodyEl = null;
  #toggleBtnEl = null;
  #menuListEl = null;

  constructor() {
    this.#bodyEl = document.querySelector('body');
    this.#toggleBtnEl = document.querySelector('[data-menu-toggle]');
    this.#menuListEl = document.querySelector('[data-menu-list]');
  }

  init() {
    this.#toggleBtnEl.addEventListener('click', () => {
      const btnStatus = this.#toggleBtnEl.dataset.menu;
      if (btnStatus === 'opened') {
        this.#toggleBtnEl.dataset.menu = 'closed';
        this.#menuListEl.dataset.menu = 'closed';
        this.#bodyEl.dataset.menu = 'closed';
      } else {
        this.#toggleBtnEl.dataset.menu = 'opened';
        this.#menuListEl.dataset.menu = 'opened';
        this.#bodyEl.dataset.menu = 'opened';
      }
    });
  }
}
