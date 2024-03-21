export default class HorizontalSlider {
  #listEl = null;
  #listItemElArr = null;
  #listItemDataArr = [];
  #margin = 0;
  #baseSpeed = 0;
  #fps = 0;
  #listElBaseLeft = 0;

  #slideItemToLeft(index) {
    const itemData = this.#listItemDataArr[index];
    itemData.left = itemData.left - this.#baseSpeed;
  }

  #moveItemToBack(index) {
    const destData = this.#listItemDataArr[index];

    const baseDataIndex = (index + this.#listItemDataArr.length - 1) % this.#listItemDataArr.length;
    const baseData = this.#listItemDataArr[baseDataIndex];


    const isVisible = (destData.left + destData.width) > (this.#listElBaseLeft * -1);
    if (isVisible) { return; }

    destData.left = baseData.left + baseData.width + this.#margin;
  }

  #drawListEl() {
    this.#listItemElArr.forEach((e, i) => {
      const itemData = this.#listItemDataArr[i];
      e.style.transform = `translateX(${itemData.left}px)`;
    });
  }

  #previousDelta = 0;
  #animate(currentDelta) {
    requestAnimationFrame(() => this.#animate());

    const delta = currentDelta - this.#previousDelta;
    const fpsInterval = 1000 / this.#fps;

    if (delta < fpsInterval) { return; }

    this.#listItemDataArr.forEach((e, i) => {
      this.#slideItemToLeft(i);
      this.#moveItemToBack(i);
    })
    this.#drawListEl();

    this.#previousDelta = currentDelta;
  }

  constructor(fps, speed) {
    this.#fps = fps;
    this.#baseSpeed = speed;
    this.#listEl = document.querySelector('[data-list]');
    this.#listItemElArr = [...document.querySelectorAll('[data-list-item]')];

    const listElHeight = this.#listEl.clientHeight;
    this.#margin = parseInt(window.getComputedStyle(this.#listItemElArr[1]).getPropertyValue('margin-left'));
    this.#listElBaseLeft = this.#listEl.getBoundingClientRect().left;

    let startXPos = 0;
    let maxHeight = 0;
    this.#listItemElArr.forEach(e => {
      const currentHeight = e.clientHeight;
      const currentWidth = e.clientWidth;

      this.#listItemDataArr.push({
        left: startXPos,
        width: currentWidth,
      })
      startXPos = startXPos + this.#margin + currentWidth;

      maxHeight = currentHeight > maxHeight ? currentHeight : maxHeight;
    })

    this.#listItemDataArr.forEach(e => {
      e.height = maxHeight;
    });

    this.#listEl.style.position = 'relative';
    this.#listItemElArr.forEach((e, i) => {
      const itemData = this.#listItemDataArr[i];

      e.style.position = 'absolute';
      e.style.marginLeft = 0;
      e.style.left = 0;
      e.style.transform = `translateX(${itemData.left}px)`;
      e.style.height = `${itemData.height}px`;
    })
    this.#listEl.style.height = `${listElHeight}px`;
  }


  start() {
    this.#animate(performance.now());
  }
}
