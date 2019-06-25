import React from 'react';
import toast from './toast/index';
import {Button} from 'antd';
import './App.css';

const openNotificationWithIcon = type => {
  toast[type]('这是提示的内容');
};
function App() {
  return (
    <div>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </div>

  );
}

export default App;
