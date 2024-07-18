import { useEffect, useState } from 'react'
import Item from '../Item/item.jsx'
import ShopHeader from '../ShopHeader/shopHeader.jsx'
import {sendItems} from "../../functions/items.js"
import './shopSection.scss'
import Loading from '../Loading/loading.jsx'

export default function ShopSection() {
 const [items , setItems] = useState([])
 const getItems = async function(){
  const res = await sendItems()
  if(res){
    setItems(res)
  }
 }
useEffect(()=>{
getItems()
},[])
  return (
    <div className='ShopSection'>
      <ShopHeader />
     { items.length > 0 ? <div className='shopMain'>
        {items.map((item => (<Item key={item._id} {...item} />)))}
      </div> : <Loading/>
}
    </div>
  )
}
