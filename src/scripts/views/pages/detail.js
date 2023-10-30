import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantsSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        const likeButtonContainer = document.querySelector('#likeButtonContainer');

        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        likeButtonContainer.innerHTML = createLikeButtonTemplate();

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                pictureId: restaurant.pictureId,
                name: restaurant.name,
                city: restaurant.city,
                description: restaurant.description,
                rating: restaurant.rating,
            },
        });
    },
};

export default Detail;
