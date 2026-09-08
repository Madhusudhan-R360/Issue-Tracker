import Header from "./components/Header";
import Footer from "./components/Footer";

import { Link, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />

      <nav>
        <Link to="/">Dashboard</Link>
        <br />

        <Link to="/issues">Issues</Link>
        <br />

        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/issues"
          element={<Issues />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;