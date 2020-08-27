import React, { Component } from 'react'
import Cards from './Cards'
export default class first extends Component {
    render() {
        return (
            <div>
                <Cards history={this.props.history}/>
            </div>
        )
    }
}
