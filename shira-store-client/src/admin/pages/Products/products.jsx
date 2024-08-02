import './products.scss'
import AdminTable from "../../components/AdminTable/adminTable"
import { sendProdects } from './prodectArray'
import { useEffect, useState } from 'react'
import AdminPopUp from '../../components/AdminPopUp/adminPopUp'
import thead from "./jsonData.json"
import usePopUpEditor from '../../store/OpenPopUpEditor'
import formTemplate from "./formTemplate.json"
import usePopUpStore from '../../../functions/usePopUpStore'
import useApiStore from "./useApiStore"
export default function Products() {
  const [products, setProducts] = useState();
  const {get, post, put, del, data } = useApiStore()
  const { showPopUp, setPopValue, hidePopUp } = usePopUpStore();
  const { openEditor } = usePopUpEditor();

  const getProducts = async () => {
    try {
      const res = await sendProdects();
      setProducts(res);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  function popUpDelete({ id }) {
    const openPopUpDelete = () => (
      <AdminPopUp
        title={"המוצר ימחק לצמיתות האם להמשיך?"}
        primeBtn={{ text: "מחק", func: () => handleDelete(id) }}
        subBtn={{ text: "ביטול", func: hidePopUp }}
      />
    );

    setPopValue(openPopUpDelete);
    showPopUp(false);
  }

  const handleDelete = (id) => {
    console.log('Deleting product with id:', id);
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
          <AdminTable thead={thead.thead} tbody={products} del={popUpDelete} edit={(obj) => { popUpEditor("עריכת מוצר", getDefaultValue(obj)) }} />
        </div>
        <div className='btnEditorContainer'>
          <button onClick={() => { popUpEditor("הוספת מוצר", formTemplate, post) }} className='buttonEditor'>הוספת מוצר חדש</button>
        </div>
      </div>

    </div>
  )
}
