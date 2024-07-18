import AdminHeader from '../../components/AdminHeader/adminHeader'
import './admin.scss'
import logo from '../../../assets/logo.svg'
import { usePopUp } from '../../../functions/PopUpContext'
import CoverPageComponent from '../../../components/CoverPageComponent/coverPageComponent'
export default function Admin({ children }) {
  const { popUpData } = usePopUp()
  return (
    <div className='Admin'>
      <AdminHeader />
      <div className='adminContainer'>
        {children}
        <img className='backCover-logo' src={logo} alt="logo" />
      </div>
      {popUpData.isVisible && <CoverPageComponent closeByClick={popUpData.closeByClick} Component={popUpData.element} />}
    </div>
  )
}
