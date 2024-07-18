import AdminHeader from '../../components/AdminHeader/adminHeader'
import './admin.scss' 
import logo from '../../../assets/logo.svg'
export default function Admin({children}){
  return (
<div className='Admin'>
<AdminHeader/>
<div className='adminContainer'>
{children}
<img className='backCover-logo' src={logo} alt="logo" />
</div>
</div>
  )
}
