import React, { Component } from 'react';
import { Table } from 'antd';
function Message(props) {
  const {msg} = props;
  return (
    <li>
      {msg.time}
    </li>
  )
}
class Index extends Component {
  state = {
    msgs: [
      {
        time: '2017-6-29'
      },
      {
        time: '2018-4-29'
      }
    ]
  }
  // 每隔 3秒 放一个时间进去
  handlePushTime = () => {
    const date = new Date();
    const dateLocal = date.toLocaleTimeString();
    this.setState({
      msgs: [...this.state.msgs, {time: dateLocal}]
    })
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.handlePushTime();
  //   }, 3000)
  // }
  render() {
    const data = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        key: 'key',
        render: (text, record) => {
          return (
            <div>
              <a href="#">+</a>
              <a href="#">-</a>
              正常操作的key: {record.key}
            </div>
          )
        }
      }
    ];
    const { location } = this.props;
    const { msgs } = this.state;
    return (
      <div>
        { location.search }
        {
          msgs.map((msg, i) => {
            return (
              <Message key={i} msg={msg} />
            )
          })
        }
        <Table dataSource={data} columns={columns}></Table>
      </div>
    )
  }
}
export default Index;