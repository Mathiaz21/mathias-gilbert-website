import { Routes, Route, BrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/homepage/HomePage.tsx";
import { HireMePage } from "./pages/hireMePage/HireMePage.tsx";

import { Root } from "./highLevelComponents/root/Root.tsx";
import './App.css';

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hire-me" element={<HireMePage />} />
        </Routes>
      </BrowserRouter>
    </Root>
  );
}

export default App;
