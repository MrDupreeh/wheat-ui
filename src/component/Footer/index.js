import React, { Component } from "react";
import imgFooter1 from "../../images/footer/1.png";
import imgFooter2 from "../../images/footer/2.png";
import imgFooter3 from "../../images/footer/3.png";
import imgFooter4 from "../../images/footer/4.png";
import imgFooter5 from "../../images/footer/5.png";
import "./index.css";
class Footer extends Component {
  render() {
    return (
      <div className={"wrapper footer"}>
        <div className={"linkList"}>
          <i>关于我们</i>
          <span />
          <i>联系我们</i>
          <span />
          <i>联系客服</i>
          <span />
          <i>商家帮助</i>
          <span />
          <i>营销中心</i>
          <span />
          <i>友情链接</i>
          <span />
          <i>销售联盟</i>
          <span />
          <i>隐私政策</i>
          <span />
          <i>风险监测</i>
        </div>
        <div style={{ textAlign: "center", color: "#929292", marginTop: 12 }}>
          <p>
            京公网安备 123456789123号
            <span />
            京ICP证070359号
            <span />
            互联网药品信息服务资格证编号(京)-经营性-2014-0008
          </p>
          <p>
            违法和不良信息举报电话：4006561155 Copyright © 2004 - 2019 麦趣.com
            版权所有
            <span />
            消费者维权热线：123456789经营证照
            <span />
            (京)网械平台备字(2018)第123456号
          </p>
          <p>
            新出发京零 字第大123456号 互联网出版许可证编号新出网证(京)字150号
            <span />
            出版物经营许可证
            <span />
            网络文化经营许可证京网文[2014]2148-348号
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
        >
          <ul>
            <li>
              <img src={imgFooter1} alt="" />
              可信网站信用评价
            </li>
            <li>
              <img src={imgFooter2} alt="" />
              网络警察提醒您
            </li>
            <li>
              <img src={imgFooter3} alt="" />
              诚信网站
            </li>
            <li>
              <img src={imgFooter4} alt="" />
              中国互联网举报中心
            </li>
            <li>
              <img src={imgFooter5} alt="" />
              网络举报APP下载
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Footer;
