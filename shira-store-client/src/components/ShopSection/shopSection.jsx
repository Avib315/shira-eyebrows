import { useEffect, useState } from 'react'
import Item from '../Item/item.jsx'
import ShopHeader from '../ShopHeader/shopHeader.jsx'
import './shopSection.scss'
import { useAxiosReq } from '../../functions/useAxiosReq.jsx'
import Loading from '../Loading/loading.jsx'

export default function ShopSection() {
  const { data, loading } = useAxiosReq({ defaultValue: [], method: "GET", url: "item/many" })
  console.log(data)
  return (
    <div className='ShopSection'>
      <ShopHeader />
      {data.length > 0 ? <div className='shopMain'>
        {data?.map((item => (<Item key={item.mkt} {...item} />)))}
      </div> : loading&&<Loading />
      }
    </div>
  )
}
