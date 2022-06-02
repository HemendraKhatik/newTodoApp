import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";



function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
