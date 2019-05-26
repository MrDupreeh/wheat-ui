import React, { Component } from "react";
import Logo from "../../images/logo.png";
import { Icon, Input, Button, Checkbox, message, Spin } from "antd";
import Footer from "../../component/Footer";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    nameError: false,
    nameErrorMsg: "",
    pswErrorMsg: "",
    pswError: false,
    loading: false,
    timer: null
  };
  submit = e => {
    e.preventDefault();
    this.setState({ nameError: false, pswError: false });
    this.validateLogin();
  };
  validateLogin = () => {
    const { username, password } = this.state;

    if (username === "admin" && password === "123456") {
      this.setState({
        loading: true,
        timer: setTimeout(function() {
          sessionStorage.setItem("userName", "大鹏爱吃鱼");
          message.success("登陆成功");
          window.location.href = "http://localhost:3000/";
        }, 2000)
      });

    } else if (username !== "admin" || password !== "123456") {
      message.error("用户名或密码错误");
    }
    if (username === "") {
      this.setState({ nameError: true, nameErrorMsg: "请输入账号" });
    }
    if (password === "") {
      this.setState({ pswError: true, pswErrorMsg: "请输入密码" });
    }
  };
  usernameChange = e => {
    this.setState({ username: e.target.value });
  };
  passwordChange = e => {
    this.setState({ password: e.target.value });
  };
  stopA= e=>{
    e.preventDefault()
  }
  render() {
    const {
      username,
      password,
      nameError,
      pswError,
      loading,
      nameErrorMsg,
      pswErrorMsg
    } = this.state;
    return (
      <div className={"login"}>
        <div className={"wrapper"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="" />
            <h1>欢迎登录</h1>
          </div>
        </div>
        <div className={"login-tips"}>
          <div className={"wrapper"}>
            <Icon type="info-circle" />
            &nbsp;
            依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
            新版《麦趣隐私政策》已上线，将更有利于保护您的个人隐私。
          </div>
        </div>
        <Spin spinning={loading}>
          <div className={"login-main"}>
            <div className={"wrapper"}>
              <div className={"loginBox"}>
                <h3 style={{ fontSize: 20 }}>账户登录</h3>
                <form>
                  <Input
                    placeholder="用户名/邮箱/手机号"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    suffix={
                      nameError && (
                        <Icon
                          type="close-circle"
                          theme="twoTone"
                          twoToneColor="#ff0000"
                        />
                      )
                    }
                    value={username}
                    onChange={this.usernameChange}
                  />
                  {
                    <p
                      style={{
                        visibility: nameError ? "visible" : "hidden",
                        color: "#ff0000"
                      }}
                    >
                      {nameErrorMsg}
                    </p>
                  }
                  <Input
                    placeholder="密码"
                    type="password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    suffix={
                      pswError && (
                        <Icon
                          type="close-circle"
                          theme="twoTone"
                          twoToneColor="#ff0000"
                        />
                      )
                    }
                    value={password}
                    onChange={this.passwordChange}
                  />
                  {
                    <p
                      style={{
                        visibility: pswError ? "visible" : "hidden",
                        color: "#ff0000"
                      }}
                    >
                      {pswErrorMsg}
                    </p>
                  }
                  <Checkbox>记住我</Checkbox>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.submit}
                    className={"loginBox-btn"}
                  >
                    登录
                  </Button>
                </form>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginTop: 44
                  }}
                >
                  <a href='/' onClick={this.stopA}>忘记密码</a>
                  <a href='/' style={{ marginRight: 12 }} onClick={this.stopA}>立即注册</a>
                </div>
              </div>
            </div>
          </div>
        </Spin>
        <Footer />
      </div>
    );
  }
}
export default Login;
