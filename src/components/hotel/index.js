import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import Carouselaotu from './Carousel'



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
            {/* <Carousel autoplay infinite>
            <div>
              <h3 style={this.contentStyle}> <img src="http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2007.png?token=b417d7caefca492a83b40e75b6692621d18dd68fd9eba0ab87979371b8046587" alt=""/></h3>
             
            </div>
            <div>
              <h3 style={this.contentStyle}><img src="http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2008.png?token=ebed147a3d1c1345bed657be7a09cb619103835d4370f4a841f6033a57a35137" alt=""/></h3>
            </div>
            <div>
              <h3 style={this.contentStyle}><img src="http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2010.png?token=5cc5c3172e4d591ff46223f0273f9b0bf519ed3abd36c1150194650f4135ea57" alt=""/></h3>
            </div>
            <div>
              <h3 style={this.contentStyle}><img src="http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2011.png?token=f98c4873dee5b0d040285760e140dedda91c53d0653209222da93c8c4ab013f1" alt=""/></h3>
            </div>
          </Carousel> */}

          <div>
          <h1>酒店</h1>
          </div>
            </div>
        )
    }
}
export default withRouter(index)