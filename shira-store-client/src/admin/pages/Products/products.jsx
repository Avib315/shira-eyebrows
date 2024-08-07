import './products.scss'
import Table from "../../components/Table/table"
import { useEffect, useState } from 'react'
import PopUp from '../../components/PopUp/popUp'
import form from "./jsonData.json"
import usePopUpEditor from '../../store/OpenPopUpEditor'
import usePopUpStore from '../../../functions/usePopUpStore'
import useApiStore from "./useApiStore"
import { useAxiosReq } from '../../store/useApiReq'
export default function Products() {
  const { data, get, post, put, del, loading } = useApiStore()
  const { showPopUp, setPopValue, hidePopUp } = usePopUpStore();
  const { openEditor } = usePopUpEditor();
  get()
  function setSuccessMessage(message) {
    if (message) {
      setPopValue(() => (
        <PopUp
          title={message}
          primeBtn={{ text: "אישור", func: () => { hidePopUp(); } }}
        />
      ));
      showPopUp(true);
    }
  }
  function popUpDelete({ _id: id }) {
    setPopValue(() => (
      <PopUp
        title={"המוצר ימחק לצמיתות האם להמשיך?"}
        primeBtn={{ text: "מחק", func: () => { del(id); hidePopUp(); } }}
        subBtn={{ text: "ביטול", func: hidePopUp }}
      />
    ));
    showPopUp(false);
  }

  function popUpEditor(title, formArray = [], submit) {
    openEditor(title, formArray, submit, loading);
  }

  function getDefaultValue(objSelected) {
    return form.map(e => {
      return {
        ...e,
        defaultValue: objSelected[e.key] || e.defaultValue // Assuming 'e.props.name' is the key
      }
    });
  }
  async function submitCreate(body) {
    const res = await post(body)
    setSuccessMessage(res)
  }
  async function submitUpdate(body) {
    const res = await put(body)
    setSuccessMessage(res)
  }
  return (
    <div className='Products'>
      <div className='mainContainer'>
        <div className="containerTable">
          <Table thead={form} tbody={data} del={popUpDelete} edit={(defaultValuesObj) => { popUpEditor("עריכת מוצר", getDefaultValue(defaultValuesObj), submitUpdate) }} />
        </div>
        <div className='btnEditorContainer'>
          <button onClick={() => { popUpEditor("הוספת מוצר", form, submitCreate) }} className='buttonEditor'>הוספת מוצר חדש</button>
        </div>
      </div>

    </div>
  )
}
