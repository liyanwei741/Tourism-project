import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'

class Carouselaotu extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    
      this.setState({
        data: ['http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2007.png?token=b417d7caefca492a83b40e75b6692621d18dd68fd9eba0ab87979371b8046587'
        ,
         'http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2008.png?token=ebed147a3d1c1345bed657be7a09cb619103835d4370f4a841f6033a57a35137'
         , 'http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2010.png?token=5cc5c3172e4d591ff46223f0273f9b0bf519ed3abd36c1150194650f4135ea57'
         ,'http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/%E9%85%92%E5%BA%97/u2011.png?token=f98c4873dee5b0d040285760e140dedda91c53d0653209222da93c8c4ab013f1'],
      });
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
export default Carouselaotu