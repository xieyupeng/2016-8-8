
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
 // 热点
 function redian(){
	machar = document.getElementById("redian");
	if (machar.style.display=='block') {
		machar.style.display='none';
	}
	else{
		machar.style.display='block';
	}
}

// 推荐
function tujian(){
	machar = document.getElementById("tujian");
	if (machar.style.display=='block') {
		machar.style.display='none';
	}
	else{
		machar.style.display='block';
	}
}



// $(document).ready(function(){
// 	$(".gd").click(function(){
// 		$(".tap").toggle();
// 	})
// });

// $(document).ready(function(){
// 	  $(".gd").click(function(){
// 	  $(".tap").hide();
// 	  });
// 	  $(".gd").click(function(){
// 	  $(".tap").show();
// 	  });
// 	});


$(document).ready(function(){
  $(".bja").click(function(){
     $(".bjtitle").show();
     $(".clo").show();
     $(".remo").css("background","#e9f3fd");
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
		$(".remo").css("background","0");
	});
});



			
// 显示收起

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
	
	$.ajax({
   		data:"",
		type:"get",
		url:"json/section.json",
		async:true,
		success:function(data){
			var flag;
			var arr = eval(data.new_hot);
			console.log(arr);
			var num = arr.length;
			var add = 0;
			var dataP = $("#times li a")
			for (var i = 0; i < 6; i++) {
				$(dataP[i]).text(arr[i].title);
					
					
				var hotlen = data.new_hot;
				var hotli = $("#times li a");
				if(hotlen[i].hot == "1"){
					$(hotli[i]).addClass("asd");
				}
				else if(hotlen[i].hot == "0"){
					$(hotli[i]).removeClass("asd")
				}
				flag = 6;
			}
			
			function putData (flag) {
				for (var i = 0; i < 6; i++) {
//					console.log(arr[i + flag])
					$(dataP[i]).text(arr[i + flag].title);
					
					var hotlen = data.new_hot;
					var hotli = $("#times li a");
					
					$(hotli[i]).removeClass("asd");
					
					if(hotlen[i + flag].hot == "1"){
						$(hotli[i]).addClass("asd");
					}
					if (i == 5) {
						flag = flag + i + 1;
					}
				}
				return flag;
			}
			$("#anniu").click(change);
			function change(){
				if (flag == (add + flag) && flag !=num) {
					flag=putData(flag);
				}
				else{
					flag=putData(0)
				}
			}
       }
	});
	
$.ajax({
	type:"get",
	url:"http://wthrcdn.etouch.cn/weather_mini",
	data:{"city":"北京"},
	dataType:"jsonp",
	async:true,
	success:function(data){
		console.log(data)
		var diqu = $(".bjair p:nth-of-type(1)");
//		22du
		var wenDu = $(".air>p,.waer>p");
		
		var qiwen = $(".deg>p");
		var info = $(".waer>span");
		var days = $(".weather .day li 	p:first-child");
		var wencha = $(".weather .day li p:last-child");
		var kongqi = $(".bjair .kq");
		var zl = $(".del .aier");
		console.log(data.data);
		
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