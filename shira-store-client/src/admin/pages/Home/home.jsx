import { useState } from 'react';
import MainSummary from '../../../components/MainSummary/mainSummary'
import './home.scss'
import { IoIosArrowDown } from "react-icons/io";
import AdminTextArea from "../../components/AdminTextArea/adminTextArea.jsx"
import AdminInputFile from '../../components/AdminInputFile/adminInputFile.jsx';
import AdminImagesContainer from '../../components/AdminImagesContainer/adminImagesContainer.jsx';
export default function Home() {
  const [review, setReview] = useState(true)
  return (
    <div className='Home'>
      <div className='reviewPage'>

        <div className='titleAndBtnContainer'>
          <h2>תצוגת מסך הבית</h2>
          <button className={`ToggleReview${review ? " open" : " close"}`} onClick={() => { setReview(!review) }}><IoIosArrowDown /></button>
        </div>
        {<div className={`summaryContainer${review ? " open" : " close"}`}> <MainSummary /></div> }
      </div>
      <div className='userTools'>
        <div className='textAreaContainer'>
          <AdminTextArea title='טקסט מסך הבית' defaultValue={"ברוכים הבאים ל-Shira Eyebrows – קליניקה ואקדמיה המובילה בתחום עיצוב הגבות ומיקרובליידינג. אנו גאים להציע לכם את השירותים המקצועיים והטבעיים ביותר בתחום היופי. בקליניקה שלנו תוכלו ליהנות מטיפולי עיצוב גבות ברמה הגבוהה ביותר, תוך שימוש בטכניקות מתקדמות ומוצרים איכותיים. ובאתר שלנו תמצאו חנות אונליין למוצרי קוסמטיקה למקצועיות ולשימוש אישי."} />
        </div>
        <div className='textAreaContainer'>
          <AdminInputFile name={"addImage"} />
        </div>
        <div className="imagesContainer">
        <AdminImagesContainer/>
        </div>
      </div>
    </div>
  )
}
