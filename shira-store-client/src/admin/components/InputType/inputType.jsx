import InputCheckbox from '../InputCheckbox/inputCheckbox'
import InputFile from '../InputFile/inputFile'
import './inputType.scss'

export default function InputType({ type, name, ...e }) {
    const inputAttributes = {
        placeholder: e.title,
        name: name,
        type: type,
        defaultValue: e.defaultValue
    }
    switch (type) {
        case "textarea":
            return (<textarea required className='textarea' {...inputAttributes}></textarea>)
        case "img":
            return <InputFile  {...inputAttributes} />

        case "boolean":
            return <InputCheckbox {...inputAttributes} />
        case "id":
            return <>
                {(inputAttributes.defaultValue != "") && (<label className='input disabledInput'>
                    <input {...inputAttributes} readOnly />
                    <p>{inputAttributes.placeholder}</p>
                </label>)}</>

        default:
    return <label className='input'>
        <input required={true} {...inputAttributes} step={".01"} />
        <p>{inputAttributes.placeholder}    </p>
    </label>
}
}

