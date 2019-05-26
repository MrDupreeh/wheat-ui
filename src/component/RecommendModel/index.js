import React, { Component } from "react";
import RecommendModelImg1 from "../../images/recommentModel/1.webp";
import RecommendModelImg2 from "../../images/recommentModel/2.webp";
import RecommendModelImg3 from "../../images/recommentModel/3.webp";
import RecommendModelImg4 from "../../images/recommentModel/4.webp";
import RecommendModelImg5 from "../../images/recommentModel/5.webp";
import RecommendModelImg6 from "../../images/recommentModel/6.webp";
import RecommendModelImg7 from "../../images/recommentModel/7.webp";
import RecommendModelImg8 from "../../images/recommentModel/8.webp";
import RecommendModelImg9 from "../../images/recommentModel/9.webp";
import RecommendModelImg10 from "../../images/recommentModel/10.webp";
import RecommendModelImg11 from "../../images/recommentModel/11.webp";
import RecommendModelImg12 from "../../images/recommentModel/12.webp";
import RecommendModelImg13 from "../../images/recommentModel/13.webp";
import RecommendModelImg14 from "../../images/recommentModel/14.webp";
import RecommendModelImg15 from "../../images/recommentModel/15.webp";
import RecommendModelImg16 from "../../images/recommentModel/16.webp";
import RecommendModelImg17 from "../../images/recommentModel/17.webp";
import RecommendModelImg18 from "../../images/recommentModel/18.webp";
import RecommendModelImg19 from "../../images/recommentModel/19.webp";
import RecommendModelImg20 from "../../images/recommentModel/20.webp";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "./index.css";
const titleExp = {
  每日优惠: ["只为给你省薪", "#FF4500"],
  每日好店: ["是想逛的那一家", "#008000"],
  猜你喜欢: ["心仪已久的宝贝", "#00BFFF"],
  热卖单品: ["大家都在买", "#FF00FF"]
};
const imgLists = {
  1: [RecommendModelImg1, "max破产都要买的口红", "《破产姐妹》max最爱"],
  2: [
    RecommendModelImg2,
    "限量军绿色PUMA",
    "限量的军绿色，帅气且硬汉风格十足。"
  ],
  3: [
    RecommendModelImg3,
    "Nike Air Mag回到未来",
    "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。"
  ],
  4: [RecommendModelImg4, "Gogan 冰种玉镯", "极品冰种质地，视觉效果通透莹润。"],
  5: [
    RecommendModelImg5,
    "走红的解压神器-切割史莱姆",
    "将刀用火加热到上百摄氏度，一刀切到水宝宝上，清脆的声音会让你的疲劳一下子消失。小孩子慎玩。"
  ],
  6: [
    RecommendModelImg6,
    "天王表 天猫联名款石英男表",
    "金色猫眼时间刻度搭配纤长双针简约复古。"
  ],
  7: [
    RecommendModelImg7,
    "SK-II神仙水套装",
    "神仙水绝对是SK-II的镇牌之宝，源自日本琵琶湖水的发酵酿造"
  ],
  8: [
    RecommendModelImg8,
    "碎脂机，超快瘦身",
    "这个精美的碎脂机，不仅采用独特的外形的设计，结合上小巧的尺寸，让其方便你外出时随身携带哦。功能非常的强劲，短时间内就可以感受到脂肪在燃烧哦。"
  ],
  9: [
    RecommendModelImg9,
    "5克拉钻石戒指女豪华皇冠群镶副钻",
    "宝贝很漂亮的超级闪，质量很好，做工非常精细，包装特别精致，超级豪华，圈口大小合适，戴着很合适，非常精美，时尚百搭，很满意。"
  ],
  10: [
    RecommendModelImg10,
    "小宝贝的彩虹浴盆",
    "具有流动性的水晶泥真是特别的好玩，用它可以做出好多具有动感的，漂亮的小玩具，在爸爸妈妈的陪同下，孩子们的动手能力会更好地提高。"
  ],
  11: [
    RecommendModelImg11,
    "日本免胶地毯",
    "四大系列色彩丰富，给人充分选择空间。"
  ],
  12: [
    RecommendModelImg12,
    "OTOTO两用二合一起泡酒塞",
    "美丽可爱的造型，看上去生动有趣"
  ],
  13: [
    RecommendModelImg13,
    "DRETEC便携式肛门电动洁身器",
    "拥有两档水压，能根据喜好选择"
  ],
  14: [
    RecommendModelImg14,
    "北岸多功能上下床",
    "充分的利用了房子的上下层空间，可同时满足休息与学习的双需求。"
  ],
  15: [
    RecommendModelImg15,
    "SUSISU 幻境流沙眼影盘",
    "幻境流沙，超级美腻外包装。"
  ],
  16: [
    RecommendModelImg16,
    "Fitcooker 双胆智能电饭煲",
    "采用一锅双胆设计，可同时烧菜和煲汤，让你尽享健康的智能生活。"
  ],
  17: [
    RecommendModelImg17,
    "小清新ins风 木纹透明四方形水杯",
    "方形造型设计，美观时尚。"
  ],
  18: [RecommendModelImg18, "Nike AF 1 裸粉", "以裸粉色呈现，带来满满少女风。"],
  19: [
    RecommendModelImg19,
    "小V脸口罩轻薄更防霾",
    "五层结构防霾，有效过滤细微颗粒物"
  ],
  20: [
    RecommendModelImg20,
    "窗台整理架，利用家中每一寸空间",
    "简单易操作的设计，就算是女孩子一个人也完全没有问题。多种尺寸的选择，能满足不同空间与人群的使用需求。可伸缩的同时，移动起来也非常的方便，反复利用更环保。贴心人性化的围栏设计搭配优质耐用的选材，承重力杠杠滴且物品不易滑落，美观又实用。"
  ]
};
class RecommendModel extends Component {
  state = {
    imgList: [],
    loading: false,
    timer: null
  };

