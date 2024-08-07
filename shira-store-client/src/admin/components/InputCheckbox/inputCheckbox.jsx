import { useState } from 'react'
import './inputCheckbox.scss'
export default function InputCheckbox({ name, defaultValue,  title:placeholder }) {
    
    const [value, setValue] = useState(defaultValue)
    return (
        <>
            <label className='InputCheckbox'>
                <input
                    type="checkbox"
                    defaultChecked={defaultValue}
                    className='checkbox'
                    onChange={(e) => { setValue(e.target.checked) }}
                />
                <span>{placeholder}</span>
            </label>
            <input type="hidden" className='hiddenInput' readOnly value={value ? "true" : ""} name={name} />
        </>
    )
}
