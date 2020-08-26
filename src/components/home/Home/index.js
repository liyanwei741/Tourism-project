import React, { Component } from 'react'
import { CommentOutlined, SearchOutlined, RightOutlined ,HeartOutlined } from '@ant-design/icons';
import { withRouter, Link } from 'react-router-dom'
import { Button, WhiteSpace } from 'antd-mobile';
import Banner from '../Banner/Banner'
import './home.scss'
import imgURL from '../../../assers/img/u157.png';
import imgURL2 from '../../../assers/img/u163.png';
import imgURL3 from '../../../assers/img/u198.png';
import imgURL4 from '../../../assers/img/u208.png';
import imgURL5 from '../../../assers/img/u204.png';



class index extends Component {
    render() {
        return (
            <div className="page" id="home">
                {/* 搜索框 */}
                <div className="seachhome">
                    <div className="seachbox">
                        <div className="seachicon">
                            <SearchOutlined style={{ fontSize: "20px", marginLeft: "10px", color: "#ccc" }} />
                        </div>
                        <div className="seachinput">请输入你想要的</div>
                    </div>
                    <CommentOutlined onClick={this.xiaoxi} style={{ fontSize: "20px", marginLeft: "10px", lineHeight: "35px" }} />
                </div>
                {/* 轮播图 */}
                <div className="banner">
                    <Banner />
                </div>
                <div className="hottopic">
                    <div className="hotheader">
                        <span>热门话题</span>
                        <RightOutlined style={{ float: "right" }} />
                    </div>
                    <div className="hottitle">
                        <ul>
                            <li>
                                <img src={imgURL} alt=""/>
                                <span>超美的蓝色在约克半岛开启一场奇幻之旅</span>
                                <p>讨论中 : 15W</p>
                            </li>
                            <li>
                                <img src={imgURL2} alt="" />
                                <span>世界上最色的12座城，那一座让你心动？</span>
                                <p>讨论中 : 15W</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="homeshare">
                    <div className="sharebody">
                        <div className="shareheader">
                            <span>旅游分享</span>
                        </div>
                    
                        <div className="sharelist">
                             <div className="shareChil">
                                <img src={imgURL3} alt=""/>
                                <span>好不容易离开了自己呆腻的地方，去了别人的地方</span>
                                <div className="pelemt">
                                    <img src={imgURL5} alt=""/>
                                    <span>如初</span>
                                    <div className="pelemtchile">
                                        <HeartOutlined />
                                        <span>1000</span>
                                    </div> 
                                </div>
                            </div>
                            <div className="shareChil">
                                <img src={imgURL3} alt=""/>
                                <span>好不容易离开了自己呆腻的地方，去了别人的地方</span>
                                <div className="pelemt">
                                    <img src={imgURL5} alt=""/>
                                    <span>如初</span>
                                    <div className="pelemtchile">
                                        <HeartOutlined />
                                        <span>1000</span>
                                    </div> 
                                </div>
                            </div>
                            <div className="shareChil">
                                <img src={imgURL3} alt="" />
                                <span>好不容易离开了自己呆腻的地方，去了别人的地方</span>
                                <div className="pelemt">
                                    <img src={imgURL5} alt=""/>
                                    <span>如初</span>
                                    <div className="pelemtchile">
                                        <HeartOutlined />
                                        <span>1000</span>
                                    </div> 
                                </div>
                            </div>
                            <div className="shareChil">
                                <img src={imgURL3} alt=""/>
                                <span>好不容易离开了自己呆腻的地方，去了别人的地方</span>
                                <div className="pelemt">
                                    <img src={imgURL5} alt=""/>
                                    <span>如初</span>
                                    <div className="pelemtchile">
                                        <HeartOutlined />
                                        <span>1000</span>
                                    </div> 
                                </div>
                            </div>
                            <div className="shareChil">
                                <img src={imgURL3} alt=""/>
                                <span>好不容易离开了自己呆腻的地方，去了别人的地方</span>
                                <div className="pelemt">
                                    <img src={imgURL5} alt=""/>
                                    <span>如初</span>
                                    <div className="pelemtchile">
                                        <HeartOutlined />
                                        <span>1000</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
    xiaoxi = () => {
        console.log('ssss');
    }
}

export default withRouter(index)
