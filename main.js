import './sass/style.scss';
import MenuToggler from './js/menuToggler';
import HorizontalSlider from './js/HorizontalSlider';

(async function() {
  const menuToggler = new MenuToggler();
  menuToggler.init();

  const horizontalSlider = new HorizontalSlider(60, 0.8);
  horizontalSlider.start();
})();

