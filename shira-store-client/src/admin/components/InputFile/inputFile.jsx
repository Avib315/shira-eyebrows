import { useState } from 'react';
import './inputFile.scss';
import { LuImagePlus } from "react-icons/lu";
import { FaTrash } from 'react-icons/fa';

export default function InputFile({ name, defaultValue = [] }) {
    const [images, setImages] = useState(defaultValue);

    function loadImageHandler(e) {
        const file = e.target.files[0];
        if (file) {
            console.log('File selected:', file); // Debugging statement
            const reader = new FileReader();
            reader.onload = function(event) {
                console.log('FileReader result:', event.target.result); // Debugging statement
                const base64String = event.target.result.split(',')[1]; // Remove data URL part
                const imageObject = {
                    url: URL.createObjectURL(file),
                    base64: base64String
                };
                setImages([imageObject, ...images]);
            };
            reader.onerror = function(error) {
                console.log('Error reading file:', error); // Debugging statement
            };
            reader.readAsDataURL(file); // Convert file to base64 string
        } else {
            console.log('No file selected or file type is not Blob');
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
            {Array.isArray(images) && images.length > 0 && (
                <div className='imagesContainer'>
                    {images.map((image, index) => (
                        <div key={index} className='imageItem'>
                            <img src={image.url} alt="uploaded" />
                            <button
                                className='deleteImg'
                                onClick={() => removeImage(index)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
