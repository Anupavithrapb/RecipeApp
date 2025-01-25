import { FETCH_RECIPES } from '../actions/recipeActions';

const initialState = {
  recipes: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload };
    default:
      return state;
  }
};

export default recipesReducer;
