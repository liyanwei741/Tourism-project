import React, { Component } from 'react'
import { HashRouter as Router , Route } from 'react-router-dom'
import FirstRouter from './firstRouter'
import './style/style.scss'
export default class App extends Component {
  render() {
    return (
      <div>
        <FirstRouter></FirstRouter>
      </div>
    )
  }
}
