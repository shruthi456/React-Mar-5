import React,{Component} from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'


import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'


class App extends Component {
    render(){
        return<div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/index" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Services" component={Services}/>
                    <Route path="/Contact" components={Contact}/>
                </Switch>
            </Router>
        </div>
    }
}
export default  App