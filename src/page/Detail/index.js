import React, { Component } from "react";
import $ from "jquery";
import { Icon, Statistic, Divider, InputNumber, Button, Modal } from "antd";
import SearchTab from "../../component/SearchTab";
import video from "../../images/detail/video.mp4";
import large1 from "../../images/detail/large1.jpg";
import large2 from "../../images/detail/large2.jpg";
import large3 from "../../images/detail/large3.jpg";
import large4 from "../../images/detail/large4.jpg";
import small1 from "../../images/detail/small1.jpg";
import small2 from "../../images/detail/small2.jpg";
import small3 from "../../images/detail/small3.jpg";
import small4 from "../../images/detail/small4.jpg";
import zengpin from "../../images/detail/zengpin.jpg";
import colorWhite from "../../images/detail/colorWhite.jpg";
import colorRed from "../../images/detail/colorRed.png";
import colorYellow from "../../images/detail/colorYellow.jpg";
import Footer from "../../component/Footer";
import "./index.css";
import Introduction from "./Introduction";
const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 16 + 1000 * 60 * 20;
class Detail extends Component {
  state = {
    address: "北京市",
    priceNumber: 1,
    visible: false
  };
  componentDidMount() {
    // 获取地理位置
    const address = JSON.parse(sessionStorage.getItem("address"));
    this.setState({
      address
    });
    // 选择图片控制器
$(".detail-content-left-control").find("li")
  .click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    let lsrc = $(this).find("img").attr("lsrc");
    $(".detail-content-left-largeView-img img").attr("src", lsrc);
    $(".detail-content-left-largeView-img-magnifierBox img").attr("src",lsrc);
  });
    // 放大镜
