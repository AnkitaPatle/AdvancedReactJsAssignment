import React, { Component } from 'react'
import HeaderComponent from '../header/HeaderComponent';
import '../dashboard/home.css';
import img from '../../assets/images/servicing.png'


class CheckVehicleStatusComponent extends Component {
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
                  <div className="col-md-12">                  
                    <div className="info">
                    <h4 id="fsize" className="text-center">
                      Add More Life to Your Vahicle
                    </h4>
                    </div>
                    <div className="box">
                    <div className="row"> 
                      <div className="col-sm-6 form-group"> 
                           
                      <div className="form-group text-center">
                        <div class="input-group">
                        <input
                             type="text"
                             name="trackingid"
                             className="form-control"
                             placeholder="Tracking ID"
                        
                         />  
                        <span class="input-group-btn">
                        <input
                            type="submit"
                            name="submit"
                            className="btn btn-warning btn-md"
                            value="CHECK STATUS"
                        
                        />  
                        </span>
                        </div>                                                              
                    </div>  
                    <div className="form-group text-center">
                    <label htmlFor="or" >
                            Or
                    </label>
                    </div>
                    <div className="form-group text-center">
                    <label htmlFor="callus" >
                            Call Us On 123456789
                    </label>
                    </div>
                      </div>
                      <div className="col-sm-6 form-group">
                       <div id="images" className="form-group">
                           <img src={img} alt="Cinque Terre" />
                        
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
                    </div>
            </div>
        )
    }
}
export default CheckVehicleStatusComponent;
