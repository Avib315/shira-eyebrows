import { InputTypeField } from '../InputTypeField/inputTypeField'
import './orderForm.scss'
import logo from "../../assets/logo.svg"
import { useState } from 'react'
import RadioInput from '../RadioInput/radioInput'
import Button from '../Button/button'
import { Form } from 'antd';
import inputArray from './inputsForm.json'
export default function OrderForm() {

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
            <Form onFinish={orderSubmitHandler}>
                {inputArray.map(group => (
                    <div className='section'>
                        <h3>{group.title}</h3>
                        <div className="sub-section">
                            {group.inputs?.map(inputProp => <InputTypeField {...inputProp} />)}
                        </div>
                    </div>
                ))}
                <div className='btn-section'>
                <Button title={"המשך לתשלום"} />
                </div>
            </Form > <img className='logo' src={logo} alt="logo" />
        </div >
    )
}