  componentDidMount() {
    this.randomNumber();
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }
  changeItem = () => {
    this.setState({
      loading: true,
      timer: setTimeout(() => {
        this.randomNumber();
        this.setState({
          loading: false
        });
      }, 1000)
    });
  };
  randomNumber = () => {
    let imgList = [];
    for (var i = 0; i < 6; i++) {
      imgList[i] = imgLists[Math.ceil(Math.random() * 20)];
    }

    let set = new Set(imgList);
    imgList = Array.from(set);

    if (imgList.length !== 6) {
      this.randomNumber();
    } else {
      this.setState({ imgList });
    }
  };
  render() {
    const { imgList } = this.state;
    const { title } = this.props;
    return (
      <div className={"model"}>
        <div>
          {titleExp[title] && (
            <div>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: titleExp[title][1]
                }}
              >
                {title}
              </span>
              &nbsp;
              <span style={{ color: "#929292" }}>{titleExp[title][0]}</span>
              <span
                style={{ float: "right", cursor: "pointer", color: "#1890ff" }}
                onClick={this.changeItem}
              >
                换一批
              </span>
            </div>
          )}
        </div>
        <Spin spinning={this.state.loading}>
          {imgList[0] && (
            <ul className={"itemBox"}>
              <li>
                <Link to="/detail">
                  <img src={imgList[0][0]} alt="" />
                  <h3>{imgList[0][1]}</h3>
                  <p>{imgList[0][2]}</p>
                </Link>
              </li>
              <li>
                <Link to="/detail">
                  <img src={imgList[1][0]} alt="" />
                  <h3>{imgList[1][1]}</h3>
                  <p>{imgList[1][2]}</p>
                </Link>
              </li>
              <li>
                <Link to="/detail">
                  <img src={imgList[2][0]} alt="" />
                  <h3>{imgList[2][1]}</h3>
                  <p>{imgList[2][2]}</p>
                </Link>
              </li>
              <li>
                <Link to="/detail">
                  <img src={imgList[3][0]} alt="" />
                  <h3>{imgList[3][1]}</h3>
                  <p>{imgList[3][2]}</p>
                </Link>
              </li>
              <li>
                <Link to="/detail">
                  <img src={imgList[4][0]} alt="" />
                  <h3>{imgList[4][1]}</h3>
                  <p>{imgList[4][2]}</p>
                </Link>
              </li>
              <li>
                <Link to="/detail">
                  <img src={imgList[5][0]} alt="" />
                  <h3>{imgList[5][1]}</h3>
                  <p>{imgList[5][2]}</p>
                </Link>
              </li>
            </ul>
          )}
        </Spin>
      </div>
    );
  }
}
export default RecommendModel;
