import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import TabtabCSS from './Tabtab.module.scss'

const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge> },
  { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  
];
const Tabtab = () =>(
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
    </Tabs> 
)


export default (Tabtab)