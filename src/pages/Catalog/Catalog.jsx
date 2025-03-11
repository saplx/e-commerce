import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchCatalog } from "../../services/fetchCatalog";
import "./Catalog.scss";
import { useStore } from "../../context/StoreContext";
import Pagination from "../../components/Pagination";

const Catalog = () => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 3;
  const startIndex = page * itemsPerPage;
  const currentCollections = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const { addToCart, toggleFavorite, deleteFromCart } = useStore();

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
        <div className="catalog__products">
          {currentCollections.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        <Pagination
          totalItems={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Catalog;
