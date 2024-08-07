import { useState } from "react";
// import { timeFormat } from "../../../functions/timeFormat";
export default function TdGeneric({ type, value }) {
    const [showElement, setElement] = useState(false)
    function toggleElement() {
        setElement(!showElement)
    }
    switch (type) {
        case "boolean":
            return <input type="checkbox" readOnly checked={value} />;
        case "img":
            return <>
                <img src={value && value[0]?.src} className="imgInTd" onClick={toggleElement} />
                {showElement && <div className="popUp" onClick={toggleElement}><img className="popUpImg" src={value && value[0]?.src} /> </div>}
            </>;
        case "date":
            return <p >{value}</p>;
        default:
            return <>
                <p className="pInTd" onClick={toggleElement}>{value} </p>
                {showElement && <div className="popUp" onClick={toggleElement}><p className="pPopUp">{value}</p> </div>}
            </>;
    }
}
