import React ,{ Component }from 'react'
import {  withRouter  } from 'react-router-dom'
import './search.scss'
class index extends Component {
    // useCallback 防止每一次渲染这个组件 都构建这个函数

    render(){
        return (
            <div className="page subpage" id="search">
                <h1>搜索组件</h1>
                <button>回去</button>
            </div>
        )
    }

}

export default withRouter(index)