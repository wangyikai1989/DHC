$('#loginbtn').click(function(e){
    $.ajax({
        url:'../interface/login.php',
        data:{
        username:$('#uname').val(),
        password:$('#upass').val(),
        },
        type:'get',
        success:function(res){
            $.cookie($('#uname').val(), $('#upass').val(), { expires: 10 });
            location.href='./shopcar.html'
            }
    })
    return false;
})
