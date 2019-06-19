import React from 'react';

class CommentList extends React.Component {
  render() {
    const {commentLists} = this.props;
    return (
      <ul>
        {
          commentLists.map(({username,comment}, i) => (
            <li key={i}>
              {username}
              {comment}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default CommentList;

