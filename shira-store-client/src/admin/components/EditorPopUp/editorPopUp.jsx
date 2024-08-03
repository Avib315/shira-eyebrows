import './editorPopUp.scss'
import { IoMdClose } from "react-icons/io";
import usePopUpStore from '../../../functions/usePopUpStore';
import InputType from '../InputType/inputType';
export default function EditorPopUp({ title = "הוספת מוצר" ,formArray = [], submitHandler}) {
    const { hidePopUp } = usePopUpStore();
    const handleChildClick = (event) => {
        event.stopPropagation();
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        let formValues = []
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        console.log(formValues)
        submitHandler(formValues);
      }
    return (
        <div className='EditorPopUp' onClick={handleChildClick}>
            <button className='xBtn' onClick={hidePopUp}><IoMdClose/></button>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className='containerInput'>
                {formArray.map((e , i) => <InputType key={"AED" + i} type={e.type} defaultValue={e.defaultValue} props={e.props} />)}
                </div>
            <div className="btnContainer">
            <button className='submitBtn' type='submit'>שמירה</button>
            </div>
            </form>
        </div>
    )
}
