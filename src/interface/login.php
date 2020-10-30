<?php

header('content-type:text/html;charset=utf-8;');

$uname = $_GET['username'];//获取前端传过来的用户名
$upass = $_GET['password'];//获取前端传来的密码

// 1.与数据库建立连接
$conn = mysqli_connect('127.0.0.1','root','root','dhcuser');

// 2.数据库操作
$sql = "SELECT * FROM `user` WHERE `uname`='$uname' AND `upass`='$upass'";

// 3.操作
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);

if(!$row){
    echo "用户名或密码错误";
}
?>