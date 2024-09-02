import './leaveDetails.scss' 
import logo from '../../assets/logo.svg'
import Button from '../Button/button';
import { InputTypeField } from '../InputTypeField/inputTypeField';
export default function LeaveDetails(){
  const handleChildClick = (event) => {
    event.stopPropagation();
  };
  function submitHandler(e){
    e.preventDefault();
    console.log('Form submitted');
  }
  return (
<div onClick={handleChildClick} className='LeaveDetails'>
<h3>מועניינת שנחזור אלייך?</h3>
<p>השאירי פרטים ונחזור אלייך בהקדם</p>
<img src={logo} alt="logo" />
<form onSubmit={submitHandler}>
  <InputTypeField name="fullName" required={true} type="text" placeholder="שם מלא"/>
  <InputTypeField name="email" required={true} type="email" placeholder="אימייל"/>
  <InputTypeField name="phoneNumber" required={true} type="tel" placeholder="מס טלפון"/>
  <Button type="submit" title={"שליחה"}/>
</form>
</div>
  )
}
