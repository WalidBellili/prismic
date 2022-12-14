import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import "./App.css";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
