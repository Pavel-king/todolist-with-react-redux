import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeInputValueAction, addItemAction, ItemDeleteAction} from './store/actionCreators.js'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return <div>
            <div>
                <input value={this.props.inputValue} onChange={this.props.changeInputValue}></input>
                <button onClick={this.props.handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    this.props.list.map((item, index) => {
                        return <li key={index} onClick={(e) => {
                            //删除index位置上的元素
                            this.props.handleItemClick(index);
                        }}>{item}</li>
                    })
                }
            </ul>
        </div>
    }
}

//将store的值映射到组件props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue: (e) => {
            const action = changeInputValueAction(e.target.value)
            dispatch(action)
        },
        handleBtnClick: (e) => {
            const action = addItemAction()
            dispatch(action)
        },
        handleItemClick: (index) => {
            const action = ItemDeleteAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);