// 点击加入购物车，把商品加入购物车，并弹出加入购物车成功
$('.addcar').click(function(){
    $.ajax({
        url:'../interface/addwq.php',
        data:{
            id:$('.productid').text(),
            name:$('h3').text(),
            price:$('.productprice').text(),
            img:$('.workimg').attr('src'),
            num:$('.productnum').val()
        },
        success:function(res){
            if(res.code){
                alert('商品成功加入购物车')
            }
        },
        dataType:'json'
    })
})

// 点击查看购物车，进入购物车页面
$('.lookcar').click(function(){
    location.href="../pages/shopcar.html"
})

