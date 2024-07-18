import './tableOrder.scss'
import { sendItems } from "../../functions/items"
import { useEffect, useState } from 'react'
import { useCart } from '../../functions/CartContext';
export default function TableOrder() {
    const { cartData } = useCart();
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
                <div className='itemOrderDisplay' key={item.id}> 
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

        // <table className='TableOrder'>
        //     <thead>
        //         <tr>
        //             <th>מ"ס:</th>
        //             <th>תיאור:</th>
        //             <th>מוצר:</th>
        //             <th>כמות:</th>
        //             <th>מחיר:</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {items.map((item,i) => (
        //             <tr key={item.id}>
        //                 <td>{i + 1}</td>
        //                 <td><img src={item.images[0].src} alt={item.images[0].alt} /> </td>
        //                 <td>{item.name}</td>
        //                 <td>{item.inStock}</td>
        //                 <td>{item.price}₪ </td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
    )
}
