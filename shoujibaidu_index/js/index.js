/**
 * Created by wangshuang on 2016/9/21.
 */
// 淡入淡出
$(document).ready(function(){
    $(".air").click(function(){
        $(".detail").slideDown("show");
        $(".air").css("opacity","0");
    });
    $(".detail").click(function(){
        $(".detail").slideUp("hide");
        $(".air").css("opacity","1");
    });
});

// 按钮

$(document).ready(function(){
    $(".bef").click(function(){
        $(".pom").toggle();
    })
});

jQuery (function ($)
{
    $(".bef").click (function ()
    {
        $(this).find("p").toggleClass("a2");
    });
});

// input框
$("#input").attr("value");

var vals=$("#input").val();
// console.log(vals);
// =$("#input").value;
$("#input").focus(function(){
    if(vals!=""){
        $(".shan").css("display","block");
        $(".ado").css("display","none");
    }else{
        $(".shan").css("display","none");
        $(".ado").css("display","block");
    }
    $("#shan").bind(function () {
        vals="";
        console.log(val);
    });
});

$("#input").blur(function(){
    if(vals!=""){
        $(".shan").css("display","block");
        $(".ado").css("display","none");
    }else if(vals=""){
        $(".shan").css("display","none");
        $(".ado").css("display","block");
    }
});


// 更多

$(document).ready(function(){
    $(".morea").click(function(){
        $(".hide").toggle();
    });
});

jQuery (function ($)
{
    $(".morea").click (function ()
    {
        $(this).find("i").toggleClass("a1");
    });
});


// 导航

function daohang(){
    machar = document.getElementById("daohang");
    if (machar.style.display=='block') {
        machar.style.display='none';
    }
    else{
        machar.style.display='block';
    }
}

function daohang1(){
    tap = document.getElementById("tap");
    if (tap.style.display=='block') {
        tap.style.display='none';
    }
    else{
        tap.style.display='block';
    }
}

