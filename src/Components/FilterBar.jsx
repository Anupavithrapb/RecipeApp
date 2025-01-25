import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from './Redux/actions/recipeActions';

const FilterBar = () => {
  const dispatch = useDispatch();
  const [activeFilters, setActiveFilters] = useState({
    mealType: '',
    diet: '',
    cuisine: ''
  });

  const filters = {
    mealType: ['breakfast', 'lunch', 'dinner', 'snack'],
    diet: ['balanced', 'high-protein', 'low-fat', 'low-carb'],
    cuisine: ['american', 'asian', 'italian', 'mexican', 'mediterranean']
  };

  const handleFilter = (type, value) => {
    const newFilters = {
      ...activeFilters,
      [type]: activeFilters[type] === value ? '' : value
    };
    setActiveFilters(newFilters);
    
    const hasActiveFilters = Object.values(newFilters).some(filter => filter !== '');
    if (!hasActiveFilters) {
      dispatch(fetchRecipes('pizza')); 
    } else {
      dispatch(fetchRecipes('', newFilters));
    }
  };

  const resetFilters = () => {
    setActiveFilters({
      mealType: '',
      diet: '',
      cuisine: ''
    });
    dispatch(fetchRecipes('pizza')); 
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <button 
          className={`filter-btn reset-btn ${!Object.values(activeFilters).some(filter => filter !== '') ? 'active' : ''}`}
          onClick={resetFilters}
        >
          All Recipes
        </button>
      </div>
      {Object.entries(filters).map(([filterType, options]) => (
        <div key={filterType} className="filter-section">
          <h3>{filterType.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
          <div className="filter-buttons">
            {options.map(option => (
              <button
                key={option}
                className={`filter-btn ${activeFilters[filterType] === option ? 'active' : ''}`}
                onClick={() => handleFilter(filterType, option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterBar; 