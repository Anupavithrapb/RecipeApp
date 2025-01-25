// import { combineReducers } from 'redux';
// import recipesReducer from './recipesReducer';
// import favoritesReducer from './favoritesReducer';

// const rootReducer = combineReducers({
//   recipes: recipesReducer,
//   favorites: favoritesReducer,
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import favoritesReducer from './favoritesReducer'; // Import favoritesReducer

const rootReducer = combineReducers({
  recipes: recipesReducer,
  favorites: favoritesReducer, // Include favoritesReducer
});

export default rootReducer;
