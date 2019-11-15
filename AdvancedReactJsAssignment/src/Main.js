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

const Main = () => (
    <div>
        <main>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/aboutus" component={AboutUsComponent} />
                <Route exact path="/pricing" component={PricingComponent} />
                <Route exact path="/ouroffers" component={OurOffersComponent} />
                <Route exact path="/contactus" component={ContactUsComponent} />
                <Route exact path="/booknow" component={BookNowComponent} />
                <Route exact path="/login" component={LoginComponent} />
                 <Route exact path="/signup" component={SignUpComponent} />
            </Switch>
        </main>
    </div>
)
export default Main;