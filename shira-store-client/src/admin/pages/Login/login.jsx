import Button from '../../../components/Button/button';
import { Input } from '../../../components/Input/input';
import './login.scss'
import logo from "../../../assets/logo.svg"
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const nav = useNavigate()
    function submitHandler(e) {
        // TODO: handle form submission
        console.log('Form submitted');
        e.preventDefault(); // prevent form from reloading the page
        nav("/admin/home")
    }
    return (
        <div className='Login'>
            <form onSubmit={submitHandler}>
                <h1>Login </h1>
                <Input type='text' name='username' placeholder='שם משתמש' required />
                <Input type='password' name='password' placeholder='סיסמה' required />
                <div className="buttonContainer">
                <Button type='submit' title='כניסה' />
                </div>
                <img src={logo} alt="logo" />
            </form>
            <div className='bg'></div>
        </div>
    )
}
