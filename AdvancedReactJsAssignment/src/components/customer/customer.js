import React, { Component } from 'react'
import CustomerNavbarComponent from '../customer/customer-navbar';
import CustomerSidebarComponent from '../customer/customer-sidebar';
import '../customer/customer.css';

class CustomerComponent extends Component {
    render() {
        return (
            <div className="bodycolor">
                <CustomerNavbarComponent />
                <CustomerSidebarComponent />

                <div className="gridwrapper">
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
                    </div>  
               
                <p>VehicleServicingDetailsComponent</p>
                
            </div>
                
            </div>
        )
    }
}

export default CustomerComponent;
