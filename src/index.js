// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your global CSS
import App from './App'; // Your main app component
import { Provider } from 'react-redux'; // Import Provider
import store from './Components/Redux/store'; // Import your Redux store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with the Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the HTML file's root element
);
