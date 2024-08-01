import { useEffect, useState } from 'react'
import ImageSlider from '../../components/ImageSlider/imageSlider'
import './itemPage.scss'
import Accordion from '../../components/Accordion/accordion'
import { sendItems } from "../../functions/items.js"
import Loading from '../../components/Loading/loading.jsx'
import useCartStore  from '../../functions/useCartStore'
import { NavLink, useParams } from 'react-router-dom'
import Page from '../Page/Page.jsx'
export default function ItemPage() {
    const [item, setItem] = useState({})
    const { cartData, setCartData, openCart } = useCartStore();
    let { itemId } = useParams();
    const getItem = async function () {
        const res = await sendItems(itemId)
        setItem(res)
    }
    useEffect(() => {
        getItem()
    }, [])
    function addToCartClickHandler() {
        setCartData({ ...cartData, items: [...cartData.items, item] })
        openCart()
    }
    return (
        <Page>
            <div className='ItemPage'>

                {item._id ? <> <div className='main'>

                    <div className='imageSlideContainer'>
                        <ImageSlider slide={false} images={item.images} />
                    </div>
                    <div className='itemDataContainer'>
                        <h2> {item.name}</h2>
                        <h4>מחיר: <span>{item.price}₪ </span></h4>
                        <button onClick={addToCartClickHandler} className='addToCartBtn'>הוספה לעגלה</button>
                        <NavLink to={"/shop"} className='backToStor'> חזרה למוצרים</NavLink>
                        <div className='accordionContainer'>
                            <Accordion defaultOpen={!true} title={"תיאור המוצר"}>
                                <p>{item.description}</p>
                            </Accordion>
                            <Accordion defaultOpen={!true} title={"אופן שימוש"}  >
                                <p>{item.usageDescription}</p>
                            </Accordion>
                            <Accordion defaultOpen={!true} title={"רכיבים"}>
                                <ul>{item.ingredients?.map((l, i) => (<li key={"il-ingri" + i}> {l}</li>))} </ul>
                            </Accordion>
                        </div>
                    </div>
                </div>
                </>
                    : <Loading />}
            </div>
        </Page>
    )
}
