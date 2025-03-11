import { useStore } from "../../context/StoreContext";
import "./Cart.scss";

const Cart = () => {
  const { addToCart, deleteFromCart, cart } = useStore();

  if (cart.length === 0) return <div className="cartEmpty">Корзина пуста</div>;

  return (
    <div className="container">
      <div className="cart">
        <h2>Корзина</h2>
        {cart.map((item) => (
          <div key={item.id} className="cartItem">
            <div className="cartItem__info">
              <img
                src={item.mainImage}
                alt={item.description}
              />
              <div className="info-content">
                <h3>{item.name}</h3>
                <p>Цена: {item.price} ₽</p>
                <div className="quantity-control">
                  <button onClick={() => deleteFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="cartTotal">
          Всего товаров: {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </div>
        <div className="cartTotal">
          Общая сумма: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₽
        </div>
      </div>
      <button className="cart-offer">Оформить заказ</button>
    </div>
  );
};

export default Cart;
