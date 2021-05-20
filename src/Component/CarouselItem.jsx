import React from 'react';

const CarouselItem = (props) => {
  return(
    <div className="item">     
       <img src={props.src} alt={props.alt}/>
    </div>
  );
}

export default CarouselItem;