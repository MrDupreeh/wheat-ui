import React, { Component } from "react";
import { Avatar, Button, Card, Tabs, Icon, Divider } from "antd";
import $ from "jquery";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import SearchTab from "../../component/SearchTab";
import MenuList from "../../component/MenuList";
import RecommendModel from "../../component/RecommendModel";
import Footer from "../../component/Footer";
import newsImg1 from "../../images/news/1.jpg";
import newsImg2 from "../../images/news/2.jpg";
import newsImg3 from "../../images/news/3.jpg";
import newsImg4 from "../../images/news/4.jpg";
//banner右侧选项卡的css
const gridStyle = {
  width: "25%",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "14px"
};
const { TabPane } = Tabs;
let index = 0;
class Home extends Component {
  state = {
    timer: null,
    user: ""
  };
  componentDidMount() {
    const loginMsg = sessionStorage.getItem("userName");
    this.setState({
      timer: setInterval(this.autoPlayNews, 3000),
      user: loginMsg
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  autoPlayNews = () => {
    index++;
    if (index > 3) {
      index = 0;
    }
    $(".newsList").css("transform", `translateY(${index * -100}px)`);
  };
  stopA = e => {
    e.preventDefault();
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <SearchTab />
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <div className={"wrapper"}>
            {/* banner部分 */}
            <div className={"banner"}>
              <MenuList />
              <div
                style={{
                  textAlign: "center",
                  width: 244,
                  padding: "24px 12px",
                  margin: "24px 0 24px 12px",
                  backgroundColor: "#fff"
                }}
              >
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size="large"
                />
                <br />
                {user ? (
                  <div style={{ paddingTop: 12 }}>{user}</div>
                ) : (
                  <div>
                    你好，快来登录吧~
                    <br />
                    <Link to="/login">
                      <Button type="primary">登录</Button>
                    </Link>
                    <Button
                      type="primary"
                      style={{ marginLeft: "20px", marginTop: 12 }}
                    >
                      注册
                    </Button>
                  </div>
                )}

                <div className={"tab-container"} style={{ textAlign: "left" }}>
                  <Tabs defaultActiveKey="1" size="small">
                    <TabPane tab="新闻" key="1">
                      <a href="/" onClick={this.stopA}>
                        影响世界的“中国时间”
                      </a>
                      <br />
                      <a href="/" onClick={this.stopA}>
                        美国无明确理由否决牌照申请
                      </a>
                      <br />
                      <a href="/" onClick={this.stopA}>
                        博物馆文创跨界爆发年
                      </a>
                    </TabPane>
                    <TabPane tab="公益" key="2">
                      <a href="/" onClick={this.stopA}>
                        公益机构开店全攻略
                      </a>
                      <br />
                      <a href="/" onClick={this.stopA}>
                        要是小悦悦还在， 小学快毕业了
                      </a>
                      <br />
                      <a href="/" onClick={this.stopA}>
                        公益机构开店全攻略
                      </a>
                    </TabPane>
                    <TabPane tab="规则" key="3">
                      <a href="/" onClick={this.stopA}>
                        新增《麦趣网抽检标准》
                      </a>
                      <br />
                      <a href="/" onClick={this.stopA}>
                        《麦趣禁售商品管理规则》
                      </a>
                      <br />
                      <a href="/" onClick={this.stopA}>
                        《麦趣营销管理规则》
                      </a>
                      <br />
                    </TabPane>
                  </Tabs>
                </div>
                <div style={{ marginTop: 12 }}>
                  <Card>
                    <Card.Grid style={gridStyle}>
                      <Icon type="mobile" theme="twoTone" />
                      <br />
                      充话费
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon type="wifi" />
                      <br />
                      充流量
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon
                        type="smile"
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                      />
                      <br />
                      服务
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon
                        type="fund"
                        theme="twoTone"
                        twoToneColor="#ff0000"
                      />
                      <br />
                      彩票
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon type="medicine-box" theme="twoTone" />
                      <br />
                      医疗
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon
                        type="environment"
                        theme="twoTone"
                        twoToneColor="#32CD32"
                      />
                      <br />
                      旅行
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon type="car" theme="twoTone" twoToneColor="#FFD700" />
                      <br />
                      车票
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                      <Icon
                        type="fire"
                        theme="twoTone"
                        twoToneColor="#00BFFF"
                      />
                      <br />
                      水电费
                    </Card.Grid>
                  </Card>
                </div>
              </div>
            </div>
            {/* 头条部分 */}
            <Link to="/news">
              <div className={"news"}>
                <span style={{ fontSize: 32 }}>
                  <Icon type="rise" />
                  &nbsp;麦趣头条
                </span>
                <div className={"newsContent"}>
                  <ul className={"newsList"}>
                    <li>
                      <img src={newsImg1} alt="" />
                      <div className={"newsText"}>
                        <h2>图书乐器预售会场 好书不容错过</h2>
                        <p>
                          活动时间从10月20日-11月10日，活动期间图书乐器会场可领取天猫双11购物津贴，每满400减50，还有店铺定金翻倍、领券再减优惠，更有电子书满30-15/20-10品类优惠券可领，中华商务图书、中信图书、吉林出版集团以及一些乐器店铺活动
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={newsImg2} alt="" />
                      <div className={"newsText"}>
                        <h2>万台汽车"一口价"特卖</h2>
                        <p>
                          以沃尔沃V60Polestar为例，价格直降19万，一口价39.99万。路虎极光新尚版特卖一口价26.59万。在双11当天支付尾款，去到就近的销售网点，即可成功购车。
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={newsImg3} alt="" />
                      <div className={"newsText"}>
                        <h2>【早报】小米魅族今天发新机，你怎么选？</h2>
                        <p>
                          在距离发布会召开的前两天，小米才正式宣布MIX3新品发布会场地设置在了故宫，将于10月25日，也就是今天下午两点正式发布大家期待已久的小米MIX3。小米也成了第一家在故宫开新品发布会的国产手机厂商。
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={newsImg4} alt="" />
                      <div className={"newsText"}>
                        <h2>司马小忽悠のlolita—万圣节茶会</h2>
                        <p>
                          万圣节快到啦～怎么能不办一个lolita的聚会呢。于是上周日和朋友一起在北京丽思卡尔顿酒店组了一个小party～和各位可爱的姑娘们一起度过了一个超级愉快的下午。
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            {/* 推荐板 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap"
              }}
            >
              <RecommendModel title="每日优惠" />
              <RecommendModel title="每日好店" />
              <RecommendModel title="猜你喜欢" />
              <RecommendModel title="热卖单品" />
            </div>
            <Divider style={{ paddingBottom: "12px" }}>
              <span style={{ color: "#929292" }}>End</span>
            </Divider>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
