import {CHANGE_INPUT_VALUE, ADD_ITEM, ITEM_DELETE} from './actionTypes.js'

export const changeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const ItemDeleteAction = (index) => ({
    type: ITEM_DELETE,
    index: index
})