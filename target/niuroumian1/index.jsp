<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.myee.niuroumian.controller.WebWxController" %>
<%@ page import="com.myee.niuroumian.response.WeixinCfg" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>
<%@ page import="com.myee.niuroumian.util.Constant" %>
<%@ page import="com.myee.niuroumian.util.*" %>
<%@ page import="weixin.popular.bean.token.Token" %>
<%@ page import="weixin.popular.bean.sns.SnsToken" %>
<%@ page import="weixin.popular.api.SnsAPI" %>
<%@ page import="weixin.popular.api.TokenAPI" %>
<%@ page import="com.myee.niuroumian.controller.OrderController" %>

<!DOCTYPE html>

<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <meta name="full-screen" content="yes">
    <meta name="x5-fullscreen" content="true">
    <title>美味点点</title>
    <%
        String openId="";
        WebWxController wwcc = new WebWxController();
        OrderController oc = new OrderController();
        System.out.println("+++++++++++++--------------+++++++++++request.getParameter:::"+request.getParameter("code"));
        if(request.getParameter("code")==null){
            response.sendRedirect("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe67244505b4041b6&redirect_uri=http%3A%2F%2Fpay.myee7.com%2Fnrm/&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect");
//        String code = request.getParameter("code");
        } else {
            System.out.println("====++++++=======dido_code:::" + request.getParameter("code"));
            SnsToken snsToken = wwcc.cfgSnsToken(request.getParameter("code"));
            openId = snsToken.getOpenid();
            request.getSession().setAttribute("openId", snsToken.getOpenid());
//        request.setAttribute("openId", snsToken.getOpenid());
            System.out.println("====++++++=======dido_Openid:::" + snsToken.getOpenid());
            System.out.println("===getssssssssssssssssssssion:::" + request.getSession().getId());
//        wwcc.userSession(request,snsToken.getOpenid());
        }
//    return;
    %>
    <script>
        if(sessionStorage.getItem("openid") == null){
            sessionStorage.openid ="<%=openId %>";
        }
    </script>
    <link rel="stylesheet" href="./skin/css/app.css?a=1"/>
</head>
<body ontouchstart>
<div class="container" id="cm_app"></div>
<script type="text/html" id="tpl_home">
    <header class="hd">
        <h1 class="page_title store">河南红烧牛肉面<a class="yonghu" href="#/my"><i class="cm cm-yonghu"></i></a></h1>
    </header>
    <article class="bd">
        <div class="weui_menu">
            <div class="weui_cells" id="menus"></div>
        </div>
    </article>
    <footer>
        <ul class="flex">
            <li>
                <span class="cart"><i class="cm cm-gouwuche"></i><var id="cart_v">0</var></span>
                <span class="price">￥<var id="price_v">0.00</var></span>
            </li>
            <li id="msg"><span>选择任意餐品</span></li>
            <li id="payment">去结算</li>
        </ul>
    </footer>
</script>

<script type="text/html" id="my">
    <header class="hd">
        <h1 class="page_title"><a class="zuo" href="#/"><i id="back" class="cm cm-zuo"></i></a>我的订单</h1>
    </header>
    <article class="bd" id="orderview"></article>
</script>

<script type="text/html" id="payreturn">
    <div class="weui_msg">
        <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
        <div class="weui_text_area">
            <h2 class="weui_msg_title">支付成功</h2>
            <div class="order_num" id="order_num"></div>
            <p class="weui_msg_desc">如有疑问咨询：400-8888-888</p>
        </div>
        <div class="weui_extra_area">
            <a href="#/">返回</a>
        </div>
    </div>
</script>

<div id="loadingToast" class="weui_loading_toast" style="display:none;">
    <div class="weui_mask_transparent"></div>
    <div class="weui_toast">
        <div class="weui_loading">
            <div class="weui_loading_leaf weui_loading_leaf_0"></div>
            <div class="weui_loading_leaf weui_loading_leaf_1"></div>
            <div class="weui_loading_leaf weui_loading_leaf_2"></div>
            <div class="weui_loading_leaf weui_loading_leaf_3"></div>
            <div class="weui_loading_leaf weui_loading_leaf_4"></div>
            <div class="weui_loading_leaf weui_loading_leaf_5"></div>
            <div class="weui_loading_leaf weui_loading_leaf_6"></div>
            <div class="weui_loading_leaf weui_loading_leaf_7"></div>
            <div class="weui_loading_leaf weui_loading_leaf_8"></div>
            <div class="weui_loading_leaf weui_loading_leaf_9"></div>
            <div class="weui_loading_leaf weui_loading_leaf_10"></div>
            <div class="weui_loading_leaf weui_loading_leaf_11"></div>
        </div>
        <p class="weui_toast_content">数据加载中</p>
    </div>
</div>
<script src="./skin/js/zepto.min.js"></script>
<script src="./skin/js/app.js?a=1"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
    <%
        WebWxController wwc = new WebWxController();
        WeixinCfg cfg = wwc.weixinCfg(request);
        System.out.println(cfg.getAppId());
    %>

            wx.config({
        debug: false,
        appId:"<%=cfg.getAppId() %>" ,
        timestamp: <%=cfg.getTimestamp() %>,
        nonceStr: "<%=cfg.getNonceStr() %>",
        signature: "<%=cfg.getSignature() %>",
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: '河南红烧牛肉面',
            desc: '河南红烧牛肉面',
            link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe67244505b4041b6&redirect_uri=http%3A%2F%2Fpay.myee7.com%2Fnrm%2Fwxitf%2Fhome.do&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect',
            imgUrl: 'http://pay.myee7.com/nrm/skin/images/menu/1.jpg',
            trigger: function (res) {

            },
            success: function (res) {

            },
            cancel: function (res) {

            },
            fail: function (res) {

            }
        });


        wx.onMenuShareTimeline({
            title: '河南红烧牛肉面',
            link: 'http://pay.myee7.com/nrm',
            imgUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe67244505b4041b6&redirect_uri=http%3A%2F%2Fpay.myee7.com%2Fnrm%2Fwxitf%2Fhome.do&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect',
            trigger: function (res) {

            },
            success: function (res) {

            },
            cancel: function (res) {

            },
            fail: function (res) {

            }
        });
    });
</script>
</div>
</body>