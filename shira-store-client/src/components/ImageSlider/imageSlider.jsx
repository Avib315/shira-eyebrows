import { useEffect, useState } from 'react'
import './imageSlider.scss'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useSwipeable } from 'react-swipeable';

export default function ImageSlider({ images = [], slide = true, slideTiming = 3000 }) {
    const [imageI, setImageIndex] = useState(0)
    function slideHandler(num, canMove, action) {

        if (canMove) {
            setImageIndex(action)
            return
        }
        setImageIndex(num)
    }
    const handlers = useSwipeable({
        onSwipedLeft: slideRight,
        onSwipedRight:slideLeft ,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        directionalOffset: 200, // Adjust offset as needed

    });
    function slideLeft() {
        slideHandler(imageI + 100, imageI == 0, (images.length - 1) * -100)
    }
    function slideRight() {
        slideHandler(imageI - 100, Number(images.length) - 1 === imageI / -100, 0)
    }
    useEffect(() => {

        let interval;
        if (slide) {
            interval = setInterval(() => {
                slideHandler(imageI - 100, imageI === (images.length - 1) * -100, 0);
            }, 3000); // Adjust interval time as needed
        }

        return () => clearInterval(interval);
    }, [imageI, slide, images.length]);
    return (
        <div className='ImageSlider' {...handlers} >
            {images.map((img, i, arr) => (
                <div className='imageBtnContainer' key={"img-" + i + img.alt} style={{ transform: `translateX(${imageI}%)` }}>
                    {images.length > 1 && <button className='arrowBtn' onClick={slideRight}><IoMdArrowDropright /></button>}
                    <img src={img.src} alt={img.alt} />
                    {images.length > 1 && <button className='arrowBtn' onClick={slideLeft}><IoMdArrowDropleft /></button>}

                </div>
            ))}
            <div className='dotsContainer'>
                {images.length > 1 && images.map((o, i) => (<div key={"dots" + o.alt} className={`dots ${imageI / -100 == i ? "bigDot" : ""}`}></div>))}
            </div>
        </div>
    )
}
