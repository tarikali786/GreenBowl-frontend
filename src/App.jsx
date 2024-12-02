import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, HomeLayout, Recipe } from "./Component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="recipe-list" element={<Recipe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
