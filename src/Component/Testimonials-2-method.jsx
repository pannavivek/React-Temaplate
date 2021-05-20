import React from 'react';
import Carousel from 'react-elastic-carousel';
//import CarouselItem from './CarouselItem';
import iPhone from './../img/about/about-quote.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
        { width: 767, itemsToShow: 2 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 2, },
        { width: 1750, itemsToShow: 4 },
]
const CarouselItem = (props) => {
    return(
        
         <div className="slider-item">
                <div className="content">
                    <div className="quote">
                       <i className='fa fa-quote-right'></i>
                    </div>
                            <p>
                              <q>{props.para}</q>
                            </p>
                        <div className="client">
                            <div className="client-img">
                               <img src={props.src} alt={props.alt}/>
                            </div>
                            <div className="client-info">
                              <h5> {props.name} </h5>
                              <div className="review">
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                            </div>
                        </div>
                </div>
              </div>
          </div>
     
    );
  }
const Testimonials = () => {
  return(
    <Carousel ClassName="firstactiveitem" enableAutoPlay autoPlaySpeed={6500} breakPoints={ breakPoints } itemsToShow={2} itemsToScroll= {1}>
      <CarouselItem name="Edward Howells" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/> 
      <CarouselItem name="Kieran Coleman" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
      <CarouselItem name="Lucas Watts" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
      <CarouselItem name="David Lee" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
      <CarouselItem name="John Doe" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
      <CarouselItem name="Jordan Alin" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
      <CarouselItem name="Lee" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
      <CarouselItem name="Coleman" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum." src={iPhone} alt="iPhone"/>
    </Carousel>
  );
}

export default Testimonials;