import AdminFormCreator from '../AdminFormCreator/adminFormCreator';
import './adminEditorPopUp.scss'
import { IoMdClose } from "react-icons/io";
import usePopUpStore from '../../../functions/usePopUpStore';
export default function AdminEditorPopUp({ title = "הוספת מוצר" ,formArray = [], submitHandler}) {
    const { hidePopUp } = usePopUpStore();
    const handleChildClick = (event) => {
        event.stopPropagation();
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        submitHandler();
      }
    return (
        <div className='AdminEditorPopUp' onClick={handleChildClick}>
            <button className='xBtn' onClick={hidePopUp}><IoMdClose/></button>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className='containerInput'>
            <AdminFormCreator formArray={formArray}/>
                </div>
            <div className="btnContainer">
            <button type='submit'>שמירה</button>
            </div>
            </form>
        </div>
    )
}
