import React, { Component } from 'react'
import HeaderComponent from '../header/HeaderComponent';
import image2 from '../../assets/images/image2.jpg'
import { Link } from 'react-router-dom';

class AboutUsComponent extends Component {
    render() {
        return (
            <div className="bodycolor">
                <HeaderComponent />
                <div className="container"> 
                    <div className="main-content">
          <div id="person">
            <div className="container">
              <div
                id="login-row"
                className="row justify-content-center align-items-center"
              >
                <div className="col-md-8">
                  <div className="col-md-12  text-center">                  
                    <div className="info">
                    <h4 id="fsize" className="text-center">
                      About Us
                    </h4>
                     <h5 className="text-center">
                      Vahicle Servicing aims to make your two wheeler ownership simple, effective and stress free.
                    </h5>
                    </div>
                  
                    <div className="row text-center" > 
                      <div className="col-sm-4 form-group">
                      <div className="form-group">
                      <Link to="/booknow">
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-warning btn-md"
                        value="BOOK NOW"
                        
                      /> </Link>
                      </div>
                      </div>

                      <div className="col-sm-4 form-group">
                      <div className="form-group">
                      <Link to="/contactus">
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-outline-warning btn-md"
                        value="CONTACT US"
                        
                      /> </Link>
                      </div>
                      </div>

                      <div className="col-sm-4 form-group">
                      <div className="form-group">
                      <Link to="/ourservices">
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-outline-warning btn-md"
                        value="OUR SERVICES"
                        
                      /> </Link>
                      </div>
                      </div>
                   </div>
                   <div className="form-group">
                       <div className="form-group">
                           <img src={image2} alt="Image1" width= "80%" height= "100%"/>
                        
                         </div>
                      </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                    </div>
            </div>
        )
    }
}
export default AboutUsComponent;
