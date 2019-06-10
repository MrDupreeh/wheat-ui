import React, { Component } from "react";
import Footer from "../../component/Footer";
import "./index.css";
import { Icon, Tabs, List, Button } from "antd";
import img1 from "../../images/newsPage/1.jpg";
import img2 from "../../images/newsPage/2.png";
import img3 from "../../images/newsPage/3.jpg";
import img4 from "../../images/newsPage/4.jpg";
import img5 from "../../images/newsPage/5.jpg";
import img6 from "../../images/newsPage/6.jpg";
import img7 from "../../images/newsPage/7.jpg";
import img8 from "../../images/newsPage/8.jpg";
import imgSj1 from "../../images/newsPage/sj1.jpg";
import imgSj2 from "../../images/newsPage/sj2.png";
import imgSj3 from "../../images/newsPage/sj3.jpg";
import imgSj4 from "../../images/newsPage/sj4.jpg";
import imgSj5 from "../../images/newsPage/sj5.jpg";
import imgSj6 from "../../images/newsPage/sj6.png";
import imgSj7 from "../../images/newsPage/sj7.png";
import imgSj8 from "../../images/newsPage/sj8.jpg";
import imgRanking from "../../images/newsPage/ranking.jpg";
const TabPane = Tabs.TabPane;

const data = [
  {
    title: "双11餐厨百货预售优惠攻略 超值实用",
    img: img1,
    text:
      "双11家纺百货预售会场，高颜值的烹饪锅具/水杯，超实用的居家日用收纳用品，全场全额免定金!双11囤家居百货超划算~够用一整年！跟着小编的攻略逛起来吧",
    from: "头条统一流入帐号"
  },
  {
    title: "预售定金全免 家纺家饰多重优惠叠加直降",
    img: img2,
    text:
      "双11家纺百货预售会场，床品家饰等好货，全场定金全免！再付尾款叠加使用店铺优惠券和每满400-50跨店购物津贴，居家用品就这么划算，囤货一次，享一整年！",
    from: "侠客老李"
  },
  {
    title: "手机&配件预售会场满减大促",
    img: img3,
    text:
      "双11手机&配件预售会场 iPhone XR/XS满8000-600、满5000-300，整点领满2980减450、满1980减300多档购物券-50跨店购物津贴，居家用品就这么划算，囤货一次，享一整年！",
    from: "战士小朱"
  },
  {
    title: "微漫酱访谈第三期：超萌舞见弥音音！",
    img: img4,
    text:
      "哈喽，大家好，我是你们可爱的微漫酱，今天我们请到了一位舞见小姐姐来做客我们的访谈事，她就是弥音音！",
    from: "头条统一流入帐号"
  },
  {
    title: "双11潮流盛典男神齐聚！张艺兴霸气开唱",
    img: img5,
    text: "众男神亮相双11潮流盛典！",
    from: "编辑部的大光头"
  },
  {
    title: "李宇春压轴潮流盛典，玩转国潮白流苏！",
    img: img6,
    text: "李宇春压轴亮相双11潮流盛典！",
    from: "头条统一流入帐号"
  },
  {
    title: "淘宝闺蜜专属小黑群，双11赢回血大红包",
    img: img7,
    text:
      "10月20号到11月11号期间，在“双11购物清单”中添加宝贝，购买队友分享在群里的商品，则有机会抽中全额回血大红包，最高封顶五万，助你双11大胆放肆买买买！",
    from: "头条统一流入帐号"
  },
  {
    title: "万圣节去哪玩？良阅二次元游园会等你来！",
    img: img8,
    text:
      "哈喽，大家好，我是你们的微漫酱！万圣节快要到了，在此推荐给大家一个好玩的二次元线下活动，一起来了解一下把！",
    from: "编辑部的大光头"
  }
];
const data1 = [
  {
    title: "双11餐厨百货预售优惠攻略 超值实用111",
    img: imgSj1,
    text:
      "双11家纺百货预售会场，高颜值的烹饪锅具/水杯，超实用的居家日用收纳用品，全场全额免定金!双11囤家居百货超划算~够用一整年！跟着小编的攻略逛起来吧",
    from: "头条统一流入帐号"
  },
  {
    title: "预售定金全免 家纺家饰多重优惠叠加直降",
    img: imgSj2,
    text:
      "双11家纺百货预售会场，床品家饰等好货，全场定金全免！再付尾款叠加使用店铺优惠券和每满400-50跨店购物津贴，居家用品就这么划算，囤货一次，享一整年！",
    from: "侠客老李"
  },
  {
    title: "手机&配件预售会场满减大促",
    img: imgSj3,
    text:
      "双11手机&配件预售会场 iPhone XR/XS满8000-600、满5000-300，整点领满2980减450、满1980减300多档购物券-50跨店购物津贴，居家用品就这么划算，囤货一次，享一整年！",
    from: "战士小朱"
  },
  {
    title: "微漫酱访谈第三期：超萌舞见弥音音！",
    img: imgSj4,
    text:
      "哈喽，大家好，我是你们可爱的微漫酱，今天我们请到了一位舞见小姐姐来做客我们的访谈事，她就是弥音音！",
    from: "头条统一流入帐号"
  },
  {
    title: "双11潮流盛典男神齐聚！张艺兴霸气开唱",
    img: imgSj5,
    text: "众男神亮相双11潮流盛典！",
    from: "编辑部的大光头"
  },
  {
    title: "李宇春压轴潮流盛典，玩转国潮白流苏！",
    img: imgSj6,
    text: "李宇春压轴亮相双11潮流盛典！",
    from: "头条统一流入帐号"
  },
  {
    title: "淘宝闺蜜专属小黑群，双11赢回血大红包",
    img: imgSj7,
    text:
      "10月20号到11月11号期间，在“双11购物清单”中添加宝贝，购买队友分享在群里的商品，则有机会抽中全额回血大红包，最高封顶五万，助你双11大胆放肆买买买！",
    from: "头条统一流入帐号"
  },
  {
    title: "万圣节去哪玩？良阅二次元游园会等你来！",
    img: imgSj8,
    text:
      "哈喽，大家好，我是你们的微漫酱！万圣节快要到了，在此推荐给大家一个好玩的二次元线下活动，一起来了解一下把！",
    from: "编辑部的大光头"
  }
];
class News extends Component {
state = {
  newsList: []
};
componentDidMount() {
  this.setState({ newsList: data });
}
onLoadMore = () => {
  let { newsList } = this.state;
  for (var i = 1; i < 6; i++) {
    const j = Math.ceil(Math.random() * 8);
    newsList.push(data[j]);
  }
  this.setState({ newsList });
};
  onTabsChange = activeKey => {
    if (activeKey === "1") {
      this.setState({ newsList: data });
    }
    if (activeKey === "2") {
      this.setState({ newsList: data1 });
    }
  };
  render() {
    const { newsList } = this.state;
    const loadMore = (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }}
      >
        <Button onClick={this.onLoadMore}>加载更多</Button>
      </div>
    );
    return (
      <div>
        <div className={"newsPage"}>
          <div className={"title"}>
            <div className={"wrapper"}>
              <span style={{ fontSize: 40 }}>
                <Icon type="rise" />
                &nbsp;麦 趣 头 条
              </span>
            </div>
          </div>
          <div
            className={"wrapper"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "24px 0"
            }}
          >
            <div className={"newsPageList"}>
              <Tabs onChange={this.onTabsChange}>
                <TabPane tab="头条" key="1">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="手机" key="2">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="型男" key="3">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="数码" key="4">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="美容" key="6">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="母婴" key="7">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="旅行" key="8">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="居家" key="9">
                  <List
                    itemLayout="horizontal"
                    dataSource={newsList}
                    loadMore={loadMore}
                    renderItem={item => (
                      <List.Item>
                        <img
                          src={item.img}
                          alt=""
                          width="180px"
                          height="100px"
                        />
                        <div style={{ marginLeft: 24, width: 600 }}>
                          <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                          <p style={{ color: "#929292" }}>{item.text}</p>
                          <p style={{ fontSize: "12px" }}>来源：{item.from}</p>
                        </div>
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            </div>
            <div className={"newsRanking"}>
              <div
                style={{
                  background: "#ffd700",
                  color: "#fff",
                  fontWeight: "bold",
                  width: 282,
                  textAlign: "center",
                  fontSize: 40
                }}
              >
                今日热门
              </div>
              <img src={imgRanking} alt="" width="282px" height="200px" style={{ margin: "12px 0" }}
              />
              <div className={"newsRankingItem"}>
                <h4>1 &nbsp;MT大白洗碗机测评：用了就再也回不去了</h4>
                <p>
                  洗碗——每个家庭每天都要面临这项简单却又乏味的家务活儿，不知从什么时候开始，家里就已经约定俗成了一个规矩，吃饭吃到最后得人就要光荣的完成洗碗的任务，这也让我练就了囫囵吞枣般吃饭的惊人能力。
                </p>
                <div style={{textAlign:'right'}}><Icon type="eye" /> 6623</div>
              </div>
              <div className={"newsRankingItem"}>
                <h4>2 &nbsp;我与MT大白洗碗机的蜗居生活</h4>
                <p>
                  在奋斗中的年轻人，每天都是奔赴在令自己和家人过得更好的路上，哪还有时间洗碗。年轻人，不洗碗，请把时间浪费在美好的事物上，看看刚毕业的大学生陆海，是怎样通过MT大白洗碗机节约宝贵时间，走上人生巅峰的！
                </p>
                <div style={{textAlign:'right'}}><Icon type="eye" /> 3250</div>
              </div>
              <div className={"newsRankingItem"}>
                <h4>3 &nbsp;双11手机&配件预售会场满减大促</h4>
                <p>
                  双11手机&配件预售会场 iPhone
                  XR/XS满8000-600、满5000-300，整点领满2980减450、满1980减300多档购物券
                </p>
                <div style={{textAlign:'right'}}><Icon type="eye" /> 2340</div>
              </div>
              <div className={"newsRankingItem"}>
                <h4>4 &nbsp;【早报】小米魅族今天发新机，你怎么选？</h4>
                <p>
                  洗碗——每个家庭每天都要面临这项简单却又乏味的家务活儿，不知从什么时候开始，家里就已经约定俗成了一个规矩，吃饭吃到最后得人就要光荣的完成洗碗的任务，这也让我练就了囫囵吞枣般吃饭的惊人能力。
                </p>
                <div style={{textAlign:'right'}}><Icon type="eye" /> 1010</div>
              </div>
              <div className={"newsRankingItem"}>
                <h4>5 &nbsp;新版手机天猫上线！逛街时可以摇出红包</h4>
                <p>
                  新版手机天猫上线！逛街时可以摇出红包！赶
                </p>
                <div style={{textAlign:'right'}}><Icon type="eye" /> 888</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default News;
 