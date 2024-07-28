import Button from '../../../components/Button/button';
import { Input } from '../../../components/Input/input';
import './login.scss'
import logo from "../../../assets/logo.svg"
import { UseUserInfo } from '../../store/UseUserInfo';
import { NavLink } from 'react-router-dom';
export default function Login() {
    const setUser = UseUserInfo(state => state.setUser)
    function submitHandler(e) {
        e.preventDefault(); 
        setUser(true)
    }
    return (
        <div className='Login'>
            <form onSubmit={submitHandler}>
                <h1>Login </h1>
                <Input type='text' name='username' placeholder='שם משתמש' required />
                <Input current-password type='password' name='password' placeholder='סיסמה' required />
                <div className="buttonContainer">
                <Button type='submit' title='כניסה' />
                </div>
                <img src={logo} alt="logo" />
            <NavLink to={"/"}>חזרה לבית </NavLink>
            </form>
            <div className='bg'></div>
        </div>
    )
}
