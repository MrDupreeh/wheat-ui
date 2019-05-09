import React, { Component } from "react";
import { Input, Icon } from "antd";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./index.css";
const Search = Input.Search;
class SearchTab extends Component {
  render() {
    return (
      <div className={"searchTab"}>
        <Link to="/">
          <img src={Logo} alt='麦趣'/>
        </Link>
        <div>
          <Search
            placeholder="搜索想要的宝贝吧~"
            enterButton="麦趣一下"
            size="large"
            style={{ width: 600 }}
          />
        </div>
        <div className={"shopCar"}>
          <Icon type="shopping-cart" style={{ color: "#ee0000" }} />
          &nbsp; 我的购物车
        </div>
      </div>
    );
  }
}
export default SearchTab;
