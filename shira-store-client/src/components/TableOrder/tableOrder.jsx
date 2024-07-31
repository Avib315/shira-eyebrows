import './tableOrder.scss'
import { sendItems } from "../../functions/items"
import { useEffect, useState } from 'react'
import useCartStore  from '../../functions/useCartStore';
export default function TableOrder() {
    const { cartData } = useCartStore();
    const [items, setItems] = useState([])
    const [openOrder, setOpenOrder] = useState(true)
    console.log(cartData)
    const getData = async () => {
        const res = await sendItems()
        setItems(res)
    }
    useEffect(() => {
        getData()
    }, [])
    function calcSumItems(arr = cartData.items || []) {
        return Math.round(arr.reduce((sum, item) => sum + item.price, 0) * 100) / 100;
      }
    return (
        <div className='TableOrder'>
            <h2>סיכום הזמנה</h2>
            {items.length > 1 && items.map((item, i) => (
                <div className='itemOrderDisplay' key={"itemOrderDisplay-key-" + i}> 
                       <img src={item.images[0].src} alt={item.images[0].alt} />
                        <p className='p name'>{item.name}</p>
                        <p className='p'>{item.inStock}</p>
                        <p className='p'>{item.price}₪ </p>
                  
                </div>
            ))}
            <div className='calcAll'>
                <h3>סכום ביניים</h3>
                <h2>
                {calcSumItems(items)}₪
                </h2>
                
                </div>
        </div>
    )
}
