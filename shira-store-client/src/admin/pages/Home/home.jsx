import { useState } from 'react';
import MainSummary from '../../../components/MainSummary/mainSummary'
import './home.scss'
import { IoIosArrowDown } from "react-icons/io";
import usePopUpEditor from '../../store/OpenPopUpEditor'
import formTemplate from "./formTemplate.json"
export default function Home() {
  const [review, setReview] = useState(true)
  const { openEditor } = usePopUpEditor()
  function openImageEditor(id) {
    openEditor("עריכת פתיח הבית", formTemplate)
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
        <div className='btnContainer'>
          <button className='addImageBtnPopUp' onClick={openImageEditor}>עריכת מסך הבית </button>
        </div>
      </div>
    </div>
  )
}
