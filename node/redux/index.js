const { createStore } = require('redux');
const reducer = require('./reducer/index');
const store = createStore(reducer);
store.subscribe(() => {
  console.log('store change:', store.getState());
})
store.dispatch({
  type: 'ADD_FILM',
  id: 0,
  name: '流浪地球'
})
console.log(store.getState());
