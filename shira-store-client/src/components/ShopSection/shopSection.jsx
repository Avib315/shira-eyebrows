import { useEffect, useState } from 'react'
import Item from '../Item/item.jsx'
import MainTitle from '../MainTitle/mainTitle.jsx'
import './shopSection.scss'
import { useAxiosReq } from '../../functions/useAxiosReq.jsx'
import Loading from '../Loading/loading.jsx'

export default function ShopSection() {
  const { data, loading } = useAxiosReq({ defaultValue: [], method: "GET", url: "item/many" })
  console.log(data)
  return (
    <div className='ShopSection'>
      <MainTitle title="המוצרים שלנו" />
      {data?.length > 0 ? <div className='shopMain'>
        {data?.map((item => (<Item key={item.mkt} {...item} />)))}
      </div> : loading&&<Loading />
      }
    </div>
  )
}
