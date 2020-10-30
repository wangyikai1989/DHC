//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
    el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
    el: '.swiper-scrollbar',
    },

    //自动播放
    autoplay:true,

    // 点击小圆点换页
    pagination :{
        el: '.swiper-pagination',
        clickable :true,
    }
})  
//轮播图完    

//产品
$('.main2 li').on('mouseenter',function(){
    $('.main2 li').removeClass('shadow')
    $(this).addClass('shadow')
})
$('.main2 li').on('mouseleave',function(){
    $('.main2 li').removeClass('shadow')
})

//产品文字
//鼠标划上
$('.main2 li').on('mouseenter',function(){
    $(this).find("p").css({
        'background-color':'rgba(255,255,255,0.9)'
    })
    $(this).find('p').animate({
        'bottom':'0px'
    },100)
    $(this).find('p .off').css({
        'display':'block'
    })
    $(this).find('del').css({
        'display':'none'
    })
    $(this).find('p .shopcar').css({
        'display':'block'
    })
})

//鼠标划出
$('.main2 li').on('mouseleave',function(){
    $(this).find("p").css({
        'bottom':'-37px',
        'background-color':'rgba(255,255,255,1)'
    })
    $(this).find('p').animate({
        'bottom':'-37px'
    },100)
    $(this).find('p .off').css({
        'display':'none'
    })
    $(this).find('del').css({
        'display':'block'
    })
    $(this).find('p .shopcar').css({
        'display':'none'
    })
})

// 倒计时
function timeout(){
    var endTime = new Date('2021/1/7');
    setInterval(function(){
        var nowTime = new Date();
        var needTime = endTime - nowTime;
        var day = parseInt(needTime/1000/60/60/24);
        var hour = parseInt(needTime/1000/60/60%24);
        var minute = parseInt(needTime/1000/60%60);
        var second = parseInt(needTime/1000%60);
        $('.timeout').html('还有 '+day+'天 '+hour+'小时 '+minute+'分钟 '+second+'秒 促销活动结束')
    },1000)
}
timeout();