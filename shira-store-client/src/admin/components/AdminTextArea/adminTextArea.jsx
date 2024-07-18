import './adminTextArea.scss'

export default function AdminTextArea({ placeholder = "הכנס נתונים", title = "--", ...props }) {
    return (
        <div className='AdminTextArea'>
            <h3>{title}</h3>
            <textarea  placeholder={placeholder}  {...props}>
            </textarea>
        </div>
    )
}
