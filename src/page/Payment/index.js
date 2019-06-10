import React, { Component } from "react";
import Logo from "../../images/logo.png";
import img1 from "../../images/payment/1.png";
import CCB from "../../images/payment/CCB.png";
import ICBC from "../../images/payment/ICBC.png";
import CMB from "../../images/payment/CMB.png";
import code2 from "../../images/payment/WX.png";
import code1 from "../../images/payment/ZFB.png";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import { Icon,Input,Button } from 'antd'
import $ from "jquery";
import "./index.css";
class Payment extends Component {
    componentDidMount(){
        $('.bank').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $(this).children('.duigou').addClass('active')
            $(this).siblings().children('.duigou').removeClass('active')
        })
        $('.showcode').click(function(){
            let index = $(this).index()
            $('.codeimg').eq(index).show().siblings().hide()
        })
    }
    okpay=()=>{
        $('.waitRemove').remove()
        $('.ok').show()
    }
  render() {
    return (
      <div className={"payment"}>
            <div className="wrapper">
            <div
                style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
            >
                <Link to="/">
                <img src={Logo} alt="" />
                </Link>
                <h1>收银台</h1>
            </div>
                  <div className={'waitRemove'}>
            <div style={{width:1000,backgroundColor:'#fff',height:400,margin:'0 auto',padding:24}}>
                <div><img src={img1} alt=""/></div>
                <div style={{padding:'24px 0'}}>
                    <div className={'bank active'}>
                    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" className="duigou active" />
                        <img src={ICBC} alt="" width='26'/>
                        &nbsp;&nbsp;<b>工商银行</b>
                        <div style={{ marginLeft:24 }}>储蓄卡（9081）</div>
                    </div>
                    <div className={'bank'}>
                    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" className="duigou" />
                        <img src={CMB} alt="" width='26'/>
                        &nbsp;&nbsp;<b>招商银行</b>
                        <div style={{ marginLeft:24 }}>储蓄卡（9081）</div>
                    </div>
                    <div className={'bank'}>
                    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" className="duigou" />
                        <img src={CCB} alt="" width='26'/>
                        &nbsp;&nbsp;<b>建设银行</b>
                        <div style={{ marginLeft:24 }}>储蓄卡（9081）</div>
                    </div>
                    <div>
                        <Input.Password style={{width:200}} placeholder='请输入支付密码'/>
                        <div><Button type='primary' style={{fontSize:24,height:40,marginTop:14}} onClick={this.okpay}>立即支付</Button></div>
                    </div>
                </div>
            </div>
            <div  style={{width:1000,backgroundColor:'#fff',margin:'0 auto 20px',padding:24,marginTop:24,fontSize:24}}>
                <div style={{display:'flex',cursor:'pointer'}}>
                    <div className={'showcode'}><Icon type="alipay" style={{color:'#1890ff'}}/>&nbsp;&nbsp;支付宝支付</div>
                    <div className={'showcode'}style={{marginLeft:24}}><Icon type="wechat" style={{color:'#00FF00'}}/>&nbsp;&nbsp;微信支付</div>
                </div>
                <div className={'code'}>
                    <img src={code1} alt="" width="300" className={'codeimg'}/>
                    <img src={code2} alt="" width="300" className={'codeimg'}/>
                </div>
            </div>
            </div>
          </div>
          <div style={{width:1000,backgroundColor:'#fff',height:484,margin:'0 auto 36px',padding:24,display:'none'}} className={'ok'}>
                <div style={{textAlign:'center',fontSize:28,marginTop:140}}><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />&nbsp;支付成功~</div>
                <Link to='/'>
                    <Button type='primary' style={{marginLeft:448,marginTop:16}}>回首页</Button>
                </Link>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Payment;
