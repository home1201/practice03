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
        this.#toggleBtnEl.classList.remove('header__menu-toggle--close');

        this.#menuListEl.dataset.menu = 'closed';
        this.#menuListEl.classList.remove('header__list--mobile-open');

        this.#bodyEl.dataset.menu = 'closed';
        this.#bodyEl.classList.remove('dark-layer--active');
      } else {
        this.#toggleBtnEl.dataset.menu = 'opened';
        this.#toggleBtnEl.classList.add('header__menu-toggle--close');

        this.#menuListEl.dataset.menu = 'opened';
        this.#menuListEl.classList.add('header__list--mobile-open');

        this.#bodyEl.dataset.menu = 'opened';
        this.#bodyEl.classList.add('dark-layer--active');
      }
    });
  }
}
