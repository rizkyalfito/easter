import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
    static async RestaurantsList() {
        try {
            const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            console.error('Error:', error);
            return null; // or handle the error as per your application's logic
        }
    }

    static async detailRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
            const responseJson = await response.json();
            return responseJson.restaurant;
        } catch (error) {
            console.error('Error:', error);
            return null; // or handle the error as per your application's logic
        }
    }
}

export default RestaurantsSource;
