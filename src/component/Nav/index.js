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
    text: "浙江"
  };
  onCascaderChange = value => {
    this.setState({
      text: value[1] ? value[1] : value[0]
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className={"nav"}>
        <div className={"wrapper"}>
          <ul style={{ display: "flex", float: "left" }} className={"left"}>
            <li>请登录</li>
            <li>免费注册</li>
            <li>
              <Cascader
                options={options}
                onChange={this.onCascaderChange}
                changeOnSelect
              >
                <span style={{ cursor: "pointer" }}>
                  {text}
                  &nbsp;
                  <Icon type="down" />
                </span>
              </Cascader>
            </li>
          </ul>
          <ul style={{ display: "flex", float: "right" }} className={"right"}>
            <li>
              <Link to="/home">麦趣网首页</Link>
            </li>
            {/* <li>
              <Icon type="shopping-cart" style={{ color: "#ffd700" }} /> 购物车
            </li> */}
            <li>个人中心</li>
            <li>麦趣会员</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Nav;