// 选项卡切换
// 关注
function blank() {
    var blank="<div class='blank'><div class='daohang'></div></div>"
    $(".xuan").after(blank);
    var pltitle="<div class='pltitle awe'><h2>我的导航</h2><a href='#' class='edit' onclick='daohang()'><i class='iconfont gd'>&#xe649;</i></a><ul class='tap' id='daohang'><li data-action='edit' class='bja'>编辑</li><li data-action='top' class='zd'>置顶</li><li data-action='close' class='close'>关闭</li></ul></div>"
    $(".daohang").prepend(pltitle);
    var bjtitle="<div class='bjtitle'><h2>导航编辑</h2><div class='blsac'><img src='images/fanhui.png'></div></div>"
    $(".daohang").append(bjtitle);
    var dhcontet="<div class='dhcontet'><a href='#'><span class='remo'>hao123</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><span class='remo'>美女</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><span class='remo'>图片</span><div class='clo'><img src='images/cuo.png'></div></a>" +
        "<a href='#'><span class='remo'>爱奇艺</span><div class='clo'><img src='images/cuo.png' width='10' height='10'></div></a><a href='#'><span class='remo'>电视剧</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><span class='remo'>电影</span><div class='clo'><img src='images/cuo.png'></div></a>" +
        "<a href='#'><span class='remo'>笑话</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><span class='remo'>音乐</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><span class='remo'>小说</span><div class='clo'><img src='images/cuo.png'></div></a>" +
        "<a href='#'><span class='remo'>新军事</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><span class='remo'>彩票开奖</span><div class='clo'><img src='images/cuo.png'></div></a><a href='#'><i class='iconfont jia '>&#xe60e;</i></a></div>"
    $(".daohang").append(dhcontet);
    var data="<div class='data'><div class='pltitle'><h2>生活服务</h2><a href='#' class='edit' onclick='daohang1()'><i class='iconfont gd'>&#xe649;</i></a><ul class='tap' id='tap'><li data-action='top'>置顶</li><li data-action='close'>关闭</li></ul></div>" +
        "<div class='pltcon'><div class='gps'><div class='gpas'><p>点击定位，查看附近位置信息</p></div><button>定位</button><span><i class='iconfont wza'>&#xe693;</i></span></div><ul class='list'><li><a href='#'><div class='rude'><img src='images/liam.png'></div><p>电影</p></a></li><li><a href='#'><div class='pon'><i class='iconfont'>&#xe602;</i></div><p>团购</p></a></li>" +
        "<li><a href='#'><div class='wm'><i class='iconfont'>&#xe653;</i></div><p>外卖</p></a></li><li><a href='#'><div class='tax'><i class='iconfont'>&#xe60a;</i></div><p>打车</p></a></li><li><a href='#'><div class='hotel'><i class='iconfont'>&#xe67f;</i></div><p>酒店</p></a></li><li><a href='#'><div class='cacy'><i class='iconfont'>&#xe62d;</i></div><p>美食</p></a></li>" +
        "<li><a href='#'><div class='ktv'><i class='iconfont'>&#xe609;</i></div><p>KTV</p></a></li><li><a href='#'><div class='huafei'><i class='iconfont'>&#xe60f;</i></div><p>充值</p></a></li></ul>" +
    "<ul class='lista' id='fuwu'><li><a href='#'><div class='rude'><img src='images/liam.png'></div><p>电影</p></a></li>" + "<li><a href='#'><div class='pon'><i class='iconfont'>&#xe602;</i></div><p>团购</p></a></li><li><a href='#'><div class='wm'><i class='iconfont'>&#xe653;</i></div><p>外卖</p></a></li>" +
        "<li><a href='#'><div class='tax'><i class='iconfont'>&#xe60a;</i></div><p>打车</p></a></li>" + "<li><a href='#'><div class='hotel'><i class='iconfont'>&#xe67f;</i></div><p>酒店</p></a></li><li><a href='#'><div class='cacy'><i class='iconfont'>&#xe62d;</i></div><p>美食</p></a></li>" + "<li><a href='#'><div class='ktv'><i class='iconfont'>&#xe609;</i></div><p>KTV</p></a></li>" +
        "<li><a href='#'><div class='huafei'><i class='iconfont'>&#xe60f;</i></div><p>充值</p></a></li></ul></div><div class='rol' onclick='fuwu()'><span class='prompt'  id='both'>展示全部</span><i class='iconfont arrow'>&#xe81c;</i></div></div>";
    $(".daohang").after(data);
    var guanli="<div class='guanli'>管理我的关注</div>";
    $(".data").after(guanli);
    var bottom="<div class='bottom'><ul><li><a href='#'><span class='span'></span>百度浏览器，上网提速200%</a></li><li><a href='#'><span class='span1'></span>手机百度， 6亿用户的极速搜索应用</a></li><li><a href='#'><span class='span'></span>百度推广，让有需求的客户找到你</a></li></ul>" +
        "<div class='yonghu'><a href='#'><i class='icon-feedback'></i>用户反馈</a></div><a href='#' class='daoyi'>使用百度前必读&nbsp;Baidu&nbsp;京ICP证030173号</a><a href='#' class='daoyi1'>京公网安备11000002000001号</a></div>";
    $(".guanli").after(bottom);
}
blank();
$("#zi_1").bind('click',function () {
    $(".blank2").remove();
    $("#zi_1").addClass("actt");
    $("#zi_2").removeClass("actt");
    $(".xian").css({
        "transform": "translateX(-66.5%)"
    });
    blank();
})

// 我的导航功能
$(document).ready(function(){
    $(".bja").click(function(){
        $(".bjtitle").show();
        $(".clo").show();
        $(".remo").css("background","#FAFAFA");
        $(".awe").css("opacity","0");
    });
});


$(document).ready(function(){
    $(".clo").click(function(){
        $(this).parent().remove();
    });

});


$(document).ready(function(){
    $(".blsac").click(function(){
        $(".clo").hide();
        $(".bjtitle").css("opacity","0");
        $(".awe").css("opacity","1");
        $("#daohang").css("display","none");
        $(".remo").css("background","0");
    });
});

