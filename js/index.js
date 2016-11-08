$(function(){
    $('.box').fullpage({
    	navigation:true,
    	navigationTooltips:["登录百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"],
    	navigationColor:"#eee",
    	anchors:["ping1","ping2","ping3","ping4"],
    	afterLoad:function (anchorLink,index){
    		if(index==1){
    		$(".img9").toggleClass("active1");
    		$(".img9").removeClass("active11")
            }else if(index==2){
    		$(".img10").toggleClass("active2");
    		$(".img10").removeClass("active22");
    		$(".y-ain").toggleClass("active3"); 
    		$(".title").toggleClass("active4");
    		$(".title").removeClass("active44");
    	}else if(index==3){
    		 $(".title1").removeClass("active44");
    		 $(".title1").toggleClass("active4");
    		 $(".img12").removeClass("active22");
             $(".img12").toggleClass("active2");
    		 $(".y-ain1").toggleClass("active3");
    	}else if(index==4){
    		 $(".img14").removeClass("active22");
             $(".img14").toggleClass("active2");
    		 $(".y-ain2").toggleClass("active3");
    		 $(".title2").removeClass("active44");
    		 $(".title2").toggleClass("active4");
    	}
    },
    onLeave:function(index,nextIndex,direction){
    	   if(index==1){
    	   	$(".img9").toggleClass("active11");
    		$(".img9").removeClass("active1");
            }else if(index==2){
    		$(".img10").removeClass("active2");
    		$(".img10").toggleClass("active22");
    		$(".y-ain").removeClass("active3");
    		$(".title").removeClass("active4");
    		$(".title").toggleClass("active44");
    	}else if(index==3){
    	    $(".title1").removeClass("active4");
    	    $(".title1").toggleClass("active44");
            $(".img12").removeClass("active2");
            $(".img12").toggleClass("active22");
    		$(".y-ain1").removeClass("active3");
    	}else if(index==4){
    		$(".img14").removeClass("active2");
    		$(".img14").toggleClass("active22");
    		$(".y-ain2").removeClass("active3");
    		$(".title2").removeClass("active4");
    		$(".title2").toggleClass("active44");
    	}
    }
    	
    })
    $('.updown').click(function(){  	
    		$.fn.fullpage.moveSectionDown()   
    })
    
    $('.nav-app').hover(function(){
    	$('.erweima').css({display:"block"})
    },function(){
    	$('.erweima').css({display:"none"})
    })
    
});
