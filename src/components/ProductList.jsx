import { useDispatch } from "react-redux";
import { plantData } from "../data/plants.js";
import { addItem } from "../store/CartSlice.jsx";

const ProductList = () => {
  const dispatch = useDispatch();
  const categories = [...new Set(plantData.map((plant) => plant.category))];

  return (
    <section className="page">
      <h2>Plant Collection</h2>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="product-grid">
            {plantData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>{plant.description}</p>
                  <div className="price-row">
                    <span>${plant.price.toFixed(2)}</span>
                    <button
                      className="secondary-btn"
                      onClick={() => dispatch(addItem(plant))}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
