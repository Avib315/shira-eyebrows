import { NavLink } from 'react-router-dom'
import './item.scss'
import ImageSlider from '../ImageSlider/imageSlider'

export default function  Item({ name, price, _id, quantity, images, tag , mkt }) {
    const handleChildClick = (event) => {
        console.log(event.target)
        event.stopPropagation();
    };
    return (
        <div className={`Item${quantity == 0 ? " disabledItem" : ""}`}>
            {tag && <div className='tag'>{tag} </div>}
            <div className='containerImageSlider xl-screen' onClick={handleChildClick}>

                <ImageSlider images={images} slide={false} />
            </div>
            <NavLink to={quantity > 0 ? "/shop/" + _id : ""}>
                <div className='containerImageSlider s-screen' onClick={handleChildClick}>

                    <ImageSlider images={images} slide={false} />
                </div>
                <p className='nameP'>{name}</p>
                <p className='price'>₪{price} </p>
            </NavLink>
            {quantity == 0 && <div className="outOfStock">חסר במלאי </div>}
        </div>
    )
}
