import React, { Component } from 'react';
class List extends Component {
  state = {  }
  render() { 
    // const {list} = this.props;
    // console.log(list);
    return ( 
      <div>
       {this.props.list.map((item, index) => {
   return (
          <div key={index}>
            <li>{item.text}</li>
            <button onClick={() => {this.props.deleteItem(index)}}>删除</button>
          </div>
          )
          
         })}
      </div>
     );
      
  }
}
 
export default List;