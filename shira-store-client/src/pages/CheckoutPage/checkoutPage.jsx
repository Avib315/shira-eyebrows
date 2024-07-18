import OrderForm from '../../components/OrderForm/orderForm.jsx'
import TableOrder from '../../components/TableOrder/tableOrder.jsx'
import Page from '../Page/Page'
import './checkoutPage.scss'

export default function CheckoutPage() {
  return (
    <Page>
      <div className='CheckoutPage'>
        <div className='headerTitle'>
          <h2> הזמנה ומשלוח</h2>
        </div>
        <div className='main'>
          <div className='container'>
            <TableOrder />
          </div>
          <div className='container'>
            <OrderForm/>
          </div>
          <div className='bg-img'>  </div>
        </div>
      </div>
    </Page>
  )
}
