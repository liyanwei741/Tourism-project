import React, { Component } from 'react'
import UserCss from './User.module.scss'
import Tabtab from './Tabtab'
import { withRouter } from 'react-router-dom'
const User =()=>(
<div className={UserCss.d}>
    <div className={UserCss.IMG}><img src="https://s1.ax1x.com/2020/08/25/dgBcdS.png" alt="dgBcdS.png" border="0" /></div>
    <div className={UserCss.touxiang}></div>
     <div className={UserCss.red}>关注</div>
     <div className={UserCss.name}>你与昨日</div>
     <div className={UserCss.big}>足迹遍布全国</div>
     <div className={UserCss.small}>武汉</div>
     <div className={UserCss.qianming}>你得丢开以前的往事，才能不断的前进</div>
     <div className= {UserCss.zan}><b>6K</b><span>赞</span></div>
     <div className={UserCss.fensi}><b>2K</b><span>粉丝</span></div>
     <div className={UserCss.guanzhu}><b>2K</b><span>粉丝</span></div>
     <div className={UserCss.hui}></div>
     <div className={UserCss.cnm}><Tabtab/></div>
     
     
</div>
 
);
export default withRouter(User)