import ImageSlider from '../../components/ImageSlider/imageSlider'
import './itemPage.scss'
import Accordion from '../../components/Accordion/accordion'
import { sendItems } from "../../functions/items.js"
import Loading from '../../components/Loading/loading.jsx'
import useCartStore from '../../functions/useCartStore'
import { NavLink, useParams } from 'react-router-dom'
import Page from '../Page/Page.jsx'
import { useAxiosReq } from '../../functions/useAxiosReq.jsx'
export default function ItemPage() {
    let { itemId } = useParams();
    const { data, loading } = useAxiosReq({ defaultValue: [], method: "GET", url: "item?_id="+itemId })
    const {  addToCart, openCart } = useCartStore();

    function addToCartClickHandler() {
        addToCart(data)
        openCart()
    }
    return (
        <Page>
            <div className='ItemPage'>

                {data._id ? <> <div className='main'>

                    <div className='imageSlideContainer'>
                        <ImageSlider slide={false} images={data.images} />
                    </div>
                    <div className='itemDataContainer'>
                        <h2> {data.name}</h2>
                        <h4>מחיר: <span>{data.price}₪ </span></h4>
                        <button onClick={addToCartClickHandler} className='addToCartBtn'>הוספה לעגלה</button>
                        <NavLink to={"/shop"} className='backToStor'> חזרה למוצרים</NavLink>
                        <div className='accordionContainer'>
                            <Accordion defaultOpen={!true} title={"תיאור המוצר"}>
                                <p>{data.description}</p>
                            </Accordion>
                            <Accordion defaultOpen={!true} title={"אופן שימוש"}  >
                                <p>{data.usageDescription}</p>
                            </Accordion>
                            <Accordion defaultOpen={!true} title={"רכיבים"}>
                                <ul>{data.ingredients?.map((l, i) => (<li key={"il-ingri" + i}> {l}</li>))} </ul>
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
