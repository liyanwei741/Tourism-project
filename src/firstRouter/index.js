import React, { Component } from 'react'
import { HashRouter as Router,Route,Redirect } from 'react-router-dom'
import Home from '../components/home'
import Profile from '../components/profile'
import Hotel from '../components/hotel'
import Issued from '../components/issued'
import Discover  from '../components/discover'
import Tabbar from '../components/tabbar'
import Details from '../components/hotel/Details'
class indexRouter extends Component {
    render() {
        return (
            
            <Router >

                    <Route exact path="/home" 
                    component={Home}></Route>
                    
                    <Route exact path="/discover" 
                    render={ () =><Discover></Discover>}></Route>

                    <Route exact path="/issued" 
                    render={ () =><Issued></Issued>}></Route>

                    <Route exact path="/hotel" 
                    render={ () =><Hotel></Hotel>}></Route>


                    <Route exact path="/profile" 
                    render={ () =><Profile></Profile>}></Route>
                    
                    <Route exact path="/hotel/details"
                    render={ () =><Details></Details>}></Route>

                    <Route path="/" component={Tabbar}>
                </Route>

                    <Redirect from='/*' to='/home'></Redirect>
            </Router>
            
        )
    }
}

export default indexRouter