$(".detail-content-left-largeView-img").mouseenter(function() {
  $(".magnifier").show();
  $(".detail-content-left-largeView-img-magnifierBox").show();
  $(this).mousemove(function(e) {
    let x =
      e.pageX -
      $(".detail-content-left-largeView-img").offset().left -
      $(".magnifier").width() / 2;
    let y =
      e.pageY -
      $(".detail-content-left-largeView-img").offset().top -
      $(".magnifier").height() / 2;
    if (x < 0) {
      x = 0;
    } else if (x > $(this).width() - $(".magnifier").width()) {
      x = $(this).width() - $(".magnifier").width();
    }
    if (y < 0) {
      y = 0;
    } else if (y > $(this).height() - $(".magnifier").height()) {
      y = $(this).height() - $(".magnifier").height();
    }
    $(".magnifier").css({ left: x, top: y });
    $(".detail-content-left-largeView-img-magnifierBox img").css({
      left: -2 * x,
      top: -2 * y
    });
  });
});
$(".detail-content-left-largeView-img").mouseleave(function() {
  $(".magnifier").hide();
  $(".detail-content-left-largeView-img-magnifierBox").hide();
});
    // 购买详情选择
    $(".select-item").click(function() {
      //可以不选择白条
      if ($(this).hasClass("active") && $(this).hasClass("whiteTip")) {
        $(this).removeClass("active");
        return;
      }
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }

  playVideo = () => {
    $(".detail-content-left-largeView-video").show();
    $(".detail-content-left-largeView-img").hide();
  };
  closeVideo = () => {
    $(".detail-content-left-largeView-video").hide();
    $(".detail-content-left-largeView-img").show();
  };
  onInputNumberChange = value => {
    this.setState({
      priceNumber: value
    });
  };
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  closeModal = () => {
    this.setState({
      visible: false
    });
  };
  addToCart = () => {
    const { priceNumber } = this.state;
    let str = $(".select-item.active").text();
    let color = str.slice(0, 2);
    let size = str.slice(2, 7);
    const msg = {
      priceNumber,
      color: color,
      size: size
    };
    sessionStorage.setItem("msg", JSON.stringify(msg));
    window.location.href = "/cert";
  };
  render() {
    const { address } = this.state;
    return (
      <div className="detail">
        <SearchTab />
        <div className="detail-header">
          <div className="wrapper" />
        </div>
        <div className="detail-header-nav">
          <div className="wrapper">
            <ul>
              <li>首页</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Beats</li>
              <li>配件</li>
              <li>Music</li>
              <li>客户服务</li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="detail-content">
<div className="detail-content-left">
  <div className="detail-content-left-largeView">
    <div className="detail-content-left-largeView-video">
      <video src={video} controls="controls" height="448px" width="448px" autoPlay="autoplay"/>
      <div className={'detail-content-left-largeView-video-close'}>
        <Icon type="close" onClick={this.closeVideo} />
      </div>
    </div>
    <div className="detail-content-left-largeView-img">
      <div className="magnifier" />
      <Icon
        type="play-circle"
        theme="twoTone"
        style={{ position: "absolute", bottom: 20, left: 20, fontSize: 30 }}
        onClick={this.playVideo}
      />
      <img src={large1} alt="" width={448} height={448} />
    </div>
    <div className="detail-content-left-largeView-img-magnifierBox">
      <img src={large1} alt="" width={896} height={896} />
    </div>
  </div>
  <ul className="detail-content-left-control">
    <li className="active">
      <img src={small1} lsrc={large1} alt="" />
    </li>
    <li>
      <img src={small2} lsrc={large2} alt="" />
    </li>
    <li>
      <img src={small3} lsrc={large3} alt="" />
    </li>
    <li>
      <img src={small4} lsrc={large4} alt="" />
    </li>
  </ul>
</div>
            <div className="detail-content-right">
              <h3 style={{ fontWeight: "bold" }}>
                <span
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#ff0000",
                    padding: "0 4px"
                  }}
                >
                  热销
                </span>
                &nbsp;Apple iPhone XR 128GB 白色 移动联通电信4G全网通手机
                双卡双待
              </h3>
              <span style={{ color: "#f60" }}>
                【限量下单立290，到手价5298】A12仿生处理器-6.1英寸-128G内存-全面屏-面容识别-双卡双待
              </span>
              <div className="detail-content-right-priceBox">
                <div className="detail-content-right-priceBox-title">
                  <span>麦趣购</span>
                  <Icon
                    type="clock-circle"
                    style={{ fontSize: 18, marginLeft: 24 }}
                  />
                  <span style={{ fontSize: 18 }}>距抢购结束</span>
                  <Countdown
                    value={deadline}
                    format="HH:mm:ss:SS"
                    style={{
                      display: "inline-block",
                      color: "#fff",
                      marginLeft: 16
                    }}
                  />
                </div>
                <div className="detail-content-right-priceBox-content">
                  <dl>
                    <dt>参考价</dt>
                    <dd style={{ textDecoration: "line-through" }}>
                      ￥5699.00
                    </dd>
                  </dl>
                  <dl>
                    <dt style={{ marginTop: 8 }}>活动价</dt>
                    <dd style={{ color: "#ff0000", fontWeight: "bold" }}>
                      ￥<span style={{ fontSize: 24 }}>5588.00</span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>优&nbsp;惠</dt>
                    <dd>
                      <div style={{ marginBottom: 12 }}>
                        <Icon type="check" style={{ color: "#1890ff" }} />
                        参与以下活动，预计到手价
                        <span style={{ color: "#ff0000" }}>5298.00元</span>
                      </div>
                      <div>
                        <div className="detail-content-right-priceBox-content-tag">
                          满 减
                        </div>
                        &nbsp;&nbsp;满5580元减290元
                      </div>
                      <div>
                        <div className="detail-content-right-priceBox-content-tag">
                          赠 品
                        </div>
                        &nbsp;&nbsp;
                        <img src={zengpin} alt="" /> * 1
                        &nbsp;&nbsp;&nbsp;&nbsp;赠完即止
                      </div>
                      <div>
                        <div
                          className="detail-content-right-priceBox-content-tag"
                          style={{ width: 80, marginRight: 20 }}
                        >
                          实名有礼
                        </div>
                        <div className="detail-content-right-priceBox-content-tag">
                          会 员
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div className="detail-content-right-supportMsg">
                  <dl>
                    <dt>支&nbsp;持</dt>
                    <dd style={{ color: "#1890ff" }}>
                      <Icon type="retweet" />
                      以旧换新{" "}
                      <span style={{ marginLeft: 12 }}>
                        <Icon type="swap" />
                        7天无理由退货
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>送&nbsp;至</dt>
                    <dd>
                      {address} <b>有货</b>
                      <br />
                      21:00前下单，预计明天送达
                    </dd>
                  </dl>
                  <dl>
                    <dt>重&nbsp;量</dt>
                    <dd>0.463kg</dd>
                  </dl>
                </div>
                <Divider dashed />
                <div className="detail-content-right-select">
                  <dl>
                    <dt>颜&nbsp;色</dt>
                    <dd className="detail-content-right-select-color">
                      <div className="detail-content-right-select-colorItem active select-item">
                        <img src={colorWhite} alt="" />
                        白色
                      </div>
                      <div className="detail-content-right-select-colorItem select-item">
                        <img src={colorRed} alt="" />
                        红色
                      </div>
                      <div className="detail-content-right-select-colorItem select-item">
                        <img src={colorYellow} alt="" />
                        黄色
                      </div>
                    </dd>
                  </dl>
                  <dl>
                    <dt>版&nbsp;本</dt>
                    <dd>
                      <div className="active select-item edition">64GB</div>
                      <div className="select-item edition">128GB</div>
                      <div className="select-item edition">256GB</div>
                    </dd>
                  </dl>
                  <dl>
                    <dt>打白条</dt>
                    <dd>
                      <div className="select-item edition whiteTip">
                        ￥1918.55 x 3期
                      </div>
                      <div className="select-item edition whiteTip">
                        ￥987.21 x 6期
                      </div>
                      <div className="select-item edition whiteTip">
                        ￥521.55 x 12期
                      </div>
                      <div className="select-item edition whiteTip">
                        ￥288.71 x 24期
                      </div>
                    </dd>
                  </dl>
                  <dl>
                    <dt>数&nbsp;量</dt>
                    <dd style={{ alignItems: "center" }}>
                      <InputNumber
                        min={1}
                        defaultValue={1}
                        onChange={this.onInputNumberChange}
                        style={{ marginRight: 16 }}
                      />
                      总价：{this.state.priceNumber * 5588}.00元
                    </dd>
                  </dl>
                  <dl>
                    <dt />
                    <dd style={{ alignItems: "center" }}>
                      <Button type="primary" style={{ marginRight: 24 }}>
                        立即购买
                      </Button>
                      <Button type="primary" onClick={this.openModal}>
                        <Icon type="shopping-cart" />
                        加入购物车
                      </Button>
                      <Modal
                        title="温馨提示"
                        visible={this.state.visible}
                        onOk={this.addToCart}
                        onCancel={this.closeModal}
                        okText="去购物车~"
                        cancelText="知道了"
                      >
                        <div style={{ fontSize: 24 }}>
                          <Icon
                            type="check-circle"
                            theme="twoTone"
                            twoToneColor="#52c41a"
                          />
                          &nbsp;成功加入购物车
                        </div>
                      </Modal>
                    </dd>
                  </dl>
                </div>
                <Divider dashed />
              </div>
            </div>
          </div>
        </div>
        {/* 商品介绍 */}
        <Introduction />
        <Footer />
      </div>
    );
  }
}
export default Detail;
