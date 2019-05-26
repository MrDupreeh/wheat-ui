import React, { Component } from "react";
import $ from "jquery";
import { Card, Tabs, Avatar, Rate } from "antd";
import middleBannerImg from "../../images/detail/introduction/middleBanner.jpg";
import left1 from "../../images/detail/introduction/left1.jpg";
import left2 from "../../images/detail/introduction/left2.jpg";
import left3 from "../../images/detail/introduction/left3.jpg";
import left4 from "../../images/detail/introduction/left4.jpg";
import left5 from "../../images/detail/introduction/left5.png";
import fornew from "../../images/detail/introduction/fornew.jpg";
import known from "../../images/detail/introduction/known.jpg";
import intro1 from "../../images/detail/introduction/1.jpg";
import intro2 from "../../images/detail/introduction/2.jpg";
import intro3 from "../../images/detail/introduction/3.jpg";
import intro4 from "../../images/detail/introduction/4.jpg";
import intro5 from "../../images/detail/introduction/5.jpg";
import intro6 from "../../images/detail/introduction/6.jpg";
import intro7 from "../../images/detail/introduction/7.jpg";
import intro8 from "../../images/detail/introduction/8.jpg";
import intro9 from "../../images/detail/introduction/9.jpg";
import intro10 from "../../images/detail/introduction/10.jpg";
import intro11 from "../../images/detail/introduction/11.jpg";
import problem from "../../images/detail/introduction/problem.jpg";
import "./introduction.css";

const TabPane = Tabs.TabPane;

