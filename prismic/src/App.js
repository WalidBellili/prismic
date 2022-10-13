import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
