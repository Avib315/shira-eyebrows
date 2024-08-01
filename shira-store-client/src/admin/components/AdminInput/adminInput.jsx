import './adminInput.scss'

export default function AdminInput({ title, type = "text", defaultValue, ...props }) {
    return (
        <label className='AdminInput'>
            <input type={type} defaultValue={defaultValue} {...props} />
            <p>{props.placeholder}</p>
        </label>
    )
}
