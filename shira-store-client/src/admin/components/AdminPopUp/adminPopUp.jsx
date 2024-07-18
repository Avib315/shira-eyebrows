import './adminPopUp.scss'

export default function AdminPopUp({ title, primeBtn, subBtn }) {
  return (
    <div className='AdminPopUp'>
      <h2>{title}</h2>
      <div className="btnContainer">
        <button className='btn btnPrime' onClick={primeBtn.func}>{primeBtn.text}</button>
        <button className='btn btnSub' onClick={subBtn.func}>{subBtn.text}</button>
      </div>
    </div>
  )
}
