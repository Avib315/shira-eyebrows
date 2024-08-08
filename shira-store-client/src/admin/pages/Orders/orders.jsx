import './orders.scss' 
import formData from "./jsonData.json"
import Table from '../../components/Table/table'
export default function Orders(){
  return (
<div className='Orders'>
<div className="tableContainer">
  <Table thead={formData} />
</div>
</div>
  )
}
