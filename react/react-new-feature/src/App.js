import React from 'react';
import './App.css';
import EffectHookDemo from './hook/effectHook'
import PrepareForEffectHook from './hook/prepareForEffectHook'
import ReducerHookDemo from './hook/ReducerHook'
// import ConcurrentModeDemo from './ConcurentMode/index'
// import StateHook from './hook/stateHook'
function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo></ConcurrentModeDemo> */}
      <PrepareForEffectHook></PrepareForEffectHook>
      <EffectHookDemo></EffectHookDemo>
      <ReducerHookDemo></ReducerHookDemo>
      {/* <StateHook></StateHook> */}
    </div>
  );
}

export default App;
