import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  HomeSection extends React.Component{
    render(){
      return(

        <React.Fragment>
                 <div className ="section1">
                   <Container>
                     <Row>
                       <Col md={6 }>
                       <div>
                         <span className="vertical"> WHO WE ARE</span>

                         <h2>A <strong>Professional</strong> <br/>
                                & Hard Working Team</h2>
                       </div>
                       </Col>
                       <Col md={6}>
                      <p> Our planned nationwide retail outlets is a combination of owned, leased and franchised stations. Our strategic assets acquisition strategies creates and delivers quick wins by enabling long term gains for all stake holders</p>
                       </Col> 

                     </Row>
                   </Container>
                 </div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default HomeSection;

