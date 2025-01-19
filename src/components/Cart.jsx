import items from '../assets/model/model';
import "../assets/stylesheets/cart.css";
import { NavLink } from 'react-router';

function CartItem({ name, qty, price, id, path, changeItemQty }) {
  return (<div className="cart-item-wrapper">
  <div className="item">
    <NavLink className="cart-sub-link" to={"/view/" + id}>
      <div className='item-meta'>
        <div className='name'>{name}</div>
        {/* <div>Quantity: {qty}</div> */}
        <div style={{paddingTop: "5px", paddingBottom: "5px"}}>Price: $ {price} </div>
      </div>
      <div className='item-img-wrapper'>
        <img className="cart-sub-img" src={path} />
      </div>
    </NavLink>
  </div>
  <div className="cart-item-btn-list">
    <div style={{whiteSpace: "nowrap"}}>
      <button 
        onClick={() => changeItemQty(id, -1)} 
        className="cart-item-btns" 
        style={{marginLeft: "10px", marginRight: "10px"}}
      >-</button>
      {qty}
      <button 
        onClick={() => changeItemQty(id, 1)} 
        className="cart-item-btns" 
        style={{marginLeft: "10px"}}
      >+</button>
    </div>
  </div>
  </div>);
}

function Cart({ cartItems, changeItemQty }) {
  const itemCards = [];

  const orderList = [];
  let sum = 0;

  for(let i=0; i<cartItems.length; i++) {
    const item = items.find((it) => it.oid === cartItems[i].itemId);
    itemCards.push(<CartItem
      key={cartItems[i].itemId}
      name={item.name}
      qty={cartItems[i].itemQty}
      id={item.oid}
      path={item.src}
      price={item.price}
      changeItemQty={changeItemQty}
    />);

    const order = { name: item.name, price: item.price, quantity: cartItems[i].itemQty };
    sum += order.price * order.quantity;
    orderList.push(order);
  }

  return (<>
      <h1>Shopping Cart</h1>
      {(itemCards.length > 0) && <div className="cart-main">
        <div className="items">
          {itemCards}
        </div>
        <div className="receipt">
          <div className="order-summary">Summary</div>
          <div className="order">{orderList.map(ord => 
            <div className="order-item-wrapper" key={crypto.randomUUID()}>
            <div className="order-item">
              <div className="order-name">{ord.name}</div>
              <div className="order-price">$ {(ord.price * ord.quantity).toFixed(2)}</div>
            </div>
            <div className="order-qty">Qty: {ord.quantity}</div>
            </div>
          )}</div>

          <div className="total">Total: $ {(Math.round(sum * 100) / 100).toFixed(2)}</div>
        </div>
      </div>}

      {(itemCards.length === 0) && <div className="cart-empty">
        <NavLink to="/">
          <img className="cart-empty-logo" src="/src/assets/images/logo.png" />  
          <h1>Your cart is empty!</h1>
        </NavLink>
      </div>}
  </>);
  }

export default Cart;