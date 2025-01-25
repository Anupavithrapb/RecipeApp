import React from 'react';

const RecipeDetails = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-details-overlay">
      <div className="recipe-details">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{recipe.label}</h2>
        <img src={recipe.image} alt={recipe.label} />
        <div className="recipe-info">
          <p><strong>Source:</strong> {recipe.source}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing.text}</li>
            ))}
          </ul>
          <p><strong>Instructions:</strong> <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a></p>
          <p><strong>Preparation Time:</strong> {recipe.totalTime} minutes</p>
          <p><strong>Servings:</strong> {recipe.yield}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
