// import axios from 'axios';

// export const FETCH_RECIPES = 'FETCH_RECIPES';

// export const fetchRecipes = () => async (dispatch) => {
//   const response = await axios.get(
//     'https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50'
//   );
//   dispatch({ type: FETCH_RECIPES, payload: response.data.hits });
// };
import axios from 'axios';

export const FETCH_RECIPES = 'FETCH_RECIPES';

export const fetchRecipes = (query = 'pizza', filters = {}) => async (dispatch) => {
  try {
    let url = `https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`;
    
    // Add filter parameters
    if (filters.mealType) url += `&mealType=${filters.mealType}`;
    if (filters.diet) url += `&diet=${filters.diet}`;
    if (filters.cuisine) url += `&cuisineType=${filters.cuisine}`;

    const response = await axios.get(url);
    
    if (response.data.hits && response.data.hits.length > 0) {
      dispatch({ type: FETCH_RECIPES, payload: response.data.hits });
    } else {
      console.log('No recipes found');
      dispatch({ type: FETCH_RECIPES, payload: [] });
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    dispatch({ type: FETCH_RECIPES, payload: [] });
  }
};

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (recipe) => ({
  type: ADD_TO_FAVORITES,
  payload: recipe,
});

export const removeFromFavorites = (recipeId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: { id: recipeId },
});
