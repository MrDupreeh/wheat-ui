import React, { Component } from "react";
import $ from "jquery";
import { Carousel, Divider } from "antd";
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";
import banner4 from "../../images/banner/banner4.jpg";
import banner5 from "../../images/banner/banner5.jpg";
import listItem1 from "../../images/listItem/1.jpg";
import listItem2 from "../../images/listItem/2.jpg";
import listItem3 from "../../images/listItem/3.jpg";
import listItem4 from "../../images/listItem/4.jpg";
import listItem5 from "../../images/listItem/5.jpg";
import listItem6 from "../../images/listItem/6.jpg";
import "./index.css";
class MenuList extends Component {
  componentDidMount() {
    $(".menu")
      .find("li")
      .mouseover(function() {
        $(this).css("background", "#ffd700");
        $(this)
          .find(".listItemBox")
          .stop()
          .fadeIn();
        $(this)
          .siblings()
          .find(".listItemBox")
          .stop()
          .fadeOut();
      });
    $(".menu")
      .find("li")
      .mouseleave(function() {
        $(this).css("background", "#fff");
      });
    $(".menu").mouseleave(function() {
      $(this)
        .find(".listItemBox")
        .stop()
        .fadeOut();
    });
  }
  goSort = () => {
    window.location.href = "/sort";
  };
  render() {
    return (
      <div className={"menu"}>
        <ul className={"menuList"} onClick={this.goSort}>
          <li>
            女装 / 男装 / 内衣
            <span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>女装</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>男装</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>内衣</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem4} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            鞋靴 / 箱包 / 配件<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>鞋靴</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>箱包</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>西装</span>&nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>配件</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem6} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem1} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            家电 / 数码 / 手机<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>家电</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>数码</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>手机</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            运动 / 户外 / 乐器<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>运动</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>户外</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>乐器</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem5} alt="" />
                  <img src={listItem6} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            鲜花 / 宠物 / 农资<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>鲜花</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>宠物</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>农资</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            美食 / 生鲜 / 零食<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>美食</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>生鲜</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>零食</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem2} alt="" />
                  <img src={listItem1} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            工具 / 装修 / 建材<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>工具</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>装修</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>建材</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            家具 / 家饰 / 家纺<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>家具</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>家饰</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>家纺</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem2} alt="" />
                  <img src={listItem1} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            汽车 / 二手车用品<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>汽车</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>二手车用品</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            美妆 / 洗护 / 保健品<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>美妆</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>洗护</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>保健品</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            玩具 / 孕产 / 用品<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>玩具</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>孕产</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>蕾丝衫/雪纺衫</span> &nbsp;&nbsp;
                    <span>大码</span>
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>明星网红</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>用品</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li>
            学习 / 卡券 / 服务<span style={{ float: "right" }}>></span>
            <div className={"listItemBox"}>
              <div className={"listItem"}>
                <div className={"listItem-left"}>
                  <div style={{ width: 490 }}>
                    <h3>学习</h3>
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>夏上新</span>&nbsp;&nbsp;
                    <span>连衣裙</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>半身裙</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>大码女装</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>卡券</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>短外套</span>&nbsp;&nbsp;
                    <span>时尚套装</span>&nbsp;&nbsp;
                    <span>羽绒服</span> &nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                    <span>风衣</span> &nbsp;&nbsp;
                    <span>休闲裤</span> &nbsp;&nbsp;
                    <span>卫衣绒衫</span> &nbsp;&nbsp;
                    <span>毛衣</span> &nbsp;&nbsp;
                    <span>毛呢外套</span> &nbsp;&nbsp;
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div style={{ width: 490 }}>
                    <h3>服务</h3>
                    <span>春夏新品</span>&nbsp;&nbsp;
                    <span>衬衫</span>&nbsp;&nbsp;
                    <span>POLO衫</span>&nbsp;&nbsp;
                    <span>休闲裤</span>&nbsp;&nbsp;
                    <span>T恤</span>&nbsp;&nbsp;
                    <span>牛仔裤</span>&nbsp;&nbsp;
                    <span>裤子</span>&nbsp;&nbsp;
                    <span>外套</span>&nbsp;&nbsp;
                    <span>西装</span>&nbsp;&nbsp;
                    <span>中老年</span>&nbsp;&nbsp;
                    <span>毛针织衫</span> &nbsp;&nbsp;
                  </div>
                </div>
                <div className={"listItem-right"}>
                  <img src={listItem1} alt="" />
                  <img src={listItem4} alt="" />
                  <img src={listItem2} alt="" />
                  <img src={listItem3} alt="" />
                  <img src={listItem6} alt="" />
                  <img src={listItem5} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className={"carousel"}>
          <Carousel autoplay effect="fade">
            <div>
              <img src={banner1} width="800" height="300" alt="" />
            </div>
            <div>
              <img src={banner2} width="800" height="300" alt="" />
            </div>
            <div>
              <img src={banner3} width="800" height="300" alt="" />
            </div>
            <div>
              <img src={banner4} width="800" height="300" alt="" />
            </div>
            <div>
              <img src={banner5} width="800" height="300" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default MenuList;
