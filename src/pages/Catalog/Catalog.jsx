import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchCatalog } from "../../services/fetchCatalog";
import "./Catalog.scss";
import { useStore } from "../../context/StoreContext";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получаем функции из глобального контекста
  const { addToCart, toggleFavorite } = useStore();

  useEffect(() => {
    fetchCatalog()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Не удалось загрузить товары");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="catalog">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
            onToggleFavorite={() => toggleFavorite(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
