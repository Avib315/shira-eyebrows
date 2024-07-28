import './products.scss'
import AdminTable from "../../components/AdminTable/adminTable"
import { sendProdects } from './prodectArray'
import { useEffect, useState } from 'react'
import { usePopUp } from '../../../functions/PopUpContext'
import AdminProductEditor from '../../components/AdminProductEditor/adminProductEditor'
import AdminPopUp from '../../components/AdminPopUp/adminPopUp'
export default function Products() {
  const [products, setProducts] = useState([])
  const { showPopUp, setPopValue, hidePopUp } = usePopUp()
  const [productEditor, setProductEditor] = useState({ action: "", productId: "" })
  const getProducts = async function () {
    const res = await sendProdects()
    setProducts(res)
    console.log(products)
  }
  useEffect(() => {
    getProducts()
  }, [])
  const theadArray = [
    { text: "שם" , type:"string" },
    { text: "מזהה" , type:"string" },
    { text: "שם באנגלית" , type:"string" },
    { text: "תמונה ראשית", type:"img"  },
    { text: "כמות", type:"string"  },
    { text: "תגית" , type:"string" },
    { text: "מחיר", type:"string"  }
  ]

  function openProductEditor(action) {
    setProductEditor({ ...productEditor, action: action })
  }
  function popUpDelete() {
    const popUpDelete = () => {
      return <AdminPopUp title={"המוצר ימחק לצמיתות האם להמשיך?"} primeBtn={{ text: "מחק", func: () => { } }} subBtn={{ text: "ביטול", func: hidePopUp }} />
    }
    setPopValue(popUpDelete)
    showPopUp(false)
  }
  function selectProduct(id) {

    setProductEditor({ ...productEditor, productId: productEditor.productId == id ? "" : id })
  }
  return (
    <div className='Products'>
      <div className='mainContainer'>
        <div className="containerTable">
          <AdminTable theadArray={theadArray} tbodyArray={products} trSelectedId={productEditor.productId} trFunction={selectProduct} />
        </div>
        <div className='btnEditorContainer'>
          <button onClick={() => { openProductEditor("post") }} className='buttonEditor'>הוספת מוצר חדש</button>
          <button onClick={() => { openProductEditor("put") }} disabled={productEditor.productId == ""} className='buttonEditor'>  עריכת מוצר</button>
          <button onClick={popUpDelete} disabled={productEditor.productId == ""} className='buttonEditor'>מחיקת מוצר</button>
        </div>
      </div>
      {productEditor.action == "put" && productEditor.productId != "" && <div className="productEditorContainer"><AdminProductEditor productId={productEditor.productId} action={productEditor.action} /></div>}
      {productEditor.action == "post" && <div className="productEditorContainer"><AdminProductEditor productId={productEditor.productId} action={productEditor.action} /></div>}
    </div>
  )
}
