import './tableOrder.scss'
import { sendItems } from "../../functions/items"
import { useEffect, useState } from 'react'
import useCartStore from '../../functions/useCartStore';
export default function TableOrder() {
    const { cartData, calcPriceInCart } = useCartStore();
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
    function calcSumItems(arr = cartData || []) {
        return Math.round(arr.reduce((sum, item) => sum + item.price, 0) * 100) / 100;
    }
    return (<>
        {cartData.length >=  1 && <div className='TableOrder'>
            <h2>סיכום הזמנה</h2>
            {cartData.length >= 1 && cartData.map((item, i) => (
                <div className='itemOrderDisplay' key={"itemOrderDisplay-key-" + i}>
                    <img src={item.images[0].src} alt={item.images[0].alt} />
                    <p className='p name'>{item.name}</p>
                    <p className='p inCart'>x{item.inCart}</p>
                    <p className='p'>{item.price}₪ </p>

                </div>
            ))}
            <div className='calcAll'>
                <h3>סכום ביניים</h3>
                <h2>
                    {calcPriceInCart()}₪
                </h2>

            </div>
        </div>}
    </>
    )
}
