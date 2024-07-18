import React from 'react';
import './coverPageComponent.scss'
import { usePopUp } from '../../functions/PopUpContext';
const CoverPageComponent = ({ Component , closeByClick  }) => {
  const {hidePopUp } = usePopUp();
  const closePopUp = ()=>{
    if(closeByClick){
      hidePopUp();
    }
  }
  return (
    <div className="coverPageComponent" onClick={closePopUp}>
      <Component />
    </div>
  );
};

export default CoverPageComponent;
