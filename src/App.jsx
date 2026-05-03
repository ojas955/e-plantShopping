import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import AboutUs from "./components/AboutUs.jsx";
import CartPage from "./pages/CartPage.jsx";

const App = () => {
  const navigate = useNavigate();

  const LandingView = () => (
    <section className="landing background-image">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Paradise Nursery brings curated house plants to calm your space. Find
          aromatic favorites and medicinal varieties hand-picked for your home.
        </p>
        <button className="primary-btn" onClick={() => navigate("/products")}>
          Get Started
        </button>
      </div>
    </section>
  );

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
