import { useState } from 'react';
import './inputFile.scss';
import { LuImagePlus } from "react-icons/lu";
import { FaTrash } from 'react-icons/fa';

export default function InputFile({ name, defaultValue = [] }) {
    const [images, setImages] = useState(defaultValue);
    const [base64, setBase64] = useState(defaultValue)
    async function loadImageHandler(e) {
        let file = e.target.files[0];
        if (file) {
            setImages([{src:URL.createObjectURL(file)}, ...images]);
            const converted = await convertBase64(file)
            setBase64([converted, ...base64]);
        }
    }
    function removeImage(index) {
        setImages(images.filter((_, i) => i !== index));
        setBase64(base64.filter((_, i) => i !== index));
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);

            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    return (
        <div className='InputFile'>
            <label >
                <div className='iconAnTitleContainer'>
                    <LuImagePlus /> <p>בחר תמונה</p>
                </div>
                <input
                    onChange={loadImageHandler}
                    type='file'

                    />
            </label>
            <input
                type="text"
                name={name}
                readOnly
                value={JSON.stringify(base64)}
                className='hiddenInput' />
            {Array.isArray(images) && images.length > 0 && <div className='imagesContainer'>
                {images.map((image, index) => (
                    <div key={index} className='imageItem'>
                        <img src={image.src} alt="uploaded" />
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
