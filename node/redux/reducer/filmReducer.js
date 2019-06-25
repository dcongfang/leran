module.exports = function(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
    return [{
      id: action.id,
      name: action.name
    }, ...state];
    default:
    return state;
  }
}
