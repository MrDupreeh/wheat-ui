import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Modal, Steps, Button, Input, Icon } from "antd";
import Logo from "../../images/logo.png";
import Footer from "../../component/Footer";
import "./index.css";

const { Step } = Steps;
class Register extends Component {
  state = {
    visible: false,
    current: 0,
    disabled: false,
    timer: 0,
    next: true,
    psw: "",
    user: "",
    shortmsgDisabled: true
  };
  handleOk = () => {
    this.setState({
      visible: false
    });
  };
  handleCancel = () => {
    window.location.href = "/";
  };

  time = wait => {
    if (wait === 0) {
      this.setState({ disabled: false });
      $(".send").text(`重新发送`);
      clearTimeout(this.state.timer);
      return;
    }
    $(".send").text(`重新发送(${wait})`);
    wait--;
    this.state.timer = setTimeout(() => this.time(wait), 1000);
  };

  send = () => {
    this.setState({
      disabled: true,
      shortmsgDisabled: false
    });
    $(".send").text("ads");
    this.time(30);
  };

  shortMessageValidate = e => {
    if (e.target.value.length === 6) {
      this.setState({ next: false });
    } else {
      this.setState({ next: true });
    }
  };

  next = () => {
    let { current } = this.state;
    current++;
    this.setState({
      current,
      next: true
    });
  };
  userNameInput = e => {
    this.setState({ user: e.target.value });
    sessionStorage.setItem("userName", e.target.value);
  };
  inputPsw = e => {
    this.setState({
      psw: e.target.value
    });
  };
  
  surePsw = e => {
    const { psw } = this.state;
    if (e.target.value === psw) {
      this.setState({ next: false });
    } else {
      this.setState({ next: true });
    }
  };
  goHome = () => {
    window.location.href = "/";
  };
  render() {
    const { visible, current, disabled, next, shortmsgDisabled } = this.state;
    return (
      <div className={"register"}>
        <div className={"wrapper"}>
          <Modal
            title="麦趣用户注册协议和隐私政策"
            visible={visible}
            cancelText="取消"
            okText="同意并继续"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>
              <b>
                在您注册成为麦趣用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制。）：
              </b>
            </p>
            <p style={{ color: "#ff0000", cursor: "pointer" }}>
              《麦趣用户注册协议》
            </p>

            <ul style={{ fontWeight: "bold", textDecoration: "underline" }}>
              <li>1、服务条款的确认及接受</li>
              <li>2、服务须知</li>
              <li>3、订单</li>
              <li>4、配送和交付</li>
              <li>5、用户个人信息保护及授权</li>
              <li>6、用户行为规范</li>
            </ul>

            <p>
              <span style={{ color: "#ff0000" }}>隐私政策</span>
              <br />
              在您注册成为麦趣用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确应履行的义务或对您的权利有所限制）：
              <br />
              本隐私政策明确了我们的产品与服务所收集、使用及共享个人信息的类型方式和用途；以增强告知或即时提示的方式在收集、使用及共享个人信息时给予用户授权选择权，并在产品设置中允许用户即时撤销授权。明确了用户查询、更正和删除其个人信息以及锁定解锁和注销用户账户的方式。我们对《麦趣隐私政策》进行了更新。本《麦趣隐私政策》的更新主要集中在麦趣用户注销流程的优化，删除您账户注销一个月的后悔期，我们将在您提出申请的小时内完成对您的账户注销审核，审核通过后，我们将对您的个人信息进行删除或匿名化处理。
            </p>
          </Modal>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <h1>欢迎注册</h1>
          </div>
          <div style={{ width: 500, margin: "30px auto 54px" }}>
            <Steps current={current}>
              <Step title="验证手机号" />
              <Step title="填写账号信息" />
              <Step title="注册成功" />
            </Steps>
            {current === 0 && (
              <div className="steps-content">
                <div>
                  <Input
                    prefix={
                      <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="请输入手机号"
                    style={{ width: 300, height: 50, marginTop: 100 }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "40px auto 0",
                    width: 300
                  }}
                >
                  <Input
                    placeholder="短信验证码"
                    style={{ width: 160, height: 50 }}
                    onChange={this.shortMessageValidate}
                    disabled={shortmsgDisabled}
                  />
                  <Button
                    type="primary"
                    style={{ height: 50 }}
                    onClick={this.send}
                    disabled={disabled}
                    className={"send"}
                  >
                    发送验证码
                  </Button>
                </div>
                <Button
                  type="primary"
                  disabled={next}
                  className={"next"}
                  onClick={this.next}
                >
                  下一步
                </Button>
              </div>
            )}
            {current === 1 && (
              <div className="steps-content">
                <div>
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="请输入用户名"
                    style={{ width: 300, height: 50, marginTop: 50 }}
                    onChange={this.userNameInput}
                  />
                </div>
                <div>
                  <Input.Password
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="请输入密码"
                    style={{ width: 300, height: 50, marginTop: 24 }}
                    onChange={this.inputPsw}
                  />
                </div>
                <div>
                  <Input.Password
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="确认密码"
                    style={{ width: 300, height: 50, marginTop: 24 }}
                    onChange={this.surePsw}
                  />
                </div>
                <Button disabled={next} className={"next"} onClick={this.next}>
                  下一步
                </Button>
              </div>
            )}
            {current === 2 && (
              <div className="steps-content">
                <h1 style={{ marginTop: 40 }}>
                  <Icon
                    type="check-circle"
                    theme="twoTone"
                    twoToneColor="#52c41a"
                  />
                  &nbsp; 注册成功
                </h1>
                <div style={{ marginTop: 30 }}>
                  {/* <Link> */}
                  <Button type="primary" style={{ marginRight: 24 }}>
                    个人中心
                  </Button>
                  {/* </Link> */}
                  <Button type="primary" onClick={this.goHome}>
                    去购物
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;
