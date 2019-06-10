import React, { Component } from "react";
import { Pagination, Spin } from "antd";
import SearchTab from "../../component/SearchTab";
import Footer from "../../component/Footer";
import CommodityItem from "./commodityItem";
import "./index.css";
class Commodity extends Component {
  state = {
    timer: null,
    loading: false
  };
  pageChange = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        window.scrollBy(0, -1800);
      }
    );
    this.setState({
      timer: setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 1000)
    });
  };
  render() {
    return (
      <div className={"commodity"}>
        <SearchTab />
        <div
          style={{
            backgroundColor: "#1890ff",
            height: 2,
            width: "100%",
            margin: "30px 0"
          }}
        />
        <div className={"wrapper"}>
          <Spin spinning={this.state.loading}>
            <CommodityItem />
            <CommodityItem />
          </Spin>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 24
            }}
          >
            <Pagination
              defaultCurrent={1}
              total={100}
              onChange={this.pageChange}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1890ff",
            height: 2,
            width: "100%",
            margin: "30px 0"
          }}
        />
        <Footer />
      </div>
    );
  }
}
export default Commodity;
