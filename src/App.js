import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectDetailPage from "./pages/ProjectDetail";
import { data } from "./data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {data.map((project) => (
          <Route
            key={project.id}
            path={`/detail/:projectId`}
            element={<ProjectDetailPage />}
          />
        ))}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
