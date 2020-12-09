import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  Portfolio extends React.Component{
    render(){
      return(

        <React.Fragment>

         
                
                <div className="portfolioslider">

                <div className="portfolio-head">
                    <h1>
                        Products
                  
                    </h1>
                    <hr/>
                    <p>Products we have</p>
                </div>
                    <Container style={{background:"white"}}>
                    
                        <Row>
                        
                             <Col md={6}>
                             <div className="product_space">
                            <br/>
                                   <br/>
                                   <img
                                     src="./asset/img/tanker diesel 1.png"
                                   alt=""
                                   />
                                   <br/>
                                   <br/>

                                   <h3>Retail Downstream</h3>

                                   <br/>
                                   <br/>
                                   <p>Marketing and distribution of refined petroleum products through our network of retail stations across the country using company owned, leased and franchised stations. Our Retail Chain Management services focus on effective distribution of petroleum product in the retail outlets and efficient running of the stations. Our products include: PMS, HHK, AGO and lubricants whilst establishing appropriate non-fuels income that add value to drive in customers. Zone 4 Energy LTD is an active player in the downstream retail sector. By harnessing the wealth of industry experience available in our management team, we are able to offer the best value for money through excellent pump integrity and superior customer service.</p>

                                   </div>
                            
                            </Col>
                                    
                            <Col md={6}>
                            <div className="product_space">
                            <br/>
                                   <br/>
                                   <img
                                     src="./asset/img/Zone4 Lubes.png"
                                   alt=""
                                   />
                                   <br/>
                                   <br/>

                                   <h3>Lubricants</h3>

                                   <br/>
                                   <br/>
                                   <p>Your engine deserves some pampering. Zone 4 lubricants bring out the best in your engine while making sure to keep it in good shape and maximize its efficiency. Our range of lubricants for different type of vehicles and specifications remains a pacesetter in the industry and can rival engine lubricants anywhere in the world. With cutting edge technology in the production of these lubricants, you can rest assured that your engine is getting what it needs. Our proven and trusted technology guarantees that your vehicle performs optimally even in the most treacherous of situations.

Zone 4 Energy Lubricants; Peerless fluid engineering!</p>

                                   </div>
                           
                            </Col>
                            <Col md={6}>
                            <div className="product_space">
                            <br/>
                                   <br/>
                                   <img
                                     src="./asset/img/p2.png"
                                   alt=""
                                   />
                                   <br/>
                                   <br/>

                                   <h3>Bulk Trading</h3>

                                   <br/>
                                   <br/>
                                   <p>Bulk trading of refined petroleum products from various depots across the country. The company is poised to utilize an extensive product importation capability to supply a wide range of petroleum product at competitive prices. We operate primarily in the local market buying and selling petroleum products including but not limited to PMS, AGO, HHK, LPFO and base oils and engage in active trading on a daily basis. We are able to stay competitive by having the capacity to buy and trade in bulk, thereby giving discounts to our customers.</p>

                                   </div>
                                   </Col>
                                           
                                   <Col md={6}>
                                    <br/>
                                    <br/>

       
                                   <div className="product_space">
                                   <img
                                     src="./asset/img/tanker diesel.png"
                                   alt=""
                                   />
                                    <br/>
                                    <br/>
                                    <br/>

                                    <br/>
                                    <br/>



                                   <h3>Land Haulage</h3>
                                   <br/>
                                   <br/>
                                    
                                   <p>Zone 4 Energy efficiently undertakes transportation of petroleum products from one part of the country to another. In addition to enabling us to efficiently move our products overland, our well developed assets in haulage and logistics ensures that there is minimal lag time between product importation and delivery.</p>

                                   </div>
                                   </Col>
                                  <Col md={6}>
                                   <br/>
                                   <br/>

                                  <div className="product_space">
                                   <img
                                     src="./asset/img/p4.png"
                                   alt=""
                                   />
                                   <br/>
                                   <br/>

                                   <h3>Tank Farm Facility Management</h3>
                                   <br/>
                                   <br/>
                                   <p>Marketing and distribution of refined petroleum products through our network of retail stations across the country using company owned, leased and franchised stations. Our Retail Chain Management services focus on effective distribution of petroleum product in the retail outlets and efficient running of the stations. Our products include: PMS, HHK, AGO and lubricants whilst establishing appropriate non-fuels income that add value to drive in customers. Zone 4 Energy LTD is an active player in the downstream retail sector. By harnessing the wealth of industry experience available in our management team, we are able to offer the best value for money through excellent pump integrity and superior customer service.</p>

                                   </div>
                                   </Col>
                                           
                                   <Col md={6}>
                                    <br/>
                                    <br/>

                                   <div className="product_space">
                                   <img
                                     src="./asset/img/p6.png"
                                   alt=""
                                   />

                                    <br/>
                                    <br/>
                                   <h3>Marine</h3>
                                   <br/>
                                   <br/>
                                   
                                   <p>Zone 4 Energy provides services to offshore platforms supplying petroleum products and waste treatment which are returned to shore for proper treatment, recycling or disposal.</p>

                                   </div>
                                   </Col>
                        </Row>                
                    </Container> 
                </div>
        </React.Fragment>
  
  
    );

    }
  
    
}

export default Portfolio;

