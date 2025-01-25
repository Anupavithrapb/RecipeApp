// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers/rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Import your combined reducers

const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer to the store
});

export default store; // Export the store
