import React, { Component } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import SearchTab from "../../component/SearchTab";
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";
import banner4 from "../../images/banner/banner4.jpg";
import banner5 from "../../images/banner/banner5.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <div className={"wrapper"}>
          <SearchTab />
        </div>
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <div className={"wrapper"}>
            <div style={{width:600}}>
              <Carousel autoplay effect="fade">
                <div>
                  <img src={banner1} width="600" height="300" alt="" />
                </div>
                <div>
                  <img src={banner2} width="600" height="300" alt="" />
                </div>
                <div>
                  <img src={banner3} width="600" height="300" alt="" />
                </div>
                <div>
                  <img src={banner4} width="600" height="300" alt="" />
                </div>
                <div>
                  <img src={banner5} width="600" height="300" alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
