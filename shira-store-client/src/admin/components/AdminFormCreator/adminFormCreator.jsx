import AdminInput from '../AdminInput/adminInput';
import AdminInputFile from '../AdminInputFile/adminInputFile';
import AdminTextArea from '../AdminTextArea/adminTextArea';

export default function AdminFormCreator({ formArray = [] }) {
  return (<> {formArray.map(e => <InputType type={e.type} defaultValue={e.defaultValue} props={e.props} />)}</>)
}
function InputType({ type, props , defaultValue}) {
  switch (type) {
    case "textarea":
      return <div className='textareaContainer'><AdminTextArea {...props} defaultValue={defaultValue} title={props.placeholder} /> </div> 
    case "file":
      return <AdminInputFile />
    default:
      return <AdminInput type={type} defaultValue={defaultValue} {...props}/>
  }
}
