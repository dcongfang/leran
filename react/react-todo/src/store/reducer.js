export default (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO': 
      return [{
        text: action.text,
        id: action.id,
        completed: action.completed || false
      }, ...state]
    // case 'TOGGLE_TODO': 
    //   return state.map((todo) => {
    //     if (action.id === todo.id) {
    //       return {...todo, completed: !todo.completed}
    //     }
    //     return todo
    //   })
      case 'DELETE_TODO':
        let copystate = state.concat();
        // if (action,id === copystate[]) {
          var newState = copystate.splice(action.id, 1)
        // }
        return newState
    default: 
    return state;
  }
}