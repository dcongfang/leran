import React from 'react';
import logo from './logo.svg';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './App.css';

class App extends React.Component {
  state = {
    commentLists: []
  }
  handleSubmit = (val) => {
    console.log('从子组件', val);
    let commentLists = this.state.commentLists.slice(0);//浅拷贝
    commentLists.push(val);
    this.setState({
      commentLists
    })
  }
  render() {
    const {commentLists} = this.state;
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit}></CommentInput>
        <CommentList commentLists={commentLists}></CommentList>
      </div>
    )
  }
}

export default App;
