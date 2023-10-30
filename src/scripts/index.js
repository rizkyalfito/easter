/* eslint-disable no-shadow */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
const restaurantItems = document.querySelectorAll('.restaurant-item');

restaurantItems.forEach((item, index) => {
    const restaurantLink = item.querySelector('a');
    item.setAttribute('tabindex', `${index + 1}`);
    restaurantLink.setAttribute('tabindex', '0');
});

const restaurantElement = document.getElementById('restaurant');
if (restaurantElement) {
    const restaurantItems = restaurantElement.querySelectorAll('*');
    restaurantItems.forEach((item, index) => {
        if (item && item.querySelector) {
            const restaurantLink = item.querySelector('a');
            if (restaurantLink) {
                item.setAttribute('tabindex', `${index + 1}`);
                restaurantLink.setAttribute('tabindex', '0');
            } else {
                item.setAttribute('tabindex', '0');
            }
        }
    });
}
