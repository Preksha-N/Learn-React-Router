// App frame

import React, {Component} from "react";
import{
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Components/Home";
import Learn from "./Components/Learn";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Style from "./Styles/Style.css"
class App extends Component{
  render(){
    return(
      <HashRouter>
        <div className="Container">
          <h1>Learn React Router</h1>
          <ul className="header">
           
            <li><NavLink to="/">Home</NavLink ></li>
            <li><NavLink to="/learn">Learn</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink ></li>
            <li><NavLink to="/contact">Contact</NavLink ></li>
            
            {/* TO is a prop */}
           
          </ul>
          <div className="content">
           
            <Route exact path="/" component={Home}/>
            <Route path="/learn" component={Learn}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            
             {/* route container has a prop path */}
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;