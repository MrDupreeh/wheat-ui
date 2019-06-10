import React, { Component } from "react";
import { Cascader, Icon } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import "../../common.css";
const options = [
  {
    value: "浙江省",
    label: "浙江省",
    children: [
      {
        value: "杭州",
        label: "杭州"
      }
    ]
  },
  {
    value: "江苏省",
    label: "江苏省",
    children: [
      {
        value: "南京",
        label: "南京"
      }
    ]
  },
  {
    value: "内蒙古自治区",
    label: "内蒙古自治区",
    children: [
      {
        value: "通辽",
        label: "通辽"
      },
      {
        value: "包头",
        label: "包头"
      },
      {
        value: "呼和浩特",
        label: "呼和浩特"
      }
    ]
  }
];
class Nav extends Component {
  state = {
    text: "浙江",
    user: ""
  };
  componentDidMount() {
    const loginMsg = sessionStorage.getItem("userName");
    this.setState({ user: loginMsg });
    const {text} = this.state
    sessionStorage.setItem('address',JSON.stringify(text))
  }
onCascaderChange = value => {
  sessionStorage.setItem('address',JSON.stringify(value))
  this.setState({
    text: value[1] ? value[1] : value[0]
  });
};
  render() {
    const { text, user } = this.state;
    return (
<div className={"nav"}>
  <div className={"wrapper"}>
    <ul className={"left"}>
      {user ? (
        <li>你好，{user}</li>
      ) : (
        <div style={{ display: "flex" }}>
          <li><Link to="/login">请登录</Link></li>
          <li><Link to="/register">免费注册</Link></li>
        </div>
      )}
      <li>
        <Cascader
          options={options}
          onChange={this.onCascaderChange}
          changeOnSelect
        >
          <span style={{ cursor: "pointer" }}>
            {text}&nbsp;
            <Icon type="down" />
          </span>
        </Cascader>
      </li>
    </ul>
    <ul className={"right"}>
      <li><Link to="/">麦趣网首页</Link></li>
      <li>个人中心</li>
      <li>麦趣会员</li>
    </ul>
  </div>
</div>
    );
  }
}
export default Nav;
