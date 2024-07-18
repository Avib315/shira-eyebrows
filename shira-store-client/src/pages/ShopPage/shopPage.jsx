import CoverPageComponent from '../../components/CoverPageComponent/coverPageComponent'
import { usePopUp } from '../../functions/PopUpContext'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import ShopSection from '../../components/ShopSection/shopSection'
import './shopPage.scss'
import Page from '../Page/Page'

export default function ShopPage() {
  const { popUpData } = usePopUp();
  return (<>
    <Page>
      <div className='ShopPage'>
        <ShopSection />
      </div>
    </Page>
  </>
  )

}
