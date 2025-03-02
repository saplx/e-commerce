import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Cart from "./pages/Cart/Cart.jsx";

import "./styles/index.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