// 展示全部
function fuwu(){
    mychar = document.getElementById("fuwu");
    var bb = document.getElementById("both").value;
    if(mychar.style.display=='block'){ // == 判断div.display是否为显示
        mychar.style.display='none'; //= 赋值也可了解成改变
        document.getElementById("both").innerHTML = "显示全部";
    }
    else{
        mychar.style.display='block';
        document.getElementById("both").innerHTML = "收起";

    }
}

// 推荐
function blank2() {
    $(".blank").remove();
    var blank2="<div class='blank2'></div>"
    $(".xuan").after(blank2);
    $.ajax({
        dataType: "json",
        url: "js/index.json",
        type: "GET",
        success: function (data) {
            // console.log(data);
            for (var i = 0; i <data.length; i++) {
                if (data[i].flag == 3) {
                    var imgArr = data[i].imgSrc.split(" && ");
                    var san = "<div class='san'><h2>" + data[i].title + "</h2><div class='tu'><img src='" + imgArr[0] + "' alt=''><img src='" + imgArr[1] + "' alt=''><img src='" + imgArr[2] + "' alt=''></div><div class='shijian'><span>" + data[i].shijian + "</span></div></div>"
                    $(".blank2").prepend(san);
                }else if(data[i].flag == 1){
                    var yi="<div class='yi'><div class='left'><img src='" + data[i].imgSrc + "' alt=''></div><h2>" + data[i].title + "</h2><div class='shijian'><span>" + data[i].shijian + "</span></div></div>";
                    $(".blank2").prepend(yi);
                }
            }
            // 下拉加载
            $(document).on('scroll', function (e) {
                var windowTop = $(window).innerHeight();
                var documentTop = $(document).innerHeight();
                var scrollTop = $(document).scrollTop();

                if (windowTop + scrollTop == documentTop) {
                    for (var i = 0; i <data.length; i++) {
                        if (data[i].flag == 3) {
                            var imgArr = data[i].imgSrc.split(" && ");
                            var san = "<div class='san'><h2>" + data[i].title + "</h2><div class='tu'><img src='" + imgArr[0] + "' alt=''><img src='" + imgArr[1] + "' alt=''><img src='" + imgArr[2] + "' alt=''></div><div class='shijian'><span>" + data[i].shijian + "</span></div></div>"
                            $(".blank2").prepend(san);
                        }else if(data[i].flag == 1){
                            var yi="<div class='yi'><div class='left'><img src='" + data[i].imgSrc + "' alt=''></div><h2>" + data[i].title + "</h2><div class='shijian'><span>" + data[i].shijian + "</span></div></div>";
                            $(".blank2").prepend(yi);
                        }
                    }
                }
            })
        }
    })
}
$("#zi_2").bind('click',function () {
    $("#zi_1").removeClass("actt");
    $("#zi_1").css("color","#333");
    $("#zi_2").addClass("actt");
    $(".xian").css({
        "transform": "translateX(66.5%)"
    });
    blank2();
})

$.ajax({
    type:"get",
    url:"http://wthrcdn.etouch.cn/weather_mini",
    data:{"city":"北京"},
    dataType:"jsonp",
    async:true,
    success:function(data){
        // console.log(data)
        var diqu = $(".bjair p:nth-of-type(1)");
//		22du
        var wenDu = $(".air>p,.waer>p");

        var qiwen = $(".deg>p");
        var info = $(".waer>span");
        var days = $(".weather .day li 	p:first-child");
        var wencha = $(".weather .day li p:last-child");
        var kongqi = $(".bjair .kq");
        var zl = $(".del .aier");
        // console.log(data.data);

        wenDu.text(data.data.wendu+"°");
        diqu.text(data.data.city);
        qiwen.text(data.data.forecast[0].low);
        info.text(data.data.forecast[0].type+" "+data.data.forecast[0].fengli);
        kongqi.text("空气" + data.data.aqi);
        zl.text("空气质量" + data.data.aqi);
        for(i=0;i<4;i++){
            $(days[i]).text(data.data.forecast[i].date.slice(-3));
            $(wencha[i]).text(data.data.forecast[i].high.slice(-3,-1)+"°/"+data.data.forecast[i].low.slice(-3,-1)+"°");
            $(days[0]).text("今天");
            $(days[1]).text("明天");
        }
    }
});