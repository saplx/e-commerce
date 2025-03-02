import { useStore } from "../../context/StoreContext";
import "./Cart.scss";

const Cart = () => {
  const { cart } = useStore();

  if (cart.length === 0) return <div className="cartEmpty">Корзина пуста</div>;

  return (
    <div className="container">
      <div className="cart">
        <h2>Корзина</h2>
        {cart.map((item) => (
          <div key={item.id} className="cartItem">
            <div className="cartItem__info">
              <img src={item.mainImage} alt={item.description} style={{maxWidth: 250,}}/>
              <h3>{item.name}</h3>
              <p>Цена: {item.price} ₽</p>
              <p>Количество: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="cartTotal">
          Всего товаров: {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
