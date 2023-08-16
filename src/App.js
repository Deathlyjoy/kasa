// ----- Import de React, BrowserRouter, Routes et Route depuis la bibliothèque react-router-dom -----
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----- Import fichier de style -----
import './style/App.css';

// Import des composants de pages
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter> {/* Utilisation du composant BrowserRouter pour gérer la navigation */}
      <Routes> {/* Utilisation du composant Routes pour définir les routes */}
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour la page "A Propos" */}
        <Route path="/location/:id" element={<Location />} /> {/* Route pour une page d'hébergement spécifique */}
        <Route path="*" element={<Error />} /> {/* Route pour toutes les autres URL (erreur 404) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/* Version orignale */
// import logo from './assets/logo.svg';
// import './style/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
