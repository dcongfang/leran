import React from 'react';

class Child1 extends React.Component {
  state = {
    a: 1
  }
  /**
   * 更新 state
   * 根据返回值 {}
   * null
   */
  /**
   * 
   * willMount props setState
   */
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      ...props,
      ...state
    };
  }
  handleStateChange = () => {
    this.setState({
      a: 10
    })
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return 888;
  }
  // a === undefined 15.x
  // a === getSnapshotBeforeUpdate() 16.x
  componentDidUpdate(preProps, preState, a) {
    console.log('componentDidUpdate', a);
  }
  render() {
    console.log('渲染时候的 state', this.state);
    return (
      <div>
        <button onClick={this.handleStateChange}>
          change state
        </button>
        child1 Component
      </div>
    )
  }
}
export default Child1;