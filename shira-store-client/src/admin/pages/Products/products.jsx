import './products.scss' 
import AdminTable from "../../components/AdminTable/adminTable"
import { sendProdects } from './prodectArray'
import { useEffect, useState } from 'react'
export default function Products(){
  const [products , setProducts] = useState([])
  const getProducts = async function(){
    const res = await sendProdects()
    setProducts(res)
    console.log(products)
  }
  useEffect(()=>{
    getProducts()
  },[ ])
  const theadArray = [
    
    "שם",
    "מזהה",
    "שם באנגלית",
    "תמונה ראשית",
    "כמות",
    "תגית",
    "מחיר"
  ];
  return (
<div className='Products'>
  <div className="containerTable">
<AdminTable theadArray={theadArray} tbodyArray={products}/>
    <button className='addNewProduct'>הוספת מוצר חדש</button>
  </div>
</div>
  )
}
