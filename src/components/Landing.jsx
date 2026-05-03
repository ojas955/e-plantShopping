import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Curated house plants for calm spaces. Discover aromatic and medicinal
          varieties hand-picked for your home.
        </p>
        <Link to="/products" className="primary-btn">
          Shop Plants
        </Link>
      </div>
    </section>
  );
};

export default Landing;
