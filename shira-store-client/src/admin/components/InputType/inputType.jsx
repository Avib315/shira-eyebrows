import InputFile from '../InputFile/inputFile'
import './inputType.scss'

export default function InputType({ type, props, defaultValue }) {
    switch (type) {
        case "textarea":
            return (<textarea className='textarea' defaultValue={defaultValue} placeholder={"כתוב כאן"}  {...props}></textarea>)
        case "img":
            return <InputFile type={type}  {...props} defaultValue={defaultValue} />
        default:
            return <label className='input'>
                <input type={type} defaultValue={defaultValue} {...props} />
                <p>{props.placeholder}</p>
            </label>
    }
}

