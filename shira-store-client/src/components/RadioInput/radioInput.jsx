import './radioInput.scss'

export default function RadioInput({ optionsArray = [], setSelectedValue  }) {
  function setSelectionValue(key) {
    const newOptionArr = optionsArray.map((option) => {
      return { ...option, value: option.key == key }
    })
    setSelectedValue(newOptionArr)
  }
  return (
    <div className='RadioInput'>
      <div className='containerInputRadio'>

      {optionsArray.map((option) => (
        <label key={option.key}>
          <input type='radio' name={option.key} checked={option.value} onChange={() => setSelectionValue(option.key)} />
          <p>{option.label}</p>
          {/* <button>{option.label}</button> */}
        </label>
      ))}
      </div>
    </div>
  )
}
