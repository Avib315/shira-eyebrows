import { useState } from 'react';
import './imageUploader.scss';
import { FaTrash } from 'react-icons/fa';
import { FaCloudArrowUp } from "react-icons/fa6";
export default function ImageUploader({ defaultValue = [] }) {
    const [images, setImages] = useState(defaultValue);
    async function loadImageHandler(e) {
        let file = e.target.files[0];

        if (file) {
            const converted = await convertBase64(file)
            setImages([{ src: URL.createObjectURL(file), name: file.name, file: converted }, ...images]);
            // setBase64([converted, ...base64]);
        }
    }
    function removeImage(index) {
        setImages(images.filter((_, i) => i !== index));
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
        <div className='ImageUploader'>
            <label >
                <div className='iconAnTitleContainer'>

                    {images.length < 3 ?
                        <>  <FaCloudArrowUp />  <span>בחר תמונה </span> </>
                        : <span>  לא ניתן להוסיף יותר משלושה תמונות בפעם אחת</span>}
                </div>
                <input
                    disabled={images.length === 3}
                    onChange={loadImageHandler}
                    type='file'

                />
            </label>

            {Array.isArray(images) && images.length > 0 && <div className='imagesContainer'>
                {images.map((image, index) => (
                    <div key={index} className='imageItem'>
                        <img src={image.src} alt="uploaded" onClick={toggleImageView} />
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
            {images.length > 0 && <button className='buttonUpload'>הוסף תמונות</button>}
        </div>
    );
}
