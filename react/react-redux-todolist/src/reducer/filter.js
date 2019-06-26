

export default (state = 'All', action) => {
  if (['ALL', 'ACTIVE', 'COMPLETED'].includes(action.type)) {
    return action.type;
  }
  return state
}