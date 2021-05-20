import React from 'react';
import Carousel from 'react-elastic-carousel';
//import CarouselItem from './CarouselItem';
//import iPhone from './../img/about/about-quote.jpg';

const news = [
  {
    name: 'Edward Howells',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.',
    src: require( "../img/service/service1.jpg" ).default,
  },
  {
    name: 'Kieran Coleman',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.',
    src: require( "../img/service/service1.jpg" ).default,
  },
  {
    name: 'Lucas',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.',
    src: require( "../img/service/service1.jpg" ).default,
  },
  {
    name: 'David Lee',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.',
    src: require( "../img/service/service1.jpg" ).default,
  },
  {
    name: 'John Doe',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.',
    src: require( "../img/service/service1.jpg" ).default,
  },
  {
    name: 'Jordan Alin',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.',
    src: require( "../img/service/service1.jpg" ).default,
  },
];

const breakpoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 850, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1750, itemsToShow: 4, itemsToScroll: 1 },
];
const Testimonials = () => {
  return(
    <Carousel
        itemsToShow={2}
        breakpoints={breakpoints}
        showArrows={true}
        itemPadding={[0, 8]}
        enableMouseSwipe={false}
        enableAutoPlay autoPlaySpeed={6500} 
        pagination={false}
      >
        {news.map(aNew => (
          <div className="slider-item"  key={aNew.name}>
                <div className="content">
                    <div className="quote">
                       <i className='fa fa-quote-right'></i>
                    </div>
                            <p>
                              <q>{aNew.para}</q>
                            </p>
                        <div className="client">
                            <div className="client-img">
                               <img src={aNew.src} alt={aNew.name} />
                            </div>
                            <div className="client-info">
                              <h5> {aNew.name} </h5>
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
          
        ))}
      </Carousel>
   
  );
}

export default Testimonials;