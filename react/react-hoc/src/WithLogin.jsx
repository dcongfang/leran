import React, { Component } from 'react';

const withLogin = (Com) => {
  const isLogin = true
  class NewComponent extends  Component {
    render() {
      const props = this.props;
      if (!isLogin) {
        return (
          <button>需要登录</button>
        )
      }
      return (
        <Com {...props}></Com>
      )
    }
  }
  return NewComponent;
}
 
export default withLogin;