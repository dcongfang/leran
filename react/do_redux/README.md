- 组件间的状态, 兄弟, 父子, 多余代码
  大型项目,多组件,多个跨路由的组件共享状态
  共享状态
- 状态的管理 协同
  dispatch(action {type: '',payload: ''}) -> reducer(无差别的状态计算 switch case) -> state

  1. head body 两个函数组件,共享了单一的全局状态
  2. 状态全局,可以被随意的修改
  3. dispatch 使状态的改变可控,任何改变,都可以在dispatch中找到源头
  4. 通知发生了状态改变, oldState  newState,使用新的状态   subscribe