class Introduction extends Component {
  renderEvaluate = rate => {
    const evaluateList = [
      [
        "A",
        "#f56a00",
        "#fde3cf",
        "天涯月明刀",
        "总体上还是不错的苹果手机跨越挺大的这款还要自己摸索着玩一下白色更清楚不错现在苹果手机掉价挺快的希望这款不要掉的太快",
        5
      ],
      [
        "S",
        "#FFFFFF",
        "#FF8247",
        "胖虎他老弟",
        "这个手机的使用感受非常好，屏幕分辨率很高，看上去很舒服。苏宁的发货速度真的是没话说，上午的订单下午就送到了",
        5
      ],
      [
        "F",
        "#B23AEE",
        "#BCEE68",
        "大地方发展新",
        "宝贝不错，特别是双卡，很方便！系统流畅！",
        3
      ],
      [
        "W",
        "#A52A2A",
        "#BBFFFF",
        "塑料袋口是",
        "买xr性价比高，本来如果买了x，肯定会后悔。大屏看着很舒服。黑白色首选，在大红和白色纠结，最后到手白色简单大气，好买手机壳喔。",
        3
      ],
      [
        "P",
        "#7CFC00",
        "#CCCCCC",
        "孙菲菲大声说",
        "非常好！特别棒，很喜欢，发货速度很快卖家服务态度，很好",
        3
      ],
      ["N", "#030303", "#CD0000", "气味儿无群", "此用户没有填写评价内容", 5],
      [
        "C",
        "#FF00FF",
        "#CDCD00",
        "都快啦啦啦啦",
        "感觉宝贝还是比较满意，但是我买到后就降价60元，这价格跌得也太快啦！另外感觉稍微厚重了点。",
        1
      ]
    ];
    const result = evaluateList.map(item => {
      if (rate === item[5]) {
        return (
          <div
            key={item[0]}
            style={{
              display: "flex",
              marginBottom: 16,
              border: "1px solid #eee",
              padding: "16px 0"
            }}
          >
            <div style={{ textAlign: "center", width: 150, paddingTop: 12 }}>
              <Avatar
                style={{
                  color: `${item[1]}`,
                  backgroundColor: `${item[2]}`
                }}
              >
                {item[0]}
              </Avatar>
              <br />
              <span>{item[3]}</span>
            </div>
            <div style={{ width: "80%", padding: "0 24px" }}>
              <Rate disabled value={item[5]} />
              <br />
              {item[4]}
            </div>
          </div>
        );
      } 
        return ''
    });
    return result;
  };
  render() {
    return (
      <div className="introducation">
        <div className="wrapper">
          <div className="middleBanner" style={{ marginBottom: 24 }}>
            <img src={middleBannerImg} alt="" />
          </div>
          <div style={{ display: "flex", marginBottom: 24 }}>
            <div className="introducation-left">
              <Card title="看看其它" style={{ width: 190 }}>
                <div className="introducation-left-item">
                  <img src={left1} alt="" />
                  <h5>
                    Apple iPhone XR 128GB 红色 移动联通电信4G全网通手机 双卡双待
                  </h5>
                  <span>￥5588.00</span>
                </div>
                <div className="introducation-left-item">
                  <img src={left2} alt="" />
                  <h5>
                    Apple iPhone XR 64GB 黑色 移动联通电信4G全网通手机 双卡双待
                  </h5>
                  <span>￥5188.00</span>
                </div>
                <div className="introducation-left-item">
                  <img src={left3} alt="" />
                  <h5>
                    【5.25日优惠50】vivo U1 3+64GB 星夜黑 6.2英寸超大水滴屏
                    大电池 骁龙八核拍照手机
                  </h5>
                  <span>￥999.00</span>
                </div>
                <div className="introducation-left-item">
                  <img src={left4} alt="" />
                  <h5>
                    Apple iPhone XR 64GB 白色 移动联通电信4G全网通手机 双卡双待
                  </h5>
                  <span>￥5188.00</span>
                </div>
                <div className="introducation-left-item">
                  <img src={left5} alt="" />
                  <h5>
                    Apple iPhone 8 Plus 64GB 金色 移动联通电信4G全网通手机
                  </h5>
                  <span>￥4388.00</span>
                </div>
              </Card>
            </div>
            <div className="introducation-right">
              <Tabs defaultActiveKey="1" tabPosition="right">
                <TabPane tab="商品详情" key="1" style={{ textAlign: "center" }}>
                  <img src={fornew} alt="" />
                  <img src={known} alt="" />
                  <img src={intro1} alt="" />
                  <img src={intro2} alt="" />
                  <img src={intro3} alt="" />
                  <img src={intro4} alt="" />
                  <img src={intro5} alt="" />
                  <img src={intro6} alt="" />
                  <img src={intro7} alt="" />
                  <img src={intro8} alt="" />
                  <img src={intro9} alt="" />
                  <img src={intro10} alt="" />
                  <img src={problem} alt="" />
                  <img src={intro11} alt="" />
                </TabPane>
                <TabPane tab="包装及参数" key="2">
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <th colSpan="3">包装清单</th>
                        </tr>
                        <tr>
                          <td>包装清单</td>
                          <td>
                            装有 iOS 的 iPhonex1、采用闪电接头的
                            EarPodsx1、闪电转 USB 连接线x1、USB
                            电源适配器x1、资料x1
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <th colSpan="3">主体</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>品牌</span>
                            </div>
                          </td>
                          <td>Apple</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>型号</span>
                            </div>
                          </td>
                          <td>iPhone XR</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>上市时间</span>
                            </div>
                          </td>
                          <td>2018.9</td>
                        </tr>
                        <tr>
                          <th colSpan="3">系统</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>手机操作系统</span>
                            </div>
                          </td>
                          <td>IOS</td>
                        </tr>
                        <tr>
                          <th colSpan="3">拍照</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>后摄像头</span>
                            </div>
                          </td>
                          <td>1200万像素</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>拍照特点</span>
                            </div>
                          </td>
                          <td>自动对焦,连拍,防抖,全景,HDR</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>闪光灯类型</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>变焦模式</span>
                            </div>
                          </td>
                          <td>数码变焦</td>
                        </tr>
                        <tr>
                          <th colSpan="3">屏幕</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>屏幕尺寸</span>
                            </div>
                          </td>
                          <td>6.1英寸</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>屏幕分辨率</span>
                            </div>
                          </td>
                          <td>1792x828</td>
                        </tr>
                        <tr>
                          <th colSpan="3">基本信息</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>颜色</span>
                            </div>
                          </td>
                          <td>白色</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>机身长度</span>
                            </div>
                          </td>
                          <td>150.9毫米</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>机身宽度</span>
                            </div>
                          </td>
                          <td>75.7毫米</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>机身厚度</span>
                            </div>
                          </td>
                          <td>8.3毫米</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>重量</span>
                            </div>
                          </td>
                          <td>194克</td>
                        </tr>
                        <tr>
                          <th colSpan="3">CPU</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>CPU品牌</span>
                            </div>
                          </td>
                          <td>以官方信息为准</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>CPU型号</span>
                            </div>
                          </td>
                          <td>A12仿生处理器</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>CPU核数</span>
                            </div>
                          </td>
                          <td>以官网信息为准</td>
                        </tr>
                        <tr>
                          <th colSpan="3">网络</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>双卡机类型</span>
                            </div>
                          </td>
                          <td>双卡双待</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>SIM卡尺寸</span>
                            </div>
                          </td>
                          <td>Nano SIM卡</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>4G网络制式</span>
                            </div>
                          </td>
                          <td>移动4G,电信4G,全网通,联通4G</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>3G网络制式</span>
                            </div>
                          </td>
                          <td>移动3G,电信3G,联通3G</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>2G网络制式</span>
                            </div>
                          </td>
                          <td>电信2G,移动2G/联通2G</td>
                        </tr>
                        <tr>
                          <th colSpan="3">存储</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>机身内存</span>
                            </div>
                          </td>
                          <td>128GB</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>运行内存</span>
                            </div>
                          </td>
                          <td>以官网信息为准</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>存储卡类型</span>
                            </div>
                          </td>
                          <td>不支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>最大存储扩展</span>
                            </div>
                          </td>
                          <td>不支持</td>
                        </tr>
                        <tr>
                          <th colSpan="3">电池</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>无线充电</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>快充功能</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>电池更换</span>
                            </div>
                          </td>
                          <td>不支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>电池类型</span>
                            </div>
                          </td>
                          <td>锂电池</td>
                        </tr>
                        <tr>
                          <th colSpan="3">接口</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>耳机接口</span>
                            </div>
                          </td>
                          <td>以官网信息为准</td>
                        </tr>
                        <tr>
                          <th colSpan="3">手机特性</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>指纹识别</span>
                            </div>
                          </td>
                          <td>不支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>GPS</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>光线传感器</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>距离传感器</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>陀螺仪</span>
                            </div>
                          </td>
                          <td>支持</td>
                        </tr>
                        <tr>
                          <th colSpan="3">其他</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>选购热点</span>
                            </div>
                          </td>
                          <td>拍照手机,游戏手机,全面屏手机,面部识别</td>
                        </tr>
                        <tr>
                          <th colSpan="3">CCC认证</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>CCC认证编号</span>
                            </div>
                          </td>
                          <td>2017011606002271</td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span>生产企业名称</span>
                            </div>
                          </td>
                          <td>鸿富锦精密电子（郑州）有限公司</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPane>
                <TabPane tab="评价" key="3">
                  <Tabs type="card" size="large">
                    <TabPane tab="好评" key="1">
                      <div>{this.renderEvaluate(5)}</div>
                    </TabPane>
                    <TabPane tab="中评" key="2">
                      <div>{this.renderEvaluate(3)}</div>
                    </TabPane>
                    <TabPane tab="差评" key="3">
                      <div>{this.renderEvaluate(1)}</div>
                    </TabPane>
                  </Tabs>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduction;
