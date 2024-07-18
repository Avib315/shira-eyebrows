import "./input.scss"
import React from "react"
export function Input(props) {
    return <label className="Input">
        <input required  {...props} />
    </label>
}