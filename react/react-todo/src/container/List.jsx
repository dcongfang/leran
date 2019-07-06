import {connect} from 'react-redux';
import List from '../components/List'
const mapDispatchToProps = (dispatch)=>{
  return {
    // toggleTo:id => dispatch({
    //   type: 'TOGGLE_TODO',
    //   id
    // }),
    deleteItem: index => dispatch({
      type: 'DELETE_TODO',
      id: index
    })
  }
} 

const mapStateToProps =(state)=>{
  return {
   list: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)