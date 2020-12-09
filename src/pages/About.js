import React from "react"; 
import Seo from '../components/Seo';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer"; 
import {Container, Col, Row} from "react-bootstrap";
// import Aboutcard from "../components/Aboutcard";
import Blender from "../components/Blender";
import FullMenuNav from "../components/FullMenuNav"




function About (){

  return(
      <React.Fragment>
          <Seo page = "About">
          <header className="a-header">
            <FullMenuNav/>
            <div className="about-header-text">
              <h1>About Us</h1>
            </div>
        
         
          </header>
          <br/>
          <br/>
          <br/>


          <div className=".product_space">
            <Container>
              <Row>
                <Col md={6}>
                <img
                 src="./asset/img/p2.png"
                  alt="" 
                  style={{width:"100%"}}
                  
                   />
                
                </Col>

                <Col md={6}>
                <p>


 	
Zone 4 Energy Limited is fully owned, managed and run by Nigeria citizens with wide experience and expertise in the Oil & Gas industry. The company is a leading downstream company focusing on excellent customer experience for all its service offerings. Leveraging teamwork and expertise, Zone 4 Energy Limited business plan spans various stages of the Oil and Gas cycle with service stations strategically placed in various geo-political zones to optimize access to customers.

Our modern multi-product storage depot situated in Eastern Nigeria provides an opportunity to import and store products to help combat the growing demand for products, guarantees customers the availability of sound petroleum products. Zone 4 Energy Limited delivers excellence by bridging and integrating flow, capability and discipline to create consistent value for our customers and partners. In accordance to our slogan "to see and plan for current and future energy needs", ultimately innovative ideas and our excellent performance would enhance long-term earnings & growth.

Our company targets independent marketers involved in the importation and marketing of PMS, DPK and AGO. They include; SPG Petroleum & Gas Co. Ltd, Capital Oil & Gas Plc., Obat Oil Ltd, Fatgbems Petroleum Co. Ltd, Acquitane Oil & Gas Ltd, Eterna Oil & Gas Plc., Honeywell Oil & Gas Ltd, Sahara Energy Ltd, Zenon Petroleum & Gas Ltd etc.
                </p>
                
                </Col>
                <br/>
                <br/>
                


                <Col md={6}>
             <h4>   Mission Statement </h4>
The Company will manage its business with integrity and high ethical standards while acting in a socially responsible manner that creates consistent values for our staff, customers and other stakeholders.

<h4>Vision</h4>
To develop a unique corporate Identity by Achieving operational excellence in creating energy for current and future needs.

 
                
                </Col>

                <Col md={6}>
                <img
                 src="./asset/img/p4.png"
                  alt="" 
                  style={{width:"100%"}}
                  
                   />
                
                </Col>
              </Row>
            </Container>
          </div>

          <br/>

<br/>
          {/* <Aboutcard/> */}

          <Blender/>

<br/>
<br/>

<br/>
<div className="portfolio-head">
                    <h1>
                        Our Team
                  
                    </h1>
                    <hr/>
                    <p>Meet our team</p>
                </div>
<div style={{textAlign:"center"}}>

    <span>
        <img
        src="./asset/img/MDTEAMLONG.png"
        alt=""
        style={{width:"70%"}}
        
        
        />
    </span>
<br/>
<br/>

    <span>
        <img
        src="./asset/img/EDNBI TEAM.png"
        alt=""
        style={{width:"70%"}}
        
        
        />
    </span>

    <br/>
    <br/>

    <span>
        <img
        src="./asset/img/MHRA TEAM NEW.png"
        alt=""
        style={{width:"70%"}}
        
        />
    </span>

    <br/>
    <br/>

    <span>
        <img
        src="./asset/img/TM TEAM.png"
        alt=""
        style={{width:"70%"}}
        
        
        />
    </span>
</div>
<br/>
<br/>

           <Footer/>  
          </Seo>
        
        
      </React.Fragment>


  );
  
}

export default About;

