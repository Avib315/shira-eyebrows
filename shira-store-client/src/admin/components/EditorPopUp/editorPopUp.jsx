import './editorPopUp.scss'
import { IoMdClose } from "react-icons/io";
import usePopUpStore from '../../../functions/usePopUpStore';
import InputType from '../InputType/inputType';
export default function EditorPopUp({ title = "הוספת מוצר", formArray = [], submitHandler , loading = false}) {
    const { hidePopUp } = usePopUpStore();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        let formValues = []
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        submitHandler(formValues);
        // hidePopUp()
    }
    return (
        <div className='EditorPopUp'>
            <button className='xBtn' onClick={hidePopUp}><IoMdClose /></button>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className='containerInput'>
                    {formArray.map((e, i) => {
                        return <InputType key={"AED" + i} type={e.type} name={e.key} {...e} />
                    })}
                </div>
                <div className="btnContainer">
                    <button disabled={loading} className='submitBtn' type='submit'>שמירה</button>
                </div>
            </form>
        </div>
    )
}
