export default class HorizontalSlider {
  #listEl = null;
  #listItemElArr = null;
  #margin = 0;
  #baseSpeed = 0;

  #slideToLeft() {
    this.#listItemElArr.forEach(e => { e.style.left = `${parseFloat(e.style.left) - this.#baseSpeed}px`; });
  }

  #moveToBack() {
    this.#listItemElArr.forEach((e, i) => {
      const baseElIndex = (i + this.#listItemElArr.length - 1) % this.#listItemElArr.length;
      const baseEl = this.#listItemElArr[baseElIndex];

      const isVisible = e.getBoundingClientRect().right > 0;
      if (isVisible) { return; }

      const destXPos = parseFloat(baseEl.style.left) + baseEl.clientWidth + this.#margin;
      e.style.left = `${destXPos}px`;
    })
  }

  #previousDelta = 0;
  #fps = 0;

  #animate(currentDelta) {
    requestAnimationFrame(() => this.#animate());

    const delta = currentDelta - this.#previousDelta;
    const fpsInterval = 1000 / this.#fps;

    if (delta < fpsInterval) { return; }

    this.#slideToLeft();
    this.#moveToBack();

    this.#previousDelta = currentDelta;
  }

  constructor(speed, fps) {
    this.#listEl = document.querySelector('[data-list]');
    this.#listItemElArr = [...document.querySelectorAll('[data-list-item]')];
    this.#margin = parseInt(window.getComputedStyle(this.#listItemElArr[1]).getPropertyValue('margin-left'));

    this.#listEl.style.position = 'relative';
    const listElHeight = this.#listEl.clientHeight;

    this.#baseSpeed = speed;
    this.#fps = fps;

    let startXPos = 0;
    let maxHeight = 0;
    this.#listItemElArr.forEach(e => {
      e.style.position = 'absolute';
      e.style.marginLeft = '0';
      e.style.left = `${startXPos}px`;

      startXPos = startXPos + this.#margin + e.clientWidth;
      maxHeight = e.clientHeight > maxHeight ? e.clientHeight : maxHeight;
    })
    this.#listItemElArr.forEach(e => { e.style.height = `${maxHeight}px`; });
    this.#listEl.style.height = `${listElHeight}px`;

  }


  start() {
    this.#animate(performance.now());
  }
}
