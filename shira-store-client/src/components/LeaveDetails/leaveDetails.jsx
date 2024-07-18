import './leaveDetails.scss' 
import logo from '../../assets/logo.svg'
import Button from '../Button/button';
import { Input } from '../Input/input';
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
  <Input name="fullName" required={true} type="text" placeholder="שם מלא"/>
  <Input name="email" required={true} type="email" placeholder="אימייל"/>
  <Input name="phoneNumber" required={true} type="tel" placeholder="מס טלפון"/>
  <Button type="submit" title={"שליחה"}/>
</form>
</div>
  )
}
