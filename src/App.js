import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Stats from "./page/Stats";

/**
 * Création d'un router
 * @returns Retourne les informations nécéssaires à la redirection des pages
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="p12-sportsee/" element={<Home />} />
          <Route path="/statistiques/:userId" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
