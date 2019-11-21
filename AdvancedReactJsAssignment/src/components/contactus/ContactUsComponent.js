import React, { Component } from 'react'
import HeaderComponent from '../header/HeaderComponent';

class ContactUsComponent extends Component {
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
                          Contact Us
                    </h4>
                      </div>
                      <div className="box">
                        <div className="row">
                          <div className="col-sm-6 form-group">
                            <div className="form-group">
                              <label htmlFor="name">
                                Name:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"                               
                              />
                            </div>
                             <div className="form-group">
                              <label htmlFor="phonenumber">
                                Phone Number:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="phonenumber"
                                id="phonenumber"
                                className="form-control"                               
                              />
                            </div>  
                          </div>

                          <div className="col-sm-6 form-group">
                             <div className="form-group">
                              <label htmlFor="email">
                                Email:
                              </label>
                              <br />
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"                               
                              />
                            </div>                           
                          </div>
                           <div className="col-sm-12 form-group">
                              <label htmlFor="message">
                                Message:
                              </label>
                              <br />
                              <textarea 
                                class="form-control" 
                                rows="4"  
                                name="message"
                                id="message">
                              </textarea>                              
                            </div>   
                             <div className="col-sm-6 form-group text-center">
                              <input
                                type="submit"
                                name="submit"
                                className="btn btn-warning btn-md form-control"
                                value="SEND MESSAGE"               
                              />
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
export default ContactUsComponent;
