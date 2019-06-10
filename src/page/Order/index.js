import React, { Component } from "react";
import Logo from "../../images/logo.png";
import {Icon, Divider,Button} from 'antd'
import $ from "jquery";
import production1 from "../../images/cert/production1.jpg";
import production2 from "../../images/cert/production2.jpg";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import "./index.css";
class Order extends Component {
    state={
        msg:''
    }
    componentDidMount(){
        $('.collectUser').click(function(){
            $('.collectUser').removeClass('active')
            $(this).addClass('active')
            let index = $(this).parent().index();

            let msg = $('.msg').eq(index).html()
            let msguser = $(this).text()
            $('.msgFinal').html(msg)
            $('.msgFinalUser').html(msguser)
        })
        $('.moreAddress').click(function(){
            let text =$(this).children('span').text()
            if(!text.indexOf('更多地址')){
                $(this).children('span').text('收起地址')
                $('.address').css('height','208px')
            }else{
                $(this).children('span').text('更多地址')
                $('.address').css('height','50px')
            }
        })
        $('.payWay').click(function(){
            $('.payWay').removeClass('active')
            $(this).addClass('active')
        })
    }
  render() {
    return (
      <div className="order">
        <div className="wrapper">
          <div style={{ display: "flex", alignItems: "center",marginBottom:16 }}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <h1>结算页</h1>
          </div>
          <div>
              <span style={{color:'#666',fontSize:20}}>填写并核对订单信息</span>
              <div style={{border:'1px solid #666',width:'100%',padding:'0 18px'}}>
                  <div style={{display:"flex",justifyContent:'space-between',height:'40px',lineHeight:'40px'}}>
                      <div><b>收货人信息</b></div>
                      <div>新增收货地址</div>
                  </div>
                <div className='address'>
                    <div style={{display:'flex',marginLeft:12}}>
                        <div className='collectUser active'>张云鹏</div>
                        <div style={{lineHeight:'40px'}}><span className='msg'>北京&nbsp;顺义区&nbsp;胜利街道&nbsp;西辛南区50号楼&nbsp;175****4518&nbsp;</span><span style={{color:'#fff',backgroundColor:'#666',padding:'0 6px'}}>默认地址</span></div>
                    </div>
                    <div style={{display:'flex',marginLeft:12}}>
                        <div className='collectUser'>李嘉齐</div>
                        <div style={{lineHeight:'40px'}}><span className='msg'>包头&nbsp;昆都仑区区&nbsp;阿尔丁街道&nbsp;内蒙古科技大学&nbsp;188****1234&nbsp;</span></div>
                    </div>
                    <div style={{display:'flex',marginLeft:12}}>
                        <div className='collectUser'>吴恩永</div>
                        <div style={{lineHeight:'40px'}}><span className='msg'>山东&nbsp;张店区&nbsp;美丽街道&nbsp;幸福小区5号楼&nbsp;133****4222&nbsp;</span></div>
                    </div>
                    <div style={{display:'flex',marginLeft:12}}>
                        <div className='collectUser'>吕传皓</div>
                        <div style={{lineHeight:'40px'}}><span className='msg'>内蒙古&nbsp;牙克石&nbsp;解放街道&nbsp;金龙小区1号楼&nbsp;156****7475&nbsp;</span></div>
                    </div>
                </div>
                <div className='moreAddress'><span>更多地址</span><Icon type="down" /></div>
                    <Divider dashed style={{margin:18}}/>
                <div style={{height:'40px',lineHeight:'40px'}}>
                      <div><b>支付方式</b></div>
                      <div style={{display:'flex'}}>
                        <div className={'payWay'}>货到付款</div>
                        <div className={'payWay active'}>在线支付</div>
                      </div>
                <Divider dashed style={{margin:18}}/>
                </div>
                <div style={{marginTop:84}}>
                    <div style={{marginBottom:24}}><b>送货清单</b></div>
                    <div style={{backgroundColor:'#00FFFF',padding:24}}>
                        <div style={{display:'flex',marginBottom:24}}>
                            <img src={production1} alt=""/>
                            <div style={{width:300,marginRight:24,marginLeft:24}}>KRISBORG美式POLO衫男薄款修身 新品短袖汗衫男主题印花翻领T恤男夏季短袖T恤男 原创设计</div>
                            <div style={{width:100,marginRight:24}}>绿色 M</div>
                            <div style={{width:100,marginRight:24}}>￥297.00</div>
                            <div style={{width:100,marginRight:24}}>X 3</div>
                        </div>
                        <div style={{display:'flex'}}>
                            <img src={production2} alt=""/>
                            <div style={{width:300,marginRight:24,marginLeft:24}}>KRISBORG美式POLO衫男薄款修身 新品短袖汗衫男主题印花翻领T恤男夏季短袖T恤男 原创设计</div>
                            <div style={{width:100,marginRight:24}}>内存 128GB</div>
                            <div style={{width:100,marginRight:24}}>￥5199.00</div>
                            <div style={{width:100,marginRight:24}}>X 1</div>
                        </div>
                    </div>   
                </div>
                <Divider dashed style={{margin:18}}/>
                <div style={{marginBottom:24}}>
                    <div style={{marginBottom:24}}><b>发票信息</b></div>
                    <div>
                    电子普通发票&nbsp;&nbsp;&nbsp;&nbsp;个人&nbsp;&nbsp;&nbsp;&nbsp;商品明细
                    </div>   
                </div>
              </div>
          </div>
          <div style={{display:'flex',justifyContent:'flex-end',backgroundColor:'#eee',padding:24}}>
            <div>收件人：<span className={'msgFinalUser'}>张云鹏</span></div>
            <div style={{marginLeft:24}}>寄送至：<span className={'msgFinal'}>北京&nbsp;顺义区&nbsp;胜利街道&nbsp;西辛南区50号楼&nbsp;175****4518&nbsp;</span></div>
          </div>
          <div style={{backgroundColor:'#eee',display:'flex',justifyContent:'flex-end',padding:'0 24px 24px 0'}}>
              <div>总价：<span style={{color:'#ff0000',fontSize:24}}>￥5496</span></div>
          </div>
          <div style={{display:'flex',justifyContent:'flex-end',paddingRight:24,marginTop:16,marginBottom:24}}>
              <Link to='/payment'>
                <Button type='primary'>提交订单</Button>
              </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Order;
