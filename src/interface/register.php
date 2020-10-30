<?php
// 处理中文字符
header('content-type:text/html;charset=utf-8;');

$uname = $_POST['username']; //获取前端传来的用户名
$upass = $_POST['password']; //获取前端传来的密码
$reupass = $_POST['repassword']; //获取前端传来的确认密码


// 1. 与数据库进行连接
$conn = mysqli_connect('127.0.0.1','root','root','dhcuser');

// 2.数据库操作
$sql = "INSERT INTO `user` VALUES (null,'$uname','$upass')";

// 3.操作
$res = mysqli_query($conn,$sql);

// 4.断开连接
mysqli_close($conn);

if($res&&($reupass==$upass)){
    header('location:../pages/login.html');
}else{
    echo "错误";
}

?>