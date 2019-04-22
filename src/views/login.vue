<template>
    <div>
        <my-header></my-header>
        <div class="loginbackgroundimage">
            <img src="img/login.png" alt="">
            <div class="logininterface">
                <form action="/login/select" method="get" target="iframe">
                    <h3>登录</h3>
                    <input type="text" placeholder="用户名" class="logininput" name="uname" id="yh" v-model="uname">
                    <input type="password" placeholder="密码" class="logininput" name="upwd" id="mm" v-model="upwd">
                    <button type="button" class="loginsubmit" @click="login()">登录</button>
                    <router-link class="loginradio" to="/resgister">记住密码</router-link>
                </form>
                <div class="middle">登录成功</div>
                <div class="middletwo">账号或密码错误</div>
                <iframe id="frame" name="iframe" style="display:none;"></iframe>
                <router-link class="aresgister" to="/resgister">注册</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header.vue'
import qs from 'qs'
export default {
    data(){
        return{
            uname:"",
            upwd:"",
            islogin:false
        }
    },
    components:{
        MyHeader
    },
    methods:{
        login(){
            var self = this;
            this.$http.post("api/login/signin",
            qs.stringify({uname:self.uname,upwd:self.upwd})
            ).then(res=>{
                if(res.data.ok==1){
                    sessionStorage.setItem("uname",self.uname)
                    document.getElementsByClassName("middletwo")[0].style="display:none"
                    document.getElementsByClassName("middle")[0].style="display:block"
                    setTimeout(function(){
                        self.$router.push("/")
                    },1000)
                }else{
                    document.getElementsByClassName("middle")[0].style="display:none";
                    document.getElementsByClassName("middletwo")[0].style="display:block"
                }
            })
        },
    }
}
</script>
<style scoped>
body{
    margin:0;
    padding:0;
}
.container{
    width: 1200px;
    margin:0 auto;
}
.clear{
    clear: both;
}
.overflow{
    float:left;
    position: absolute;
    left: 10px;
    height:22px;
    width:23px;
}
.kaitou{
    position: relative;
    width:1200px;
    height: 50px;
    line-height: 15px;
    margin:0 auto;
    padding: 0;
    color: #5a5a5a;
    border-bottom: 1px solid #e2e2e2;
}
.kaitoupic{
    float: right;
}
.left{
    float: left;
    list-style: none;
}
.right{
    float: right;
}
.right1{
    float: left;
    list-style: none;
}
.lizuotou{
    float:left;
}
.lizuo{
    float:left;
    width:85px;
}
.xiahuaxian{
    text-decoration: none;
    color:black;
}
.line{
    margin:0 10px;
    color:#c8c8c8;
    
}
.line2{
    margin:0 14px;
    color:#c8c8c8;
    
}
.header{
    background: url(../../public/img/header-bg-june-2018.jpg) no-repeat center top #000;
    min-width: 1190px;
    height: 230px;
    overflow: hidden;
}
.headerwidth{
    width:1200px;
    height:150px;
    margin:0 auto;
}
.headermenu{
    width:100%;
    height:80px;
    background: black;
    opacity: 0.8;

}
.headerdaohangyidong{
    position: fixed;
    top:0;
    left:0;
    z-index:1000;
}
.headerdaohang{
    position: relative;
    width:1200px;
    height:80px;
    margin:0 auto;
}
.headerinput{
        float: right;
        display: block;
        border: 1px solid #5D5D5D;
        border-radius: 17px; 
        color:#969696;
        background-color: #1e1e1e;
        margin-top:24px;
        padding-left:18px;
        padding-right:42px;
        width:245px;
        height:34px;
        line-height:34px;
        outline:none;
}
.headerbutton{
    float: right;
    position: absolute;
    left:1150px;
    border:0;
    background-color: black;
    margin-top:24px;
    width:50px;
    height:38px;
    cursor: pointer;
    background: url(../../public/img/header-btn-search.png) no-repeat center center;
}
.menuul{
    float: left;
    list-style: none;
    padding-left:0;
    padding-top:24px;
    margin:0;
}
.menuxiahua{
    text-decoration: none;
    color:white;
    font-size: 14px;
    display: block;
    width:78px;
    height:32px;
    line-height: 32px;
    text-align: center;
}
.menuyangshitou{
    text-decoration: none;
    color:#4acbff !important;
    border:1px solid #4acbff;
    font-size: 14px;
    display: block;
    width:78px;
    height:32px;
    line-height: 32px;
    text-align: center;
    border-radius: 2px;
}
.picsize{
    padding-top:20px;
}

.loginbackgroundimage{
    position: relative;
    background:url(../../public/img/login.png) no-repeat center top #fbc02d;
    width:102%;
    height:800px;
    margin:8px 0 -8px -8px;
}
.loginbackgroundimage img{
    width:100%
}
.logininterface{
    position: absolute;
    top:50px;
    left:700px;
    width: 350px;
    height:450px;
    padding: 35px 40px;
    font-size: 14px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
.logininterface h3{
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: bold;
    color: #000;
    text-align: center;
    line-height: 1;
}
.logininput{
    width: 328px;
    height: 38px;
    margin-bottom: 30px;
    padding: 0 10px 0 10px;
    line-height: 38px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;

}
.loginsubmit{
    position: absolute;
    height: 38px;
    line-height: 38px;
    color: #333;
    text-align: center;
    width: 350px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    background-color: #fbc02d;
    border: 1px solid #fbc02d;
    top:330px;
    left:40px;
}
.loginradio{
    color:#fbc02d ;
    text-decoration: none;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.loginradio{
    margin-top:40px;
}
.aresgister{
    position: absolute;
    top:430px;
    left:201px;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    color: #f78700;
}
.middle{
    position: absolute;
    top:250px;
    left:166px;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display: none;
    transition:all .5s linear;
}
.middletwo{
    position: absolute;
    top:250px;
    left:146px;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display: none;
    transition:all .5s linear;
}
.xiahuaxian:hover{
    color:red !important;
}
input:focus{
    border:1px solid #4bcaff !important;
}
.menuxiahua:hover{
    color:#4acbff;
    border:1px solid #4acbff;
    border-radius: 2px;
}
.headerbutton:hover{
    width: 50px;
    height: 38px;
    background:  #4bcaff url(../../public/img/header-btn-search.png) no-repeat center center;
    padding: 0 10px;
    border-radius: 0 4px 4px 0;
    transition: all .5s linear;
    vertical-align: middle;
}
.end:hover{
    color:red !important;
}
.all:hover{
    color:red !important;
}
.booker-zi:hover{
    color:red !important;
}

.sub-titcontentonemiddle:hover{
    color:red  !important;
}
.sub-titcontenttwofont:hover{
    color:red  !important;
    opacity: 0.7;
}
.sub-titcontentthreefont:hover{
    color:red  !important;
    opacity: 0.4;
}
.sub-titcontentallfont:hover{
    color:red  !important;
}
.urlstyle:hover{
    color:red !important;
}
.loginsubmit:hover{
    opacity: 0.9;
}
</style>

