import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import img101 from "../../images/commodity/101.jpg";
import img201 from "../../images/commodity/201.jpg";
import img202 from "../../images/commodity/202.jpg";
import img203 from "../../images/commodity/203.jpg";
import img204 from "../../images/commodity/204.jpg";
import img301 from "../../images/commodity/301.jpg";
import img401 from "../../images/commodity/401.jpg";
import img501 from "../../images/commodity/501.jpg";
import img601 from "../../images/commodity/601.jpg";
import img701 from "../../images/commodity/701.jpg";
import img801 from "../../images/commodity/801.jpg";
import img901 from "../../images/commodity/901.jpg";
import img1001 from "../../images/commodity/1001.jpg";
import img1002 from "../../images/commodity/1002.jpg";
import img1003 from "../../images/commodity/1003.jpg";
import img1_1 from "../../images/commodity/1-1.jpg";
import img2_1 from "../../images/commodity/2-1.jpg";
import img2_2 from "../../images/commodity/2-2.jpg";
import img2_3 from "../../images/commodity/2-3.jpg";
import img2_4 from "../../images/commodity/2-4.jpg";
import img3_1 from "../../images/commodity/3-1.jpg";
import img4_1 from "../../images/commodity/4-1.jpg";
import img5_1 from "../../images/commodity/5-1.jpg";
import img6_1 from "../../images/commodity/6-1.jpg";
import img7_1 from "../../images/commodity/7-1.jpg";
import img8_1 from "../../images/commodity/8-1.jpg";
import img9_1 from "../../images/commodity/9-1.jpg";
import img10_1 from "../../images/commodity/10-01.jpg";
import img10_2 from "../../images/commodity/10-02.jpg";
import img10_3 from "../../images/commodity/10-03.jpg";
const data = [
  {
    key: "1",
    title:
      "一加 OnePlus 7 Pro 2K+90Hz 流体屏 骁龙855旗舰 4800万超广角三摄 8GB+256GB 曜岩灰 全面屏拍照游戏",
    img: [img101],
    price: "4499.00",
    comment: "5.4",
    shop: "一加手机麦趣自营官方旗舰店",
    tags: [
      { name: "自营", color: "#ff0000" },
      { name: "券5000-200", color: "#008dff" },
      { name: "新品", color: "#31c19e" }
    ],
    imgList: [img1_1]
  },
  {
    key: "2",
    title: "Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G",
    img: [img201, img202, img203, img204],
    price: "5299.00",
    comment: "126",
    shop: "Apple产品麦趣自营旗舰店",
    tags: [
      { name: "自营", color: "#ff0000" },
      { name: "新品", color: "#31c19e" },
      { name: "放心购", color: "#4d88ff" }
    ],
    imgList: [img2_1, img2_2, img2_3, img2_4]
  },
  {
    key: "3",
    title:
      "华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+128GB珠光贝母全网通版双4G",
    img: [img301],
    price: "5488.00",
    comment: "17",
    shop: "华为麦趣自营官方旗舰店",
    tags: [
      { name: "自营", color: "#ff0000" },
      { name: "券5000-200", color: "#ff0000" },
      { name: "放心购", color: "#4d88ff" }
    ],
    imgList: [img3_1]
  },
  {
    key: "4",
    title: "华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版",
    img: [img401],
    price: "4288.00",
    comment: "19",
    shop: "华为麦趣自营官方旗舰店",
    tags: [
      { name: "券5000-200", color: "#ff0000" },
      { name: "新品", color: "#31c19e" }
    ],
    imgList: [img4_1]
  },
  {
    key: "5",
    title: "Apple iPhone XS Max (A2104) 256GB 深空灰色 移动联通电信4G",
    img: [img501],
    price: "8699.00",
    comment: "66",
    shop: "Apple产品麦趣自营旗舰店",
    tags: [
      { name: "自营", color: "#ff0000" },
      { name: "放心购", color: "#4d88ff" }
    ],
    imgList: [img5_1]
  },
  {
    key: "6",
    title: "Apple iPhone X (A1865) 64GB 银色 移动联通电信4G",
    img: [img601],
    price: "6049.00",
    comment: "135",
    shop: "Apple产品麦趣自营旗舰店",
    tags: [
      { name: "券5000-200", color: "#ff0000" },
      { name: "新品", color: "#31c19e" },
      { name: "放心购", color: "#4d88ff" }
    ],
    imgList: [img6_1]
  },
  {
    key: "7",
    title:
      "三星 Galaxy S10 8GB+128GB皓玉白（SM-G9730）超感官全视屏骁龙855双卡双待全网通4G游戏",
    img: [img701],
    price: "5999",
    comment: "3.7",
    shop: "三星手机麦趣自营官方旗舰店",
    tags: [
      { name: "自营", color: "#ff0000" },
      { name: "新品", color: "#31c19e" }
    ],
    imgList: [img7_1]
  },
  {
    key: "8",
    title: "Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G",
    img: [img801],
    price: "4699",
    comment: "183",
    shop: "Apple产品麦趣自营旗舰店",
    tags: [
      { name: "自营", color: "#ff0000" },
      { name: "新品", color: "#31c19e" },
      { name: "放心购", color: "#4d88ff" }
    ],
    imgList: [img8_1]
  },
  {
    key: "9",
    title:
      "荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 幻影蓝 移动联通电信4G全面屏",
    img: [img901],
    price: "2699",
    comment: "3",
    shop: "荣耀麦趣自营旗舰店",
    tags: [{ name: "自营", color: "#ff0000" }],
    imgList: [img9_1]
  },
  {
    key: "10",
    title:
      "OPPO K3 高通骁龙710 升降摄像头 VOOC闪充 8GB+128GB 秘境黑 全网通4G 全面屏拍照游戏智能",
    img: [img1001,img1002,img1003],
    price: "1899",
    comment: "4",
    shop: "OPPO麦趣自营官方旗舰店",
    tags: [{ name: "放心购", color: "#4d88ff" }],
    imgList: [img10_1,img10_2,img10_3]
  }
];
class CommodityItem extends Component {
  componentDidMount() {
    $(".simg").mouseover(function() {
      $(this)
        .parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
      let index = $(this)
        .parent()
        .index();
      let divIndex = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .index();
      $(".commodity-item")
        .eq(divIndex)
        .children(0)
        .attr("src", `${data[divIndex].img[index]}`);
    });
  }
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(item => {
          return (
            <div style={{ width: "20%", marginBottom: 24 }} key={item.key}>
              <Link to="/detail">
                <div
                  style={{
                    width: 220,
                    height: 428,
                    border: "1px solid rgba(0,0,0,0)",
                    padding: 6
                  }}
                  className={"commodity-item"}
                >
                  <img
                    src={item.img[0]}
                    alt=""
                    width="206"
                    className={"limg"}
                  />
                  <div>
                    <ul style={{ display: "flex" }}>
                      <li className={"active"}>
                        <img src={item.imgList[0]} alt="" className={"simg"} />
                      </li>
                      {item.imgList[1] && (
                        <li>
                          <img
                            src={item.imgList[1]}
                            alt=""
                            className={"simg"}
                          />
                        </li>
                      )}
                      {item.imgList[2] && (
                        <li>
                          <img
                            src={item.imgList[2]}
                            alt=""
                            className={"simg"}
                          />
                        </li>
                      )}
                      {item.imgList[3] && (
                        <li>
                          <img
                            src={item.imgList[3]}
                            alt=""
                            className={"simg"}
                          />
                        </li>
                      )}
                    </ul>
                  </div>
                  <div style={{ color: "#ff0000", fontSize: 20 }}>
                    ￥{item.price}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#666",
                      height: 60,
                      wordBreak: "break-all"
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: 12, height: 24 }}>
                    <b style={{ color: "#646fb0" }}>{item.comment}万+</b>条评价
                  </div>
                  <div style={{ color: "#999", height: 28 }}>{item.shop}</div>
                  <div style={{ display: "flex" }}>
                    {item.tags.map(tag => {
                      return (
                        <div
                          key={tag.name}
                          style={{
                            border: `1px solid ${tag.color}`,
                            color: `${tag.color}`,
                            marginRight: 6,
                            padding: "0 4px",
                            fontSize: 12
                          }}
                        >
                          {tag.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CommodityItem;
