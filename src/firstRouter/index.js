import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../components/home/Home'
import Profile from '../components/profile'
import Hotel from '../components/hotel'
import Issued from '../components/issued'
import Discover from '../components/discover'
import Tabbar from '../components/tabbar'
import Search from '../components/home/Search'
import HotTopic from '../components/home/HotTopic'
import Login from '../components/user/Login'
class indexRouter extends Component {
    render() {
        return (

            <Router >

                <Route exact path="/index/home"component={Home} />
                <Route exact path="/index/discover" render={() => <Discover></Discover>} />
                <Route exact path="/index/issued" render={() => <Issued></Issued>} />
                <Route exact path="/index/hotel" render={() => <Hotel></Hotel>} />
                <Route exact path="/index/hotel/details"render={() =><Details></Details>}/>
                <Route exact path="/index/profile" render={() => <Profile></Profile>} />
                <Route path="/index/home/search" component={Search} />
                <Route path="/index/home/hottopic" component={HotTopic} />
                <Route path="/login" component={Login} />
                <Route path="/index" component={Tabbar} />
                <Redirect from='/*' to='/index/home'></Redirect>
            </Router>

        )
    }
}

export default indexRouter
