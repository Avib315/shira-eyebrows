import { useState } from 'react';
import './inputFile.scss';
import { LuImagePlus } from "react-icons/lu";
import { FaTrash } from 'react-icons/fa';

export default function InputFile({ name, defaultValue = [] }) {
    const [images, setImages] = useState(defaultValue);

    function loadImageHandler(e) {
        let file = e.target.files[0];
        if (file) {
            setImages([URL.createObjectURL(file), ...images]);
        }
    }
    function removeImage(index) {
        setImages(images.filter((_, i) => i !== index));
    }
    
    return (
        <div className='InputFile'>
            <label htmlFor={name}>
                <div className='iconAnTitleContainer'>
                    <LuImagePlus /> <p>בחר תמונה</p>
                </div>
                <input
                    onChange={loadImageHandler}
                    name={name}
                    id={name}
                    type='file'
                    accept='image/*'
                />
            </label>
            {Array.isArray(images)&&images.length > 0&&<div className='imagesContainer'>
                {images.map((image, index) => (
                    <div key={index} className='imageItem'>
                        <img src={image} alt="uploaded" />
                        <button
                            className='deleteImg'
                            onClick={() => removeImage(index)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>}
        </div>
    );
}
