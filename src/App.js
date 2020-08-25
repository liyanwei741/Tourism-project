import React, { Component } from 'react'
import { HashRouter as Router , Route } from 'react-router-dom'
import FirstRouter from './firstRouter'
import './style/style.scss'
import Tabbar from './components/tabbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <FirstRouter></FirstRouter>
        {/* <Tabbar></Tabbar> */}
      </div>
    )
  }
}
