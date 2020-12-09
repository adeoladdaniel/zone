import React from "react"; 
import Seo from '../components/Seo';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import {Container,Row, Col} from "react-bootstrap"






function Contact (){

  return(
      <React.Fragment>
          <Seo page = "Contact">
          <header className="c-header">
            <Navigation/>
            <div className="about-header-text">
              <h1>Contact Us</h1>
            </div>
        
         
          </header>

          <div className="contact_header">
             
               
              </div>

              <div className="temple">

                <Container>
                  <Row>
                    <Col md={6}>
                      <div className="templar">
                    <i class="fa fa-mobile"></i>
                    </div>

                      <h3>Contact Us</h3>

                      <p><b>Lagos, Nigeria</b></p>
                      <p> Plot 8a Oluwakayode Jacobs Cresent, Lekki Phase 1, 
</p>
              

             
                    </Col>
{/*                     
                    <Col md={4}>
                      {/* <div className="templar"> */}
                    {/* <i class="fa fa-location-arrow"></i>
                    </div>
                    <h3>Come see Us</h3>

                    <p><b>Ibadan Nigeria</b></p>
                
                    <p>No. 2 Sankore Street, University of Ibadan, Ibadan Nigeria.</p> */}
                    {/* </Col> */} 
                    
                    <Col md={6}>
                      <div className="templar">

                      
                    <i class="fa fa-history"></i>
                      </div>
                    <h3>Support </h3>

                    <p><b>Tel: +234 806 110 4211</b></p>

                    </Col>
                  </Row>
                </Container>
              </div>

               


           <Footer/>  
          </Seo>
        
        
      </React.Fragment>


  );
  
}

export default Contact;

