import { useState } from 'react';
import './inputFile.scss';
import { LuImagePlus } from "react-icons/lu";
import { FaTrash } from 'react-icons/fa';
import { FaCloudArrowUp } from "react-icons/fa6";
export default function InputFile({ name, defaultValue = [] }) {
    const [images, setImages] = useState(defaultValue);
    const [base64, setBase64] = useState(defaultValue)
    async function loadImageHandler(e) {
        let file = e.target.files[0];
        
        if (file) {
            setImages([{src:URL.createObjectURL(file) , name:file.name}, ...images]);
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
    const toggleImageView = (e) => {
        const image = e.target.src;
        console.log('image', image);
    }
    return (
        <div className='InputFile'>
            <label >
                <div className='iconAnTitleContainer'>
                    <FaCloudArrowUp />
                    <span>בחר תמונה </span>
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
                        <img src={image.src} alt="uploaded" onClick={toggleImageView}/>
                        <p>{image.name}</p>
                        <div
                            className='deleteImg'
                            onClick={() => removeImage(index)}
                        >
                            <FaTrash />
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    );
}
