import { Card, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HotelCard extends Component {
render(){
    return(
  <div>
    <WhiteSpace size="lg" />
    <p style={{fontSize:'20px',fontWeight:800}}>酒店推荐</p>
    <Card full>
    <Link to='/hotel/details'>
      <Card.Body style={{display:"flex",}}>
          
          <img src="https://s1.ax1x.com/2020/08/25/dcy0UO.png" />
        
        <div>
          
            <h4>维也纳酒店(上海浦东机场店)</h4>
            <p><span>闪住</span><span>预约发票</span></p>
            <p><span>4.6</span><span>¥308</span>起</p>    
        </div>
      </Card.Body>
      </Link>
    </Card>
  </div>)
}
}

export default HotelCard