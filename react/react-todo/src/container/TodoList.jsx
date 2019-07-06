import {connect} from 'react-redux';
import TodoList from '../components/TodoList'
// const mapStateToProps =(state)=>{
//   return {
//    text: state.text
//   }
// }
const mapDispatchToProps = (dispatch)=>{
  return {
    addTo:(value, generateID) => dispatch(
      {type: 'ADD_TODO',
      id: generateID,
      text: value
  })
  }
}

export default connect(null, mapDispatchToProps)(TodoList)