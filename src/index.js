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
    </Switch>
  </Router>
)

ReactDOM.render(routing ,document.getElementById('root')
);


