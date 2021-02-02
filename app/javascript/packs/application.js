require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// External imports
import "bootstrap";
import AOS from 'aos';

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { navToggle } from './nav_toggle';
import { loadDynamicBannerText } from '../components/banner';
import { initRellax } from './rellax';


document.addEventListener('turbolinks:load', () => {
  // Navbar animation
  navToggle();

  // Banner type script
  loadDynamicBannerText();

  //RELLAX INIT
  if (document.querySelector('.rellax')) {
    initRellax();
  }

  // Scrolling animation
  AOS.init();

});

window.addEventListener('load', AOS.refresh)
