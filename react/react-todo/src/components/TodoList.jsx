import React, { Component } from 'react';
let generateID = -1;
class TodoList extends Component {
  render() { 
    return ( 
      <form onSubmit={e => {
          e.preventDefault();
          if (this.inputNode.value.trim()) {
            // 添加
            generateID++
            this.props.addTo(this.inputNode.value.trim(), generateID)
            
            // dispatch({
            //   type: 'ADD_TODO',
            //   id: generateID,
            //   text: this.inputNode.value.trim()
            // })
          }
        }}>
          <input type="text" ref={node => this.inputNode = node}/>
          <button type="submit">
            addToDo
          </button>
        </form>
     );
  }
}
 
export default TodoList;