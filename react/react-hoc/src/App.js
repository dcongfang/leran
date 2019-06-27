import React from 'react';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import ExampleMobx from './exampleMobx/index';
import withLogin from './WithLogin';
import examplebase from './examplebase/index';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <React.Fragment>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2" /> */}
      <ExampleMobx />
    </React.Fragment>
  )
}

export default App;
