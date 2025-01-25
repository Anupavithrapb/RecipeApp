
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from './Redux/actions/recipeActions';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemove = (recipe) => {
    dispatch(removeFromFavorites(recipe.id));
  };

  return (
    <div className="favorites-list">
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite recipes yet</p>
      ) : (
        favorites.map((recipe, index) => (
          <div key={index} className="favorite-card">
            <img src={recipe.image} alt={recipe.label} />
            <div className="favorite-content">
              <h3>{recipe.label}</h3>
              <button onClick={() => handleRemove(recipe)} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
