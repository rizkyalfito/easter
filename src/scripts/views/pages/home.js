import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <section id="hero" class="hero">
            <div class="hero-img">
                <img src="./images/heros/hero-image_2.jpg" alt="">
            </div>
            <div class="hero-intro">
                <h2>Your Culinary Journey Begins Here: The Trusted Portal for Food Enthusiasts.</h2>
                <p>
                    Explore diverse flavors, hidden gems, and trusted dining recommendations on .easter, your ultimate portal for food enthusiasts. Join us to indulge your passion for food and share culinary adventures.</p>
            </div>
        </section>
        <section id="mainsection" class="menu" tabindex="0"></section>
        <div class="content">
            <div id="restaurants" class="restaurants">
            </div>
        </div>
      `;
    },

    async afterRender() {
        const restaurants = await RestaurantsSource.RestaurantsList();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
