import React from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux'
import TodoList from './container/TodoList'
import List from './container/List'
function App() {
  return (
    <div>
      <Provider store={store}>
        <TodoList></TodoList>
        <List></List>
      </Provider>
    </div>
  );
}

export default App;
