/*!
 * router v0.1.0 (https://github.com/progrape/router)
 * Copyright 2016
 * Licensed under the  MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Router",[],t):"object"==typeof exports?exports.Router=t():e.Router=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),a=o(s),u=function(){function e(t){r(this,e),this._options={container:"#cm_app",enter:"enter",enterTimeout:0,leave:"leave",leaveTimeout:0},this._index=1,this._$container=null,this._routes=[],this._default=null,this._options=a.extend(this._options,t),this._$container=document.querySelector(this._options.container)}return i(e,[{key:"init",value:function(){var e=this;window.addEventListener("hashchange",function(t){var n=a.getHash(t.newURL),o=history.state||{};e.go(n,o._index<=e._index)},!1),history.state&&history.state._index&&(this._index=history.state._index),this._index--;var t=a.getHash(location.href),n=this._getRoute(t);return this.go(n?t:this._default),this}},{key:"push",value:function(e){return e=a.extend({url:"*",className:"",render:a.noop,bind:a.noop},e),this._routes.push(e),this}},{key:"setDefault",value:function(e){return this._default=e,this}},{key:"go",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],o=this._getRoute(e);if(!o)throw new Error("url "+e+" was not found");return!function(){var r="function"==typeof o.render?o.render(o.params):"",i=t._$container.hasChildNodes();i&&!function(){var e=t._$container.childNodes[0];n&&e.classList.add(t._options.leave),t._options.leaveTimeout>0?setTimeout(function(){e.parentNode.removeChild(e)},t._options.leaveTimeout):e.parentNode.removeChild(e)}();var s=document.createElement("div");o.className&&s.classList.add(o.className),s.innerHTML=r,t._$container.appendChild(s),!n&&t._options.enter&&i&&s.classList.add(t._options.enter),t._options.enterTimeout>0?setTimeout(function(){s.classList.remove(t._options.enter)},t._options.enterTimeout):s.classList.remove(t._options.enter),location.hash="#"+e;try{n?t._index--:t._index++,history.replaceState&&history.replaceState({_index:t._index},"",location.href)}catch(a){}"function"!=typeof o.bind||o.__isBind||(o.bind.call(s),o.__isBind=!0)}(),this}},{key:"_getRoute",value:function(e){for(var t=0,n=this._routes.length;n>t;t++){var o=this._routes[t],r=a.getRegExp(o.url),i=a.getParams(o.url),s=r.exec(e);if(s){o.params={};for(var u=0,c=i.length;c>u;u++){var l=i[u];o.params[l]=s[u+1]}return o}}return null}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e){return-1!==e.indexOf("#")?e.substring(e.indexOf("#")+1):"/"}function r(){}function i(e){var t=/\((.*?)\)/g,n=/(\(\?)?:\w+/g,o=/\*\w+/g,r=/[\-{}\[\]+?.,\\\^$|#\s]/g;return e=e.replace(r,"\\$&").replace(t,"(?:$1)?").replace(n,function(e,t){return t?e:"([^/?]+)"}).replace(o,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")}function s(e){for(var t=/:(\w+)/g,n=[],o=void 0;null!==(o=t.exec(e));)n.push(o[1]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.extend=n,t.getHash=o,t.noop=r,t.getRegExp=i,t.getParams=s}])});

/*!
 * 本地化存储(localStorage) 组件
 */
