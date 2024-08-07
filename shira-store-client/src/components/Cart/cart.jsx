import {  useNavigate } from 'react-router-dom';
import usePopUpStore  from '../../functions/usePopUpStore';
import './cart.scss';
import { IoMdClose } from "react-icons/io";
import useCartStore from '../../functions/useCartStore';
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cartData, removeFromCart , sumItemsInCart , addToCart , calcPriceInCart} = useCartStore();
  const { hidePopUp } = usePopUpStore();
  const navigate = useNavigate();
  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  function closeCartAndNavTo(to) {
    hidePopUp();
    navigate(to);
  }

  return (
    <div className='Cart'>
      <div className='cartContainer' onClick={handleChildClick}>
        <div className='btnAndTitleContainer'>
          <h2>סל הקניות שלך ({sumItemsInCart()})</h2>
          <button onClick={hidePopUp}><IoMdClose /></button>
        </div>
        {cartData.length > 0 ? <>
          <div className='itemsContainer'>
            {cartData.map((item) => (
              <div className='item' key={item?._id}>
                <img className='img' src={item?.images[0].src} alt={item.name} />
                <p className='name'>{item.name}</p>
                <p className='price'>{item.price}₪ </p>
                <div className='addOrDeleteItemsFromCartContainer'>

                <button className='deleteFromCartBtn' onClick={() => {removeFromCart(item)}}>-</button>
                <p className='inCart'>{item.inCart} </p>
                <button className='deleteFromCartBtn' onClick={() => {addToCart(item)}}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className='sumItems'> 
            <h2>סה"כ:  {calcPriceInCart()} ₪</h2>
            
          </div>
          <button className={"btnCheckOut"} onClick={()=>{closeCartAndNavTo("/checkout")}}>מעבר לתשלום</button>
        </>
          : (
            <p className='noItemP'>
             סל הקניות שלך ריק כרגע.
              <button onClick={()=>{closeCartAndNavTo("/shop")}} className='toTheStoreBtn'> למעבר לחנות </button>
            </p>
          )}

      </div>
    </div>
  );
}
