import './ProductCard.scss';

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const {
    mainImage,
    name,
    price,
    oldPrice,
    description,
    variations,
    isFavorite
  } = product;

  return (
    <div className="productCard">
      <div className="productCard__imageWrapper">
        <img
          src={mainImage}
          alt={name}
          className="productCard__image"
        />
        <button 
          className="productCard__favorite" 
          onClick={() => onToggleFavorite(product)}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="productCard__content">
        <h3 className="productCard__title">{name}</h3>
        <div className="productCard__price">
          {oldPrice && (
            <span className="productCard__oldPrice">
              {oldPrice} ₽
            </span>
          )}
          <span className="productCard__currentPrice">
            {price} ₽
          </span>
        </div>
        <p className="productCard__description">
          {description}
        </p>
        {variations && (
          <div className="productCard__variations">
            {Object.entries(variations).map(
              ([variationName, options]) => (
                <div
                  key={variationName}
                  className="productCard__variation"
                >
                  <label>Цвет:</label>
                  <select className="productCard__select">
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )
            )}
          </div>
        )}
        <div className="productCard__actions">
          <button
            className="productCard__addToCart"
            onClick={() => onAddToCart(product)}
          >
            Добавить в корзину
          </button>
          {/* Здесь можно разместить блок для контроля количества, если нужно */}
          {/* <div className="quantity-control">
              <button onClick={() => onDecrease(product)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => onAddToCart(product)}>+</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
