import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class index extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[1,2,3]
        }
    }
    componentDidMount(){
        this.setState({
            data:[4,5,6]
        })
    }
    render() {
        return (
            console.log(this.state.data),
            <div>
            
           
                {this.state.data.map((item)=>{
            return <div key={item}>{item}</div>
            })}
            
                <div>
                    
                    <h1>发布</h1>
                </div>
            </div>
        )
    }
}
export default withRouter(index)