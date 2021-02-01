import Typed from 'typed.js';

const loadDynamicBannerText = () => {
    new Typed('#banner-typed-text', {
        strings: ["Hi, I'm <span id='curly-font'>Jamile</span>"],
        typeSpeed: 150,
        loop: false
    });
}

export { loadDynamicBannerText };
