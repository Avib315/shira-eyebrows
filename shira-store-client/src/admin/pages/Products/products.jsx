import './products.scss'
import Table from "../../components/Table/table"
import { useEffect, useState } from 'react'
import PopUp from '../../components/PopUp/popUp'
import thead from "./jsonData.json"
import usePopUpEditor from '../../store/OpenPopUpEditor'
import formTemplate from "./formTemplate.json"
import usePopUpStore from '../../../functions/usePopUpStore'
import useApiStore from "./useApiStore"
export default function Products() {
  const { get, post, put, del, data } = useApiStore()
  const { showPopUp, setPopValue, hidePopUp } = usePopUpStore();
  const { openEditor } = usePopUpEditor();
  useEffect(() => { get() }, [])



  function popUpDelete({ id }) {
    const openPopUpDelete = () => (
      <PopUp
        title={"המוצר ימחק לצמיתות האם להמשיך?"}
        primeBtn={{ text: "מחק", func: () => handleDelete(id) }}
        subBtn={{ text: "ביטול", func: hidePopUp }}
      />
    );

    setPopValue(openPopUpDelete);
    showPopUp(false);
  }

  const handleDelete = (id) => {
    del(id);
    hidePopUp();
  };

  function popUpEditor(title, formArray = [], submit = () => { }) {
    openEditor(title, formArray, submit);
  }

  function getDefaultValue(objSelected) {

    return formTemplate.map(e => ({
      ...e,
      defaultValue: objSelected[e.props?.name] || e.defaultValue // Assuming 'e.props.name' is the key
    }));
  }

  return (
    <div className='Products'>
      <div className='mainContainer'>
        <div className="containerTable">
          <Table thead={thead} tbody={data} del={popUpDelete} edit={(obj) => { popUpEditor("עריכת מוצר", getDefaultValue(obj)) }} />
        </div>
        <div className='btnEditorContainer'>
          <button onClick={() => { popUpEditor("הוספת מוצר", formTemplate, post) }} className='buttonEditor'>הוספת מוצר חדש</button>
        </div>
      </div>

    </div>
  )
}