//(function(e){var b,d=function(){},a=e.document,c={set:d,get:d,remove:d,clear:d,each:d,obj:d,length:0};(function(){if("localStorage" in e){try{b=e.localStorage;return}catch(p){}}var h=a.getElementsByTagName("head")[0],g=e.location.hostname||"localStorage",q=new Date(),s,l;if(!h.addBehavior){try{b=e.localStorage}catch(p){b=null}return}try{l=new ActiveXObject("htmlfile");l.open();l.write("<s"+"cript>document.w=window;</s"+'cript><iframe src="/favicon.ico"></iframe>');l.close();s=l.w.frames[0].document;h=s.createElement("head");s.appendChild(h)}catch(p){h=a.getElementsByTagName("head")[0]}try{q.setDate(q.getDate()+36500);h.addBehavior("#default#userData");h.expires=q.toUTCString();h.load(g);h.save(g)}catch(p){return}var r,t;try{r=h.XMLDocument.documentElement;t=r.attributes}catch(p){return}var m="p__hack_",j="m-_-c",k=new RegExp("^"+m),i=new RegExp(j,"g"),n=function(o){return encodeURIComponent(m+o).replace(/%/g,j)},f=function(o){return decodeURIComponent(o.replace(i,"%")).replace(k,"")};b={length:t.length,isVirtualObject:true,getItem:function(o){return(t.getNamedItem(n(o))||{nodeValue:null}).nodeValue||r.getAttribute(n(o))},setItem:function(o,u){try{r.setAttribute(n(o),u);h.save(g);this.length=t.length}catch(v){}},removeItem:function(o){try{r.removeAttribute(n(o));h.save(g);this.length=t.length}catch(u){}},clear:function(){while(t.length){this.removeItem(t[0].nodeName)}this.length=0},key:function(o){return t[o]?f(t[o].nodeName):undefined}};if(!("localStorage" in e)){e.localStorage=b}})();e.LS=!b?c:{set:function(f,g){if(this.get(f)!==undefined){this.remove(f)}b.setItem(f,g);this.length=b.length},get:function(g){var f=b.getItem(g);return f===null?undefined:f},remove:function(f){b.removeItem(f);this.length=b.length},clear:function(){b.clear();this.length=0},each:function(i){var h=this.obj(),g=i||function(){},f;for(f in h){if(g.call(this,f,this.get(f))===false){break}}},obj:function(){var h={},g=0,j,f;if(b.isVirtualObject){h=b.key(-1)}else{j=b.length;for(;g<j;g++){f=b.key(g);h[f]=this.get(f)}}return h},length:b.length};if(e.jQuery){e.jQuery.LS=e.LS}})(window);
//
//touch
;(function($){var touch={},touchTimeout,tapTimeout,swipeTimeout,longTapTimeout,longTapDelay=750,gesture;function swipeDirection(x1,x2,y1,y2){return Math.abs(x1-x2)>=Math.abs(y1-y2)?(x1-x2>0?"Left":"Right"):(y1-y2>0?"Up":"Down")}function longTap(){longTapTimeout=null;if(touch.last){touch.el.trigger("longTap");touch={}}}function cancelLongTap(){if(longTapTimeout){clearTimeout(longTapTimeout)}longTapTimeout=null}function cancelAll(){if(touchTimeout){clearTimeout(touchTimeout)}if(tapTimeout){clearTimeout(tapTimeout)}if(swipeTimeout){clearTimeout(swipeTimeout)}if(longTapTimeout){clearTimeout(longTapTimeout)}touchTimeout=tapTimeout=swipeTimeout=longTapTimeout=null;touch={}}function isPrimaryTouch(event){return(event.pointerType=="touch"||event.pointerType==event.MSPOINTER_TYPE_TOUCH)&&event.isPrimary}function isPointerEventType(e,type){return(e.type=="pointer"+type||e.type.toLowerCase()=="mspointer"+type)}$(document).ready(function(){var now,delta,deltaX=0,deltaY=0,firstTouch,_isPointerType;if("MSGesture" in window){gesture=new MSGesture();gesture.target=document.body}$(document).bind("MSGestureEnd",function(e){var swipeDirectionFromVelocity=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;if(swipeDirectionFromVelocity){touch.el.trigger("swipe");touch.el.trigger("swipe"+swipeDirectionFromVelocity)}}).on("touchstart MSPointerDown pointerdown",function(e){if((_isPointerType=isPointerEventType(e,"down"))&&!isPrimaryTouch(e)){return}firstTouch=_isPointerType?e:e.touches[0];if(e.touches&&e.touches.length===1&&touch.x2){touch.x2=undefined;touch.y2=undefined}now=Date.now();delta=now-(touch.last||now);touch.el=$("tagName" in firstTouch.target?firstTouch.target:firstTouch.target.parentNode);touchTimeout&&clearTimeout(touchTimeout);touch.x1=firstTouch.pageX;touch.y1=firstTouch.pageY;if(delta>0&&delta<=250){touch.isDoubleTap=true}touch.last=now;longTapTimeout=setTimeout(longTap,longTapDelay);if(gesture&&_isPointerType){gesture.addPointer(e.pointerId)}}).on("touchmove MSPointerMove pointermove",function(e){if((_isPointerType=isPointerEventType(e,"move"))&&!isPrimaryTouch(e)){return}firstTouch=_isPointerType?e:e.touches[0];cancelLongTap();touch.x2=firstTouch.pageX;touch.y2=firstTouch.pageY;deltaX+=Math.abs(touch.x1-touch.x2);deltaY+=Math.abs(touch.y1-touch.y2)}).on("touchend MSPointerUp pointerup",function(e){if((_isPointerType=isPointerEventType(e,"up"))&&!isPrimaryTouch(e)){return}cancelLongTap();if((touch.x2&&Math.abs(touch.x1-touch.x2)>30)||(touch.y2&&Math.abs(touch.y1-touch.y2)>30)){swipeTimeout=setTimeout(function(){touch.el.trigger("swipe");touch.el.trigger("swipe"+(swipeDirection(touch.x1,touch.x2,touch.y1,touch.y2)));touch={}},0)}else{if("last" in touch){if(deltaX<30&&deltaY<30){tapTimeout=setTimeout(function(){var event=$.Event("tap");event.cancelTouch=cancelAll;touch.el.trigger(event);if(touch.isDoubleTap){if(touch.el){touch.el.trigger("doubleTap")}touch={}}else{touchTimeout=setTimeout(function(){touchTimeout=null;if(touch.el){touch.el.trigger("singleTap")}touch={}},250)}},0)}else{touch={}}}}deltaX=deltaY=0}).on("touchcancel MSPointerCancel pointercancel",cancelAll);$(window).on("scroll",cancelAll)});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(eventName){$.fn[eventName]=function(callback){return this.on(eventName,callback)}})})(Zepto);
//app.js
$(function () {
    //初始化Router
    var router = new Router({
        container: '#cm_app',
        enterTimeout: 150,
        leaveTimeout: 100
    });

    //ajax 开始-》结束
	$(document).on('ajaxStart',function () {
		$('#loadingToast').show();
	}).on('ajaxStop',function () {
		$('#loadingToast').hide();
	});

    //全局
    var cm = {
        url:'http://pay.myee7.com/nrm/',
    	store:{
    		id:null,
    		name:null,
    		type:1
    	},
    	api:function(url,data){
    		var defer = $.Deferred();
			$.ajax({
				type: 'POST',
				url: url,
				data: data || '',
				dataType: 'json',
				timeout: 3000,
				success: function(res){
					defer.resolve(res);
				},
				error: function(xhr, type){

				}
			});
			return defer.promise();
    	},
        m_data:[]
    };

    // grid
    var tpl_order = {
        url: '/',
        html:'',
        order:[],
        num:0,
        className: 'tpl_order',
        menu_list:function(res){
            var h_ = '<div class="menu">';
            $.each(res, function(k, v){
                h_ += '<span><var>'+v.dishInfo.dishName+'</var><var><i class="cm cm-price"></i>'+v.dishInfo.dishPrice+'*'+v.quantity+'</var></span>'
            });
            h_ += '</div>';
            return h_;
        },
        render: function () {
            if(cm.m_data.length>0){
                setTimeout(function(){
                    $.each(cm.m_data, function(k, v){
                        $('#orderList').append('<li data-orderId="'+v.orderId+'" data-shopId="'+v.shopId+'"><span class="num"><var class="num_b font_40">'+v.waitNo+'</var><span class="fen">总<var>'+v.count+'</var>份</var></span>'+tpl_order.menu_list(v.items)+'</li>');
                    });
                },300);
            }
        	return $('#tpl_order').html();
        },
        bind: function () {
            //websocket
            var Chat = {};
            Chat.socket = null;
            Chat.connect = (function(host) {
				
                if ('WebSocket' in window) {				
                   Chat.socket = new WebSocket(host);
                } else if ('MozWebSocket' in window) {
                    Chat.socket = new MozWebSocket(host);
                } else {
					Chat.socket =  new SockJS(host)
                    //alert('Error: WebSocket is not supported by this browser.');
                    //return;
                }

                Chat.socket.onopen = function () {
                    console.log('Info: WebSocket connection opened.');
                    Chat.sendMessage();
                };

                Chat.socket.onclose = function () {
                    alert('Info: WebSocket closed.');
                };
				Chat.socket.onerror = function(e) {
					alert('Info: onerror.'+e);					
				};
                Chat.socket.onmessage = function (res) {
                    $('#loadingToast').hide();
                    var d = eval('(' + res.data + ')');
                    if(d.data.body){
                        $.each(d.data.body, function(k, v){
                            cm.m_data.push(v);
                        });

                        $.each(d.data.body, function(k, v){
                            $('#orderList').append('<li data-orderId="'+v.orderId+'" data-shopId="'+v.shopId+'"><span class="num"><var class="num_b font_40">'+v.waitNo+'</var><span class="fen">总<var>'+v.count+'</var>份</var></span>'+tpl_order.menu_list(v.items)+'</li>');
                        });
                    }else{
                        console.log('还没有订单！');
                    }
                };
            });

            Chat.initialize = function() {
                if (window.location.protocol == 'http:') {
                    Chat.connect('ws://120.25.66.76:8780/niuroumian1/order/orderOnline');
                } else {
                    Chat.connect('wss://120.25.66.76:8780/niuroumian1/order/orderOnline');
                }
                $('#loadingToast').show();
            }();

            Chat.sendMessage = (function() {
                var message = new Object();
                message.messageType = "REGISTER";
                message.body = "";
                message.userId = "";
                message.shopId = "233331";
                Chat.socket.send(JSON.stringify(message));
            });

            //传菜/取消
            $('#cm_app').on('click','#orderList li',function(){
                var t_ = this,index_ = $(t_).index();
                $('#orderList').find('.orderClick').remove();
                $(t_).append('<div class="orderClick"><span class="cc order_l" data-c="cc">传菜</span><span class="bcl order_l" data-c="bcl">不吃了</span></div>');

                $('.order_l').on('click',function(){
                    var rep = {"orderId":$(t_).data('orderid'),"shopId":$(t_).data('shopid')};
                    rep.orderState = $(this).data('c') == 'cc'?2:4;

                    cm.api(cm.url+'order/orderCancel',{message:JSON.stringify(rep)}).then(function(res){
                        if(res.code === 0){
                            cm.m_data.splice(index_,1);
                            $(t_).remove();
                        }
                    });
                });
            });
        }
    }

    var home = {
        url: '/home',
        html:'',
        order:[],
        num:0,
        className: 'home',
        render: function () {
            var data = null;
            if(home.html){
                setTimeout(function(){
                    home.order = [];
                    home.num = 0;
                    $('#menus').html(home.html);
                },300);
            }
            return $('#tpl_home').html();
        },
        bind: function () {
                home.html = '';
                var res = {"storeId":233331,"storeName":"河南红烧牛肉面","storeType":1,"data":[{"id":1,"name":"拉面","data":[{"id":110,"img":"1.jpg","type":"大","name":"红烧牛肉拉面","price":16},{"id":111,"img":"1.jpg","type":"小","name":"红烧牛肉拉面","price":15},{"id":112,"img":"2.jpg","type":"大","name":"牛肉拉面","price":10},{"id":113,"name":"牛肉拉面","type":"小","img":"2.jpg","price":10},{"id":114,"type":"大","name":"牛杂拉面","img":"3.jpg","price":10},{"id":115,"type":"小","name":"牛杂拉面","img":"3.jpg","price":9}]},{"id":2,"name":"刀削面","data":[{"id":116,"type":"大","name":"红烧牛肉刀削面","img":"4.jpg","price":16},{"id":117,"type":"小","name":"红烧牛肉刀削面","img":"4.jpg","price":15},{"id":118,"type":"大","name":"牛肉刀削面","img":"6.jpg","price":10},{"id":119,"type":"小","name":"牛肉刀削面","img":"6.jpg","price":9},{"id":120,"type":"大","name":"牛杂刀削面","img":"5.jpg","price":10},{"id":121,"type":"小","name":"牛杂刀削面","img":"5.jpg","price":9}]},{"id":3,"name":"拌面","data":[{"id":122,"type":"大","name":"红烧牛肉拌面","img":"7.jpg","price":16},{"id":123,"type":"小","name":"红烧牛肉拌面","img":"7.jpg","price":15},{"id":124,"type":"大","name":"牛肉拌面","img":"8.jpg","price":14},{"id":125,"type":"小","name":"牛肉拌面","img":"8.jpg","price":12},{"id":126,"type":"大","name":"牛杂拌面","img":"9.jpg","price":14},{"id":127,"type":"小","name":"牛杂拌面","img":"9.jpg","price":12},{"id":128,"type":"大","name":"红烧牛肉拌刀削面","img":"10.jpg","price":16},{"id":129,"type":"小","name":"红烧牛肉拌刀削面","img":"10.jpg","price":15},{"id":130,"type":"大","name":"牛肉拌刀削面","img":"6.jpg","price":14},{"id":131,"type":"小","name":"牛肉拌刀削面","img":"6.jpg","price":12},{"id":132,"type":"大","name":"牛杂拌刀削面","img":"9.jpg","price":14},{"id":133,"type":"小","name":"牛杂拌刀削面","img":"9.jpg","price":12}]},{"id":4,"name":"汤","data":[{"id":134,"type":"","name":"牛肉汤","img":"11.jpg","price":8},{"id":135,"type":"","name":"牛杂汤","img":"11.jpg","price":8},{"id":136,"type":"","name":"牛肉粉丝汤","img":"11.jpg","price":10},{"id":137,"type":"","name":"牛杂粉丝汤","img":"11.jpg","price":10}]},{"id":5,"name":"另加","data":[{"id":138,"type":"","name":"牛肉","img":"12.jpg","price":8},{"id":139,"type":"","name":"牛杂","img":"13.jpg","price":8},{"id":140,"type":"","name":"红烧牛肉","img":"14.jpg","price":10},{"id":141,"type":"","name":"荷包蛋","img":"15.jpg","price":2},{"id":142,"type":"","name":"卤蛋","img":"16.jpg","price":2},{"id":143,"type":"","name":"素鸡","img":"17.jpg","price":2},{"id":144,"type":"大","name":"凉拌牛肉","img":"12.jpg","price":30},{"id":145,"type":"小","name":"凉拌牛肉","img":"12.jpg","price":20},{"id":146,"type":"大","name":"凉拌牛杂","img":"13.jpg","price":30},{"id":147,"type":"小","name":"凉拌牛杂","img":"13.jpg","price":20}]}]};

                data = res.data,len = data.length;
                home.html += '<ul class="nav">';
                for (var i=0; i<len; i++) {
                    home.html += '<li data-href="m_'+data[i].id+'"><span>'+data[i].name+'</span></li>'
                }
                home.html += '</ul><div class="menuList">';
                for (var i=0; i<len; i++) {
                    home.html += '<div class="weui_cells_title" id="m_'+data[i].id+'">'+data[i].name+'</div>';
                    var d_ = data[i].data,len_ = d_.length;
                    for (var j=0; j<len_; j++) {
                        var type_t = d_[j].type?'<i>'+d_[j].type+'</i>':''
                        home.html += '<div class="weui_cell"><div class="weui_cell_hd"><img src="./skin_b/images/menu/'+d_[j].img+'" /></div><div class="weui_cell_bd weui_cell_primary"><span class="tit">'+d_[j].name+type_t+'</i></span><span class="day3"><a>早</a><a>中</a><a>晚</a></span><span class="price"><i class="cm cm-price">'+d_[j].price+'</i></span></div><div class="weui_cell_ft"><ul class="flex"><li class="s_com" data-c="jie" data-id="'+d_[j].id+'"><i class="cm cm-shanchu"></i></li><li><input data-price="'+d_[j].price+'" type="text" disabled value="0" /></li><li class="s_com" data-c="jia" data-id="'+d_[j].id+'"><i class="cm cm-tianjia"></i></li></ul></div></div>'
                    }
                };
                home.html += '</div>';
                $('#menus').html(home.html);


            $('#cm_app').on('tap','.s_com',function(){

                var index_ = $($(this).parents('.weui_cell')).index();
                if($(this).data('c') == 'jia'){
                    var t = $(this).prev().find('input'),v_ = parseInt(t.val())+1; 
                    t.val(v_);
                    home.order[index_] = {
                        id:$(this).data('id'),
                        price:t.data('price'),
                        num:v_
                    }
                    home.num++;
                    $(this).parent().find('li').show();
                }else{
                    var t = $(this).next().find('input'),v_ = parseInt(t.val())-1; 
                    t.val(v_);
                    if(v_<0){
                        t.val(0);
                        home.order.splice(index_,1)
                    }else{
                        v_<=0 && $(this).hide().next().hide();
                        home.order[index_] = {
                            id:$(this).data('id'),
                            price:t.data('price'),
                            num:v_
                        }
                        home.num--;
                    }
                }
                setTotal();
            });

            $('#cm_app').on('tap','#payment',function(){
                var order = [];
                $.each(home.order, function(k, v){
                    if(v){
                        order.push({"dishId":v.id,"quantity":v.num});
                    }
                });
                var data = {
                    "userId":'',
                    "shopId":233331,
                    "orderType":7,
                    "order":order
                }

                cm.api(cm.url+'order/orderOffline',{orderDetail:JSON.stringify(data)}).then(function(res){
                    if(res.code === 0){
                        cm.m_data.push(res.data);
                        window.location.hash = "#/";
                    }
                });
            });

            $('#cm_app').on('tap','.nav li',function(){
                var h = document.getElementById($(this).data('href')).offsetTop;
                $(this).addClass('white').siblings().removeClass('white');
                $.scrollTo({
                    endY: h,
                    duration: 200,
                    callback: function() {}
                });
            });

            function setTotal(){
                var total = 0;
                home.num>0?$('#msg').hide().next().show():$('#msg').show().next().hide();
                $('#cart_v').html(home.num);
                $.each(home.order, function(k, v){
                    if(v){
                        total += v.num*v.price;
                    }
                });
                $("#price_v").html(total.toFixed(2));
            }
        }
    }

    //my account
    var my = {
        url: '/my',
        className: 'my',
        render: function () {
        setTimeout(function(){
            $("#orderview").wrapAll('<div id="orderlist" class="weui_cells content"><div id="myorder"></div></div>');
            function order_list(res){
                var d_ = '';
                $.each(res, function(k, v){
                    d_ += '<a href="javascript:void(0);" class="weui_media_box weui_media_appmsg"><div class="weui_media_hd"><img class="weui_media_appmsg_thumb" src="./skin_b/images/menu/'+v.img+'" alt=""></div><div class="weui_media_bd"><h4 class="weui_media_title">'+v.dishName+'</h4><p class="weui_media_desc">￥'+v.orderPrice+' <var>x'+v.quantity+'</var></p></div></a>'
                });
                return d_;
            }

            var counter = 0,num = 10,pageEnd = 0,orderBasicInfoList = [];
            var data = {
                "shopId":233331,
                "start":0,
                "end":10
            }
            // dropload
            $('.content').dropload({
                scrollArea : window,
                loadDownFn : function(me){
                    cm.api(cm.url+'wxitf/shop_orderList',data).then(function(res){
                        counter++;
                        pageEnd = num * counter;
                        data.start = pageEnd - num;

                        var order_view = '',d_ = res.data.orderBasicInfoList;

                        $.each(d_, function(k, v){
                            order_view += '<div class="weui_panel weui_panel_access"><div class="weui_panel_hd"><span>订单号：'+v.orderId+'</span><span>总价:'+v.orderPrice+'</span><span>'+v.orderName+'</span></div><div class="weui_panel_bd">'+order_list(v.orderRelDtoList)+'</div></div>';
                            if(d_.length<10){
                                me.lock();
                                me.noData();
                            }
                        });

                        
                        $('#myorder').append(order_view);
                        me.resetload();
                    });
                }
            });
        },300);
            return $('#my').html();
        },
        bind:function(){
            //
            
        }
    };

    router.push(tpl_order)
        .push(home)
        .push(my)
        .setDefault('/')
        .init();


    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
});
