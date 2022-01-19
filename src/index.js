import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom"
import App from './App';
import header from "./component/Header"
import ourClasses from './component/OurClasses';
import Blog from "./component/Blog"
import NewComp from "./component/NewComp"
import Pricing from './component/Pricing';
import Form from "./component/Form"
import About from "./component/Aboutus"
import Services from "./component/Services";
import Payment from "./component/Payment"
import Contactus from "./component/Contactus"
import Cong from "./component/Cong"

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/header" component={header}/>
      <Route path="/ourclasses" component={ourClasses}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/newcomp" component={NewComp}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/form" component={Form}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/payment" component={Payment}/>
      <Route path="/contact" component={Contactus}/>
      <Route path="/cong" component={Cong}/>
    </Switch>
  </Router>
)

ReactDOM.render(routing ,document.getElementById('root')
);


