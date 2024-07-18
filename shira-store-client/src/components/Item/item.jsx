import { NavLink } from 'react-router-dom'
import './item.scss'
import ImageSlider from '../ImageSlider/imageSlider'

export default function Item({ name, price, _id, inStock, images, tag }) {
    const handleChildClick = (event) => {
        console.log(event.target)
        event.stopPropagation();
    };
    return (
        <div className={`Item${inStock == 0 ? " disabledItem" : ""}`}>
            {tag && <div className='tag'>{tag} </div>}
            <div className='containerImageSlider xl-screen' onClick={handleChildClick}>

                <ImageSlider images={images} slide={false} />
            </div>
            <NavLink to={inStock > 0 ? "/shop/" + _id : ""}>
                <div className='containerImageSlider s-screen' onClick={handleChildClick}>

                    <ImageSlider images={images} slide={false} />
                </div>
                <p>{name}</p>
                <p className='price'>₪{price} </p>
            </NavLink>
            {inStock == 0 && <div className="outOfStock">חסר במלאי </div>}
        </div>
    )
}
