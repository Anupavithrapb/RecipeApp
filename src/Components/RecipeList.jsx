
 
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from './Redux/actions/recipeActions';
import RecipeDetails from './RecipeDetails';

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const dispatch = useDispatch();

  const handleFavorite = (recipe) => {
    const isFavorite = favorites.some(fav => fav.label === recipe.label);
    if (!isFavorite) {
      dispatch(addToFavorites(recipe));
    }
  };

  return (
    <div className="recipe-list">
      <div className="recipe-cards">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <div className="recipe-card-buttons">
              <button onClick={() => setSelectedRecipe(recipe.recipe)}>
                View Details
              </button>
              <button 
                onClick={() => handleFavorite(recipe.recipe)}
                className={favorites.some(fav => fav.label === recipe.recipe.label) ? 'active' : ''}
              >
                {favorites.some(fav => fav.label === recipe.recipe.label) ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default RecipeList;
