import "./inputTypeField.scss"
import React from "react"
import { Checkbox, Form } from 'antd';
import Input from 'antd/es/input/Input';
import InputAddress from "../InputAddress/inputAddress";
import CheckableTag from "antd/es/tag/CheckableTag";

export function InputTypeField({ label = "תיאור", setValue, confirmName, ...props }) {
    switch (props.type) {
        case 'address':
            return <InputAddress />
        case 'checkbox':

            return <Form.Item> <label className="checkboxLabel">
                <Checkbox 
                   name={props.name}
                   rules={[{ required: props.required, message: `נא הכנס ${label}` }]}
                />
                <span className='spanLabel'>{label}</span>
            </label></Form.Item>
        default:
            return <Form.Item
                name={props.name}
                rules={[{ required: props.required, message: `נא הכנס ${label}` }]}
            >
                <label className="inputLabelField">
                    <span className='spanLabel'>{label}</span>
                    <Input
                        type={props.type}
                        onChange={(e) => setValue(props.name, e.target.value)}
                        className="InputTypeField"
                    />
                </label>
            </Form.Item>
    }
}