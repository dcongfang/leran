import React from 'react';
import withLogin from './WithLogin';
@withLogin
class LoginStatus extends React.Component {
  render() {
    return (
      <button>已经登录</button>
    )
  }
}
export default LoginStatus;