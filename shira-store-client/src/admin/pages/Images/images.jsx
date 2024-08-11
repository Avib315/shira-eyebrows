import ImageUploader from '../../components/ImageUploader/imageUploader';
import InputFile from '../../components/InputFile/inputFile';
import Table from '../../components/Table/table'
import './images.scss' 
import formData from "./jsonData.json"


export default function Images(){
  return (
<div className='Images'>
    <div className="tableContainer">
    <Table thead={formData} />
    </div>
    <div className='inputFileContainer'>
    <ImageUploader/>
    </div>
</div>
  )
}
