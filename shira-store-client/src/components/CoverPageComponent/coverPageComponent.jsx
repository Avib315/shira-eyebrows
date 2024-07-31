import React from 'react';
import './coverPageComponent.scss'
import usePopUpStore  from '../../functions/usePopUpStore';
const CoverPageComponent = ({ Component , closeByClick  }) => {
  const {hidePopUp } = usePopUpStore();
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
