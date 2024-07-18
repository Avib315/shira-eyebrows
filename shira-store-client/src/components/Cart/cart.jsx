import { NavLink, useNavigate } from 'react-router-dom';
import { usePopUp } from '../../functions/PopUpContext';
import './cart.scss';
import { IoMdClose } from "react-icons/io";
import { useCart } from '../../functions/CartContext';
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cartData, setCartData } = useCart();
  const { hidePopUp } = usePopUp();
  const navigate = useNavigate();
  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  function closeCartAndNavToStore() {
    hidePopUp();
    navigate("/shop");
  }
  function closeCartAndNavToCheckOut() {
    hidePopUp();
    navigate("/checkout");
  }
  function calcSumItems(arr = cartData.items || []) {
    return Math.round(arr.reduce((sum, item) => sum + item.price, 0) * 100) / 100;
  }

  return (
    <div className='Cart'>
      <div className='cartContainer' onClick={handleChildClick}>
        <div className='btnAndTitleContainer'>
          <h2>סל הקניות שלך ({cartData.items.length})</h2>
          <button onClick={hidePopUp}><IoMdClose /></button>
        </div>
        {cartData.items.length > 0 ? <>
          <div className='itemsContainer'>
            {cartData.items.map((item) => (
              <div className='item' key={item?._id}>
                <img className='img' src={item?.images[0].src} alt={item.name} />
                <p className='name'>{item.name}</p>
                <p className='price'>{item.price}₪ </p>
                <button className='deleteFromCartBtn' onClick={() => setCartData({ ...cartData, items: cartData.items.filter((i) => i.id !== item.id) })}><FaTrash /></button>
              </div>
            ))}
          </div>
          <div className='sumItems'> 
            <h2>סה"כ:  {calcSumItems()} ₪</h2>
            
          </div>
          <button className={"btnCheckOut"} onClick={closeCartAndNavToCheckOut}>מעבר לתשלום</button>
        </>
          : (
            <p className='noItemP'>
             סל הקניות שלך ריק כרגע.
              <button onClick={closeCartAndNavToStore} className='toTheStoreBtn'> למעבר לחנות </button>
            </p>
          )}

      </div>
    </div>
  );
}
