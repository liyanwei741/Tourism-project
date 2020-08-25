import React, { Component } from 'react'
import './Details.css'
import { List } from 'antd-mobile';


 class details extends Component {
    Item = List.Item;
    Brief = this.Item.Brief;
    state = {
        disabled: false,
      }
    render() {
        return (
            <div className='details'>
                <img src='https://s1.ax1x.com/2020/08/25/dcvE0P.jpg'/>
                <div className='content'>
                    <div>
          <this.Item
          extra={'详情'}
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          维也纳酒店(上海浦东机场店)
          <this.Brief>Vienna Hotel (Shanghai Pudong Airport)</this.Brief>
        </this.Item>
        <this.Item extra={'108条评价'} multipleLine
          onClick={() => {}}
          platform="android">4.7 很棒 吃饭方便 交通便利</this.Item>
        <this.Item arrow="horizontal" multipleLine
          onClick={() => {}}
          platform="android">1月18日 今天 一晚 1月18日 明天</this.Item>
          <this.Item arrow="horizontal" multipleLine
          onClick={() => {}}
          platform="android">房间数 成人 儿童</this.Item>
                    </div>
                </div>
            </div>
        )
    }
}

export default details
