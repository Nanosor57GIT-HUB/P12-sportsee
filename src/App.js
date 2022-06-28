import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Stats from "./page/Stats";


function App() {


     

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistiques/:userId" element={<Stats />} />
        </Routes>
      </BrowserRouter>
      {/* <Stats />  */}
    </div>
  );
}

export default App;

//https://stackblitz.com/edit/react-api-service?file=Api.service.js