import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Team from './Team';
import Faq from './Faq';
import Projects from './Projects';
import ServicesDetails from './ServicesDetails';
import Contact from './Contact';
import Error from './Error';
import Book from './Book';
import Country from './Country';
import Header from './Component/Header';
import Gallery from './Gallery';
import Footer from './Component/Footer';

//import { Helmet } from "react-helmet";

function App() {

  
  return (
      <>
      {/* <Helmet>
      <meta name="description" content="PannaLive-All the information about Panna City in India, Complete Panna portal. Includes City Guide, Business directory, travel, Hospitals, Schools, City map and Hotels information." />
	<meta name="keywords" content="Panna, Panna District, City of India, Panna Jila, Panna Janpad, Panna City, PannaLive, District of (MP), City of India, City details, Tourism"/>
	<title>Online Portal Panna</title>
      </Helmet> */}
     
        <Header />
       
          {/* |<Nav /> */}
            <Switch>
              <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/team' component={Team} />
                <Route exact path='/faq' component={Faq} />
                <Route exact path='/services-details/:id' component={ServicesDetails} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/book' component={Book} />
              
                <Route exact Country='/country' component={Country} />
                <Route exact Gallery='/gallery' component={Gallery} />
                <Route component={Error} /> 
                {/*<Redirect component="/"></Redirect> */}
            </Switch>
            <Footer />
      </>
  );
}

export default App;
