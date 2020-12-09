import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  ServiceCards extends React.Component{
    render(){
      return(

        <React.Fragment>
                 
                 <div className="card-header-text">
                         <h3> WHAT WE DO </h3>
                    
                     </div> 
                 <div className ="card-section">

                         
                   <Container>
                     <Row>
                       <Col md={4}>
                   
                            <div className="cards">
                                <span className="card-head">
                                <i class="fas fa-gas-pump"></i>
                                </span>
                                    <h6> Network of Stations Countrywide</h6>
                                    <hr/>
                                <p>Our planned nationwide retail outlets is a combination of owned, leased and franchised stations.</p>
                            </div>
                       </Col>
                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fas fa-fill"></i>
                                </span>
                             

                                <h6> Tank Farm Facility</h6>
                                <hr/>
                                <p>Zone 4 Energy limited has a depot in the eastern region of Nigeria, with the facility able to store a range of petroleum products</p>
                            </div>
                       </Col> 

                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fas fa-thumbs-up"></i>
                                </span>
                        

                                <h6>Procurement Capability</h6>
                                <hr/>
                                <p>We market and distribute refined petroleum products through our network of retail stations across the country which are either company owned, leased or franchised stations</p>
                            </div>
                     </Col> 
                     </Row>
                   </Container>
                   <div className="card-but-text">
                   <a href="about"><button className="card-but">
                     Read More
                   </button>
                  </a>
                   </div>
                 </div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default ServiceCards;

