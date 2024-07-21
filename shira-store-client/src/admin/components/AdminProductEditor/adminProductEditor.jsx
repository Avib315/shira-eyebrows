import './adminProductEditor.scss' 

export default function AdminProductEditor({productId , action}){
  return (
<div className='AdminProductEditor'>
<input type="text" placeholder='שם מוצר' className='inputs' />
<input type="text" placeholder='מס מזהה' className='inputs' />
<input type="text" placeholder='כמות' className='inputs' />
<input type="text" placeholder='מחיר' className='inputs' />

</div>
  )
}
