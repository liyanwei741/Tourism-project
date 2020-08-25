import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Carouselaotu from './Carousel'
import Tabs from './Tabs'
import HotelCard from './card'
import './index.css'

class index extends Component {
    contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    
    render() {
        return (
            <div>
               <Carouselaotu></Carouselaotu>
               <Tabs></Tabs>
               <div>
                 <HotelCard></HotelCard>
               </div>
            </div>
        )
    }
}
export default withRouter(index)