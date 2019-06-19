import React from 'react';

class CommentInput extends React.Component {
  state = {
    username: '',
    comment: ''
  }
  handleSubmit = () => {
    const {username, comment} = this.state;
    const {onSubmit} = this.props;
    console.log(username, comment)
    onSubmit({
      username,
      comment
    })
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  render() {
    const {username, comment} = this.state;
    return (
      <div>
        <div>
          用户名:
          <input type="text" value={username} onChange={this.handleUsernameChange} placeholder="请输入用户名" />
        </div>
        <div>
          评论:
          <textarea name="" id="" value={comment} onChange={this.handleCommentChange} cols="30" rows="10"></textarea>
        </div>
        <div>
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
