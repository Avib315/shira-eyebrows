import { useState } from 'react';
import './adminInputFile.scss'
import { LuImagePlus } from "react-icons/lu";
export default function AdminInputFile({ name }) {
    const [progress , setProgress] = useState({text:"בחר תמונה" , })
    const [image, setImage] = useState(null)
    function loadImageHandler(e){
        let file = e.target.files[0]
        console.log("___________")
        console.log(file)
        setImage(image)
        console.log("___________")
    }
    return (
        <div className='AdminInputFile'>
            <h3>הוספת תמונה</h3>
            <label  htmlFor={name}>
                {!image&&<div className='iconAnTitleContainer'> <LuImagePlus /> <p>בחר תמונה</p></div>}
                <input onChange={loadImageHandler} name={name} id={name} type='file' accept='image/*' />
            </label>
        </div>
    )
}
