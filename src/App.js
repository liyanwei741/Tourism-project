import React, { Component } from 'react'
import { HashRouter as Router , Route } from 'react-router-dom'
import FirstRouter from './firstRouter'
<<<<<<< HEAD
import './App.css'
=======
import './style/style.scss'
import Tabbar from './components/tabbar'
>>>>>>> 8c92f2f29556b886debd6c5badbfe8a8f94f2cca
export default class App extends Component {
  render() {
    return (
      <div>
        <FirstRouter></FirstRouter>
      </div>
    )
  }
}
