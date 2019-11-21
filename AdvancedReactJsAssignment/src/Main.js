import React from 'react'
import { Switch, Route } from 'react-router';
import HomeComponent from './components/dashboard/HomeComponent';
import AboutUsComponent from './components/aboutus/AboutUsComponent';
import PricingComponent from './components/pricing/PricingComponent';
import OurOffersComponent from './components/ouroffers/OurOffersComponent';
import ContactUsComponent from './components/contactus/ContactUsComponent';
import BookNowComponent from './components/booknow/BookNowComponent';
import LoginComponent from './container/login/LoginComponent';
import SignUpComponent from './container/signup/SignUpComponent';
import CheckVehicleStatusComponent from './components/dashboard/CheckVehicleStatus';

import CustomerComponent from './components/customer/customer';
import CustomerNavbarComponent from './components/customer/customer-navbar';
import CustomerSidebarComponent from './components/customer/customer-sidebar';
import VehicleServicingDetailsComponent from './components/customer/vehicle/vehicle-servicing-details';
import VehicleBookingComponent from './components/customer/vehicle/vehicle-booking';
import VehicleHistoryComponent from './components/customer/vehicle/vehicle-history';

const Main = () => (
    <div>
        <main>
            <Switch>
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path="/checkstatus" component={CheckVehicleStatusComponent} />
                <Route exact path="/aboutus" component={AboutUsComponent} />
                <Route exact path="/pricing" component={PricingComponent} />
                <Route exact path="/ouroffers" component={OurOffersComponent} />
                <Route exact path="/contactus" component={ContactUsComponent} />
                <Route exact path="/booknow" component={BookNowComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/signup" component={SignUpComponent} />

                <Route exact path="/" component={CustomerComponent} />
                <Route exact path="/customernavbar" component={CustomerNavbarComponent} />
                <Route exact path="/customersidebar" component={CustomerSidebarComponent} />
                <Route exact path="/vehicleServicingDetails" component={VehicleServicingDetailsComponent} />
                <Route exact path="/vehicleBooking" component={VehicleBookingComponent} />
                <Route exact path="/vehicleHistory" component={VehicleHistoryComponent} />           
            </Switch>
        </main>
    </div>
)
export default Main;