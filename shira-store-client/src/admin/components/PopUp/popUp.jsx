import './popUp.scss'

export default function PopUp({ title, primeBtn, subBtn }) {
  return (
    <div className='PopUp'>
      <h2>{title}</h2>
      <div className="btnContainer">
        <button className='btn btnPrime' onClick={primeBtn.func}>{primeBtn.text}</button>
        {subBtn&&<button className='btn btnSub' onClick={subBtn.func}>{subBtn.text}</button>}
      </div>
    </div>
  )
}
