import {CHANGE_INPUT_VALUE, ADD_ITEM, ITEM_DELETE} from './actionTypes.js'

const defaultState ={
    inputValue: '123',
    list: ['111', '222', '333']
}

const reducer = (state = defaultState, action) => {
    let newState;
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        case ADD_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case ITEM_DELETE:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            return newState
        default: 
            return state
    }
}

export default reducer