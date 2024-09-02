import './mainTitle.scss'

export default function MainTitle({title = "המוצרים שלנו"}) {
  return (
    <div className='MainTitle img'>
      <h2> {title}</h2>
    </div>
  )
}
