import React, { Component } from "react";
import { Table, InputNumber, Button, Popconfirm, Icon } from "antd";
import SearchTab from "../../component/SearchTab";
import production1 from "../../images/cert/production1.jpg";
import production2 from "../../images/cert/production2.jpg";
import production3 from "../../images/cert/production3.jpg";
import production4 from "../../images/cert/production4.jpg";
import production5 from "../../images/cert/production5.jpg";
import like1 from "../../images/cert/like1.jpg";
import like2 from "../../images/cert/like2.jpg";
import like3 from "../../images/cert/like3.jpg";
import like4 from "../../images/cert/like4.jpg";
import Footer from "../../component/Footer";
import "./index.css";
const data = [
  {
    img: production1,
    name:
      "KRISBORG美式POLO衫男薄款修身 新品短袖汗衫男主题印花翻领T恤男夏季短袖T恤男 原创设计 绿色 M",
    type: ["绿色", "M"],
    price: "99.00",
    number: "1",
    id: "0"
  },
  {
    img: production2,
    name: "Apple iPhone XR (A2107) 128GB 黑色 全网通（移动4G优先版） 双卡双待",
    type: ["内存128GB"],
    price: "5199.00",
    number: "1",
    weight: "0.46",
    id: "1"
  },
  {
    img: production3,
    name:
      "华硕 ROG玩家国度 PG279Q 27英寸显示器 2K显示器 IPS显示屏 165Hz G-SYNC 电脑显示器自营 电竞显示器",
    type: ["IPS 2K 165Hz G-sync Apex"],
    price: "4799.00",
    number: "1",
    weight: "12.46",
    id: "2"
  },
  {
    img: production4,
    name:
      "明基（BenQ）XL2740 ZOWIE GEAR卓威奇亚27英寸原生240HZ刷新1ms响应 电竞屏吃鸡游戏显示器",
    type: ["27英寸/原生240HZ/Switch调校"],
    price: "4499.00",
    number: "1",
    weight: "10.6",
    id: "3"
  },
  {
    img: production5,
    name:
      "明基（BenQ） XL2540 24.5英寸显示器 原240HZ刷新1ms设计电脑显示 游戏电竞屏幕",
    price: "3199.00",
    number: "1",
    id: "4"
  }
];
class Cert extends Component {
  state = {
    selectedRowKeys: [],
    dataLists: data,
    selectedPrice: 0,
    selectedList: []
  };
  onSelectChange = (selectedRowKeys, value) => {
    console.log(value, "value");
    let selectedPrice = 0;
    for (let i = 0; i < value.length; i++) {
      selectedPrice += parseFloat(value[i].number * value[i].price);
    }
    selectedPrice = parseFloat(selectedPrice).toFixed(2);
    this.setState({ selectedRowKeys, selectedPrice, selectedList: value });
  };
  renderProduct = data => {
    return (
      <div style={{ display: "flex", width: 400 }}>
        <div style={{ border: "1px solid #eee", marginRight: 10 }}>
          <img src={data.img} alt="" />
        </div>
        <div>
          <span style={{ fontSize: 14 }}>{data.name}</span>
        </div>
      </div>
    );
  };
  renderType = data => {
    return (
      <div
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          width: 130
        }}
      >
        {data}
      </div>
    );
  };
  renderPrice = data => {
    return <div>￥{data}</div>;
  };
  renderNumber = data => {
    return (
      <InputNumber
        defaultValue={data.number}
        min={1}
        onChange={value => this.onNumberChange(data, value)}
      />
    );
  };
  onNumberChange = (data, value) => {
    const { id } = data;
    const { selectedRowKeys } = this.state;
    let { dataLists, selectedList } = this.state;
    dataLists.forEach(item => {
      if (item.id === id) {
        item.number = value;
      }
    });
    this.setState({
      dataLists
    });
    this.onSelectChange(selectedRowKeys, selectedList);
  };
  //小计
  renderSubtotal = data => {
    const subtotal = parseFloat(data.price * data.number).toFixed(2);
    return <div>￥{subtotal}</div>;
  };
  confirmDelete = id => {
    let { dataLists, selectedList, selectedRowKeys } = this.state;
    for (let i = 0; i < selectedList.length; i++) {
      if (selectedList[i].id === id) {
        selectedList.splice(i, 1);
      }
    }
    for (let j = 0; j < dataLists.length; j++) {
      if (dataLists[j].id === id) {
        dataLists.splice(j, 1);
      }
    }
    this.setState({
      dataLists,
      selectedList
    });
    this.onSelectChange(selectedRowKeys, selectedList);
  };
  render() {
    const { selectedRowKeys } = this.state;
    const columns = [
      {
        key: "1",
        title: "商品",
        width: 400,
        render: this.renderProduct
      },
      {
        key: "2",
        title: "型号",
        dataIndex: "type",
        render: this.renderType
      },
      {
        key: "3",
        dataIndex: "price",
        title: "单价",
        render: this.renderPrice
      },
      {
        key: "4",
        title: "数量",
        render: this.renderNumber
      },
      {
        key: "5",
        title: "小计",
        render: this.renderSubtotal
      },
      {
        key: "6",
        dataIndex: "id",
        title: "操作",
        render: id => {
          return (
            <Popconfirm
              overlayStyle={{ whiteSpace: "nowrap" }}
              title="确认删除该商品吗？"
              onConfirm={() => this.confirmDelete(id)}
              cancelText="取消"
              okText="确定"
            >
              <Button type="primary">删除</Button>
            </Popconfirm>
          );
        }
      }
    ];
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const { dataLists, selectedPrice } = this.state;
    return (
      <div>
        <SearchTab />
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "24px 0",
            marginBottom: 24
          }}
        >
          <div className="wrapper">
            <Table
              rowSelection={rowSelection}
              dataSource={dataLists}
              columns={columns}
              rowKey="id"
              style={{ backgroundColor: "#fff", marginBottom: 24 }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>已选择{selectedRowKeys.length}件商品</div>
              <div>
                总价：
                <span style={{ fontSize: 18, color: "#ff0000" }}>
                  ￥{selectedPrice}
                </span>
                <Button type="primary" style={{ marginLeft: 16 }}>
                  去结算
                </Button>
              </div>
            </div>
            <div className="cert-guessLike">
              <h2>
                猜你喜欢
                <Icon type="heart" theme="twoTone" twoToneColor="#ffd700" />
              </h2>
              <div>
                <img src={like1} alt="" />
                <h5>
                  外星人 Alienware Advanced版 AW568
                  机械/茶轴游戏电竞键盘(AlienFX灯效 全键无冲 5个宏按键)黑
                </h5>
                <p>￥899.00</p>
              </div>
              <div>
                <img src={like2} alt="" />
                <h5>
                  松景高效吃鸡显卡GTX1070 8G台式机电脑独立游戏显卡畅玩逆水寒
                  GTX1070 8G
                </h5>
                <p>￥2188.00</p>
              </div>
              <div>
                <img src={like3} alt="" />
                <h5>
                  骨伽（COUGAR）征服者
                  高端台式机中塔式全侧透征游戏定制分体式水冷机箱 官方标配-默认款
                </h5>
                <p>￥1999.00</p>
              </div>
              <div>
                <img src={like4} alt="" />
                <h5>
                  KRISBORG椰树主题POLO衫男修身
                  夏季新品翻领T恤男植物印花日系男士休闲短袖男美式汗衫男 黑色 M
                </h5>
                <p>￥99.00</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Cert;
