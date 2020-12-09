import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap';






class  Footer extends React.Component{
    render(){
      return(

        <React.Fragment>
                   <div className="foot">

<Container> 
   <Row >
       <Col md={3}>
       <h5>
       <img className="logo" alt="" src="./asset/img/Zone4logo.png"/>
       </h5>
       <br/>
       <br/>
       <p></p>
       <br/>
       <br/>
    
      
    
   

       </Col>
       <Col md={3}>
     <ul style={{listStyle:"none"}}>

        <li> ABOUT US</li>

        <br/>
        <br/>

        <li> CONTACT</li>


     </ul>
       <br/>
       <br/>
       <p></p>
       <br/>
       <br/>
    
      
    
   

       </Col>
        <br/>
        <br/>
        <br/>
        <Col md={3}>



       <h5 className="colored">
     <b>About Us</b>
       </h5>
       <br/>
     
    <div >
        <br/>
   
      <a href="/about"> <p style={{color:"white",}} >Zone 4 Energy Limited is fully owned, managed and run by Nigeria citizens with wide experience and expertise in the Oil & Gas industry.</p></a>
       <br/>
 
    {/* <a href="/contact">  <h5 style={{color:"white"}}  >CONTACT</h5></a> */}
       
       </div> 
       
       </Col>
       <br/>
       <br/>
       <br/>
       <Col md={3}>
       <h5 className="colored">
        <b> CONTACT US </b> 
        </h5>
        <br/>
       <br/>
       <span><i style={{fontSize:"1.5rem", color:"#EA6214",paddingRight:"2rem", paddingLeft:"1rem"}} className="fa fa-phone"> </i>Tel: +234 806 110 4211
    </span>
    <br/>
    <br/>
    <span><i style={{fontSize:"1.5rem", color:"#EA6214", paddingRight:"2rem", paddingLeft:"1rem"}} className="fa fa-envelope"> </i>Email: info@zone4energy.com
    </span>
       
       </Col>
   </Row>
</Container> 

{/* <span className="round-icon">
       <i style={{fontSize:"1.5rem"}} className="fa fa-facebook-f"></i>
       </span>
       <span className="round-icon">
       <i style={{fontSize:"1rem"}} className="fa fa-twitter"></i>
       </span>
       <span className="round-icon">
       <i style={{fontSize:"1rem"}} className="fa fa-instagram"></i>
       </span> */}
</div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default Footer;

