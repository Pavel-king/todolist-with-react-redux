import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
import {Provider} from 'react-redux'
import store from './store/index.js'


ReactDOM.render(
<Provider store={store}>
    <TodoList />
</Provider>, document.getElementById('root'));

