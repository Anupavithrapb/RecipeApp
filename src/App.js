import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from './Components/Redux/actions/recipeActions';
import RecipeList from './Components/RecipeList';
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar';
import FavoritesList from './Components/favoriteList';
import './styles/main.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Recipe Finder</h1>
        <SearchBar />
        <FilterBar />
      </header>
      <main className="app-main">
        <div className="content-wrapper">
          <RecipeList />
          <aside className="favorites-sidebar">
            <FavoritesList />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default App;

