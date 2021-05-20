import React, { useEffect, useState } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Projectbanner from './img/page-title-area/projects.jpg';
import Portimages from './Component/Portimages';


const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: '#333',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

const Projects = () => {

        const [tag, setTag] = useState('all');
        const [filteredImages, setFilteredImages] = useState([]);
    
        useEffect(
            () => {
                tag === 'all' ? setFilteredImages(Portimages) : setFilteredImages(Portimages.filter(image => image.tag === tag));
            },
            [tag]
        );
    

    return (
        <>
           <SimpleReactLightbox>
             <div className="page-title-area ptb-100" >
                <div className="container">
                    <div className="page-title-content">
                        <h1>Projects</h1>
                        <ul>
                            <li className="item"><a href="index.html">Home</a></li>
                            <li className="item active"><span></span>Projects</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-image">
                    <img src={Projectbanner} alt={Projectbanner}   />
                </div>
            </div>


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
                                    <div id="control" className="filter-group">
                                        
                                        <ul id="control" className="filter-control">
                                            <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> 
                                            <TagButton name="Chemical Research" tagActive={tag === 'Chemical Research' ? true : false} handleSetTag={setTag} /> 
                                            <TagButton name="Mechanical" tagActive={tag === 'Mechanical' ? true : false} handleSetTag={setTag} /> 
                                            <TagButton name="Civil" tagActive={tag === 'Civil' ? true : false} handleSetTag={setTag} /> 
                                            <TagButton name="Oil and Gas" tagActive={tag === 'Oil and Gas' ? true : false} handleSetTag={setTag} />                                      
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <SRLWrapper options={options}>

                            <div className="row filter-container">
                                   
                                            {filteredImages.map(image => (
                                                <div className="filtr-item col-lg-4 col-md-6" key = {image.id} >
                                                    <div className="item-single mb-30">
                                                        <div key={image.id} className="image">
                                                            <a href={`${image.imageName}`}>
                                                                <img className="image" src={`${image.imageName}`} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        
                               
                            </div>
                            </SRLWrapper>
                        </div>
                    </section>

                </div> 
                </SimpleReactLightbox>

        </>
    )
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<li className={`tag ${tagActive ? 'active' : null} `} onClick={() => handleSetTag(name)}>
			{/* {//name.toUpperCase()} */}
                {name}
		</li>
	);
};


export default Projects;