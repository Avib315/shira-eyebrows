import { Input } from '../Input/input'
import './orderForm.scss'
import logo from "../../assets/logo.svg"
import { useState } from 'react'
import RadioInput from '../RadioInput/radioInput'
import Button from '../Button/button'
export default function OrderForm() {
    const [shippingMethod, setShippingMethod] = useState([{ key: "toHome", label: "שליח לבית", value: true }, { key: "fromShop", label: "איסוף מהחנות", value: false }])
    const [payingMethod, setPayingMethodMethod] = useState([{ key: "isracard", label: "ישראכרט", value: true }, { key: "byBit", label: " בביט", value: false }, { key: "phoneCall", label: "בשיחת טלפון", value: false },])
    function orderSubmitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        let formValues = []
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        console.log(formValues);
    }
    return (
        <div className='OrderForm'>
            <form onSubmit={orderSubmitHandler}>

                <div className='section'>
                    <h3>פרטי קשר</h3>
                    <div className="sub-section">
                        <Input name={"email"} placeholder="אימייל" type="email" />
                        <Input name={"phone"} placeholder="טלפון" type="tel" />
                        <Input name={"fName"} placeholder="שם פרטי" type="text" />
                        <Input name={"lName"} placeholder="שם משפחה" type="text" />

                    </div>
                    <div className="section">
                        <h3>שיטת איסוף </h3>
                        <RadioInput optionsArray={shippingMethod} setSelectedValue={setShippingMethod} title="בחר שטת איסוף " />
                    </div>
                    <div className="section">
                        {
                            shippingMethod[0].value ? <>
                                <h3>כתובת למשלוח</h3>
                                <div className="sub-section">
                                    <Input name={"city"} placeholder="עיר" type="text" />
                                    <Input name={"street"} placeholder="רחוב" type="text" />
                                    <Input name={"postCode"} placeholder="מיקוד" type="text" />
                                    <Input name={"apartment"} placeholder="דירה / כניסה" type="text" />
                                </div> </> : <p> כתובת החנות</p>
                        }
                    </div>
                    <div className='section'>
                        <h3> צורת תשלום</h3>
                        <RadioInput optionsArray={payingMethod} setSelectedValue={setPayingMethodMethod} title="בחר שטת איסוף " />
                        {payingMethod[0].value && <div className="sub-section">
                            <Input  placeholder="בעל הכרטיס" type="text" />
                            <Input  placeholder="מס כרטיס" type="number" />

                        </div>}
                    </div>
                    <div className='btn-section'>
                        <Button type={"submit"} title={"שליחת הזמנה"} />
                    </div>
                </div>
            </form>
            <img className='logo' src={logo} alt="logo" />
        </div>
    )
}
