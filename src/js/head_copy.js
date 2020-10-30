//关注我们
$('.right1').hover(function(){
    $('.follow').css('display','block')
},function(){
    $('.follow').css('display','none')
})

//banner定格，文档布局一样
$(function(){
    //滚动条事件
    $(window).scroll(function(){
    //获取滚动条的滑动距离
    var scroH = $(this).scrollTop();
    //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
    if(scroH>=50){
        $(".banner").addClass('fixed')
        $(".hide").css({"display":"block"});
    }else if(scroH<50){
        $(".banner").removeClass('fixed')
        $(".hide").css({"display":"none"});
    }
})
})

// 二级菜单
$('.second').on('mouseenter',function(){
    $('.twice').slideDown().css({
        'display':'block'
    })
})
$('.banner').on('mouseleave',function(){
    $('.twice').css({
        'display':'none'
    })
})
$('.second').siblings('li').on('mouseenter',function(){
    $('.twice').css({
        'display':'none'
    })
})

// 返回顶部
$(function(){
    //滚动条事件
    $(window).scroll(function(){
    //获取滚动条的滑动距离
    var scroH = $(this).scrollTop();
    //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
    if(scroH>=200){
        $(".gotop").css({"display":"block"});
    }else if(scroH<100){
        $(".gotop").css({"display":"none"});
    }
})
})

$('.gotop').click(function(){
    $('html').animate({
        scrollTop:0
    },400)
})