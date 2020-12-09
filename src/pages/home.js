import React from "react"; 
import Seo from '../components/Seo';
 import Navigation from '../components/Navigation';
import HomeSection from "../components/HomeSection";
import ServiceCards from "../components/ServiceCards";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import FullMenuNav from "../components/FullMenuNav"
import Footer from "../components/Footer";
import { Carousel} from "react-bootstrap"





function Home (){

  return(
      <React.Fragment>
          <Seo page = "Home">


            <FullMenuNav/>
           <header className="header">
      


         
          </header>
           
           <ServiceCards/>


           <Portfolio/>
          </Seo>
          
          
          <Footer/> 
        
      </React.Fragment>


  );
  
}

export default Home;

