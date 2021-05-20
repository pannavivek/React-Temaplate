import React, {useState} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Projectbanner from './img/page-title-area/projects.jpg';
import Portimages from './Component/Portimages';

const alltag = ["All", ... new Set (Portimages.map((currEle) => currEle.tag ))];
//console.log(alltag);

const Gallery = () => {

    const [items, setItems] = useState(Portimages);
    const [tagItems, settagItems] = useState(alltag);

    const filterItems = (tagItem) =>{

        if (tagItem === "All") {
            setItems (Portimages); 
            return;
        }

        const updateItems = Portimages.filter((currElem) => {
            return currElem.tag === tagItem;
        });
        setItems (updateItems);
    }
    
    return (
        <>
            <div className="page-title-area ptb-100" >
                <div className="container">
                    <div className="page-title-content">
                        <h1>Gallery</h1>
                        <ul>
                            <li className="item"><a href="/#">Home</a></li>
                            <li className="item active"><span></span>Gallery</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-image">
                    <img src={Projectbanner} alt={Projectbanner}   />
                </div>
            </div>
            <SimpleReactLightbox>
                <div className="project-single-area ptb-100">
                    <section id="projects" className="projects-section-three">
                        <div className="container">
                            <div className="top-content">
                                <div className="title">
                                    <span className="sub-title">projects</span>
                                    <h2>Our Most Impressive Works</h2>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <div className="filter-group">

                                        <ul id="control" className="filter-control">
                                        {
                                            tagItems.map((currEle, index) => {
                                                return (   
                                                    <li key={index} className="active" onClick={ () => filterItems(currEle) } > { currEle } </li>
                                                    
                                                );
                                                    
                                             } )
                                            
                                        }
                                            {/* <li className="active" data-filter="all" onClick={ () => setItems (Portimages) }> All</li>
                                            <li onClick={ () => filterItems ('Chemical Research') }>Chemical Research</li>
                                            <li onClick={ () => filterItems ('Mechanical') }>Mechanical</li>
                                            <li onClick={ () => filterItems ('Civil') }>Civil</li>
                                            <li onClick={ () => filterItems ('Oil and Gas') }>Oil and Gas</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <SRLWrapper>
                            <div className="row filter-container">
                            {
                               // items.map ((elem) => {
                                    items.map((elem) => {
                                     const { id, imageName, name }  = elem;
                                        return (

                                            <div className="filtr-item col-lg-4 col-md-6" key={id}>
                                                <div className="item-single mb-30">
                                                        <div className="image">
                                                            <img src={imageName} alt={name} />
                                                        </div>
                                                        <div className="content">
                                                            <h3><a href="projects-details.html">{name}</a></h3>
                                                        </div>
                                                </div>
                                            </div>      
                                        ); 
                                    })
                            }
                                
                            </div>
                            </SRLWrapper>
                        </div>
                    </section>

                </div>
            </SimpleReactLightbox>
        </>
    )
}


export default Gallery;