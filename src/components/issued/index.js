import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import Users from '../discover/User'
class index extends Component {
    render() {
        return (
            <div>
                
                <Users></Users>
            </div>
        )
    }
}
export default withRouter(index)