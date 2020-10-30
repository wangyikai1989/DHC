// 打开购物车页面，展示购物车里的商品
showTbody();
function showTbody(){
    $.ajax({
        url:"../interface/showlist.php",
        success:function(res){
            if(res.code){
                var arr = res.data;
                if(res.data){
                    // 如果有商品，table显示，none隐藏
                    $('table').show();
                    $('.none').hide();
                    // 在table里面展示商品的信息
                    $('tbody').empty();
                    $('.allprice').empty();
                    $.each(arr,function(index,item){
                        $('tbody').append(`<tr id='${item.product_id}'>
                        <td>${item.product_id}</td>
                        <td>
                            <img src="${item.product_img}" alt="">
                        </td>
                        <td>￥${item.product_name}</td>
                        <td>25ml</td>
                        <td>${item.product_price}</td>
                        <td>
                            <span class="remove">-</span>
                            <b>${item.product_num}</b>
                            <span class="add">+</span>
                        </td>
                        <td class="delete">删除商品</td>
                    </tr>`);
                    })
                }
            }else{
                // 如果没有商品，table隐藏，none显示
                $('table').hide();
                $('.none').show();
            }
        },
        dataType:'json',
        cache:false
    })
}

// 点击+添加一个商品数量，点击-减少一个商品数量
$('tbody').click(function(e){
    var target = e.target;
    // target是一个dom节点
    if(target.className=='add'){
        // 点击+添加一个商品数量，点击-减少一个商品数量
        $.ajax({
            url:'../interface/updatewq.php',
            data:{
                type:target.className,
                id:$(target).parents('tr').attr('id')
            },
            success:function(res){
                if(res.code){
                    showTbody();
                    alert('添加一个商品成功');
                }
            },
            dataType:'json'
        })
    }else if(target.className=='remove'){
        // 点击+添加一个商品数量，点击-减少一个商品数量
        $.ajax({
            url:'../interface/updatewq.php',
            data:{
                type:target.className,
                id:$(target).parents('tr').attr('id')
            },
            success:function(res){
                if(res.code){
                    showTbody();
                    alert('删除一个商品成功');
                }
            },
            dataType:'json'
        })
    }else if(target.className=='delete'){
        // 点击删除删除一个商品
        $.ajax({
            url:'../interface/delwq.php',
            data:{
                id:$(target).parents('tr').attr('id')
            },
            success:function(res){
                if(res.code){
                    showTbody();
                    alert('删除该商品成功');
                }
            },
            dataType:'json'
        })
    }
})