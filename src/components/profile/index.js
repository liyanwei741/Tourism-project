import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom'
import {BellOutlined} from '@ant-design/icons'
import './index.css'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liArrt:[
            {name:'我的收藏',link:"/"},
            {name:'浏览记录',link:"/"},
            {name:'我的订单',link:"/"},
            {name:'问答专区',link:"/"},
            {name:'我的优惠券',link:"/"},
            {name:'设置',link:"/"},
        ]
        }
    }
    
    render() {
        return (
            <div className="profile">
                <div className="header">
                <BellOutlined />
                    <div className="portrait">
                        <img src="http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/我的/u3143.png?token=8ed8968dce5f2e3c326f9d9e1c9b09b56cfcfab5b51ec76f54e29f87bb8b6217"/>
                    </div>
                    <div className="userName">
                        <span>小可</span>
                        <p>开开心心每一天</p>
                    </div>
                </div>

                <div className="headerState">
                    <div className="fans"><span>56</span><p>粉丝</p></div>
                    <div className="follow"><span>52</span><p>关注</p></div>
                    <div className="likes"><span>1.1W</span><p>点赞</p></div>
                </div>

                <div className="content">
                    {this.state.liArrt.map((item,index)=>{
                        return <div key={index}>
                            <span><Link to={item.link}>{item.name}</Link></span>
                            <Link to={item.link}><img src="http://cloud.axureshop.com/gsc/WHP1Q6/32/0c/cc/320ccc836df64b6789a160c1b59f6a47/images/我的/u3154.png?token=95c729c80e762f13459ce7fede7ade3a4c721e658a90e6141dc9fd779315ac6b"/></Link>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default withRouter(index)
