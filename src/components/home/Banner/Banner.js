import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './banner.scss'
import imgURL1 from '../../../assers/img/u337.png';
import imgURL2 from '../../../assers/img/u338.png';
import imgURL3 from '../../../assers/img/u340.png';
import imgURL4 from '../../../assers/img/u341.png';

class Banner extends React.Component {
  state = {
    data: ['1', '2', '3' , '4'],
    imgHeight: 170,
  }
  componentDidMount() {
    // 模拟img加载
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 300);
  }
  render() {
    return (
      <div className="bannerbord">
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              // href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
              // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={imgURL2}
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
      </div>
    );
  }
}
export default Banner