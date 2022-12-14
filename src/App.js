import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.scss";
import data from "./data.json";
// Pages
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <a href="#content" className="skip-to-content">
        skip to content
      </a>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/" element={<Destination data={data} />} />
          <Route path="/crews/" element={<Crew data={data} />} />
          <Route path="/technologies/" element={<Technology data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
