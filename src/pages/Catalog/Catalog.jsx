import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchCatalog } from "../../services/fetchCatalog";
import "./Catalog.scss";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCatalog()
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Не удалось загрузить товары");
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    console.log("Добавить в корзину", product);
  };

  const handleToggleFavorite = (product) => {
    // Здесь логика переключения состояния "избранного"
    console.log("Переключить избранное", product);
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="catalog">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
