import './shopPage.scss'
import ShopSection from '../../components/ShopSection/shopSection'
import Page from '../Page/Page'

export default function ShopPage() {
  return (<>
    <Page>
      <div className='ShopPage'>
        <ShopSection />
      </div>
    </Page>
  </>
  )

}
