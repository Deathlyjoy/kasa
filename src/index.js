// ------ Import React et ReactDOM ------
import React from 'react';
import ReactDOM from 'react-dom/client';


// ------ Import fichier de style ------
import './style/index.scss';
// ------ Import Composant App ------
import App from './App';

import reportWebVitals from './reportWebVitals';

// ------ Création d'une racine ReactDOM à l'élément HTML avec l'ID "root" ------
const root = ReactDOM.createRoot(document.getElementById('root'));

// ------ Rendu de l'application dans la racine ------
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();