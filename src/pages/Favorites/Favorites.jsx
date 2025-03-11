import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Favorites = () => {
  const { favorites } = useContext(StoreContext);

  return (
    <div className="favorites">
      <h2>Избранные товары</h2>
      {favorites.length === 0 ? (
        <p>У вас нет избранных товаров.</p>
      ) : (
        <div className="favorites__list">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
