import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  Blender extends React.Component{
    render(){
      return(

        <React.Fragment>
                 <div className ="blender">

                 <div>
                         {/* <span className="vertical"> WHO WE ARE</span> */}

                         <h2 style={{color:"white"}}>Values</h2>
                         <p style={{color:"white"}}>To effectively deliver value added services, Zone 4 Energy is driven by the acronym SHIIPS which represent our core values

</p>
                       </div>
                       <br/>
                       <br/>
                       <br/>
                   <Container>
                     <Row>
                       <Col md={3 }>
                            <div className="blendercard">
                                 <i style={{fontSize:"3rem"}} class="fas fa-briefcase"></i>
                                 <br/>  <br/>
                                <div style={{color:"white"}}>
                                     {/* <h2></h2> */}
                                 <p  style={{textTransform:"uppercase"}}> Synergy & Hard work</p>
                                 </div>
                            </div>
                      </Col>
                      <Col md={3 }>
                          <div className="blendercard">
                         
                      <i style={{fontSize:"3rem"}} class="fas fa-cogs"></i> 
                      <br/> <br/>
                      <div style={{color:"white"}}>
                                     {/* <h2></h2> */}
                                 <p  style={{textTransform:"uppercase"}}>Inimitable Integrity
Innovation</p>
                                 </div>
                      </div>
                      </Col>
                      <Col md={3 }>
                          <div className="blendercard">
                   
                      <i style={{fontSize:"3rem"}} class="fa fa-users"></i> 
                      <br/>  <br/>
                      <div style={{color:"white"}}>
                                     {/* <h2>25</h2> */}
                                 <p style={{textTransform:"uppercase"}} >Perseverance</p>
                                 </div>
                      </div>
                      </Col>
                      <Col md={3 }>
                          <div className="blendercard">
                              
                      <i style={{fontSize:"3rem"}} class="fa fa-trophy"></i>
                      <br/> <br/>
                      <div style={{color:"white"}}>
                                     {/* <h2>2</h2> */}
                                 <p style={{textTransform:"uppercase"}} >Superior Customer experience</p>
                                 </div>
                      </div>
                      </Col>
                     </Row>
                   </Container>
                 </div>
        </React.Fragment>
  
  
  
    );

    }
  
  
}

export default Blender;

