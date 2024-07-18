import './button.scss'

export default function Button({  black ,title, ...props  }) {
    return (
        <button className={`Button ${black ? "black" : "white"}`} {...props}>
            {title}
        </button>
    )
}
