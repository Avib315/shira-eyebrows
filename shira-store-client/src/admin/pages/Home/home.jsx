import { useState } from 'react';
import MainSummary from '../../../components/MainSummary/mainSummary'
import './home.scss'
import { IoIosArrowDown } from "react-icons/io";
import AdminTextArea from "../../components/AdminTextArea/adminTextArea.jsx"
import AdminImagesContainer from '../../components/AdminImagesContainer/adminImagesContainer.jsx';
import AdminEditorPopUp from '../../components/AdminEditorPopUp/adminEditorPopUp.jsx';
import  usePopUpEditor from '../../store/OpenPopUpEditor'
export default function Home() {
  const [review, setReview] = useState(true)
  const { openEditor } = usePopUpEditor()
  function openImageEditor(id) {
    openEditor("הוספת תמונה", [{ element: "input", props: { type: "file" } }])
  }
  return (
    <div className='Home'>
      <div className='reviewPage'>

        <div className='titleAndBtnContainer'>
          <h2>תצוגת מסך הבית</h2>
          <button className={`ToggleReview${review ? " open" : " close"}`} onClick={() => { setReview(!review) }}><IoIosArrowDown /></button>
        </div>
        {<div className={`summaryContainer${review ? " open" : " close"}`}> <MainSummary /></div>}
      </div>
      <div className='userTools'>
        <div className='textAreaContainer'>
          <AdminTextArea title='טקסט מסך הבית' defaultValue={"ברוכים הבאים ל-Shira Eyebrows – קליניקה ואקדמיה המובילה בתחום עיצוב הגבות ומיקרובליידינג. אנו גאים להציע לכם את השירותים המקצועיים והטבעיים ביותר בתחום היופי. בקליניקה שלנו תוכלו ליהנות מטיפולי עיצוב גבות ברמה הגבוהה ביותר, תוך שימוש בטכניקות מתקדמות ומוצרים איכותיים. ובאתר שלנו תמצאו חנות אונליין למוצרי קוסמטיקה למקצועיות ולשימוש אישי."} />
        </div>
        <div className='btnContainer'>
          <button className='addImageBtnPopUp' onClick={openImageEditor}>הוספת תמונה חדשה</button>
        </div>
        <div className="imagesContainer">
          <AdminImagesContainer />
        </div>
      </div>
    </div>
  )
}
