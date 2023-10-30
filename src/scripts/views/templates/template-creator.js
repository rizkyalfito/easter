/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
    const imageUrl = `${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}`;
    return `
    <h2 class="restaurant__name"tabindex="0">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${imageUrl}" alt="${restaurant.name}" />
    <div id= "mainsection" class="restaurant__info" tabindex="0">
        <h3 tabindex="0">Information</h3>
        <h4 tabindex="0">Category</h4>
        <p tabindex="0">${restaurant.categories.map((category) => category.name).join(', ')}</p>
        <h4 tabindex="0">Description</h4>
        <p tabindex="0">${restaurant.description}</p>
        <h4 tabindex="0">City</h4>
        <p tabindex="0">${restaurant.city}</p>
        <h4 tabindex="0">Address</h4>
        <p tabindex="0">${restaurant.address}</p>
        <h4 tabindex="0">Menus</h4>
        <h5 tabindex="0">Foods:</h5>
        <p tabindex="0"> ${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
        <h5 tabindex="0">Drinks:</h5>
        <p tabindex="0">${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        <h4 tabindex="0">Customer Reviews</h4>
        ${restaurant.customerReviews.map((review) => `
            <div class="restaurant__review" tabindex="0">
                <p tabindex="0">"${review.review}"</p>
                <p tabindex="0">by ${review.name}</p>
                <p tabindex="0"><small> On ${review.date}</small></p>
            </div>
            `).join('')}
    </div>
    `;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating" tabindex="0">
        <p tabindex="0">⭐️<span class="restaurant-item__header__rating__score" tabindex="0">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content" >
      <h3><a href="/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
