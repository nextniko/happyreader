<template>
    <div>
        <my-header></my-header>
        <div class="loginbackgroundimage">
            <div class="logininterface">
                    <h3>注册</h3>
                    <input type="text" placeholder="用户名" class="logininput" id="yh"  v-model="username" v-focus>
                    <input type="password" placeholder="请输入6-18位的密码" class="logininput" id="mm"  v-model="userpwd">
                    <input type="password" placeholder="重复密码" class="logininput" id="cf" >
                    <input type="text" placeholder="输入邮箱" class="logininput" id="yx" v-model="useremail">
                    <input type="text" placeholder="输入手机号" class="logininput" id="sj" v-model="userphone">
                    <input type="checkbox" class="loginradio" id="ty" @click="clickbox()">我已阅读并同意 <span class="loginradiotiaokuan">《爱新觉罗觉醒条款》</span>
                    <a class="loginsubmit" :style="{display:none}" @click="looktiming()" >确认注册</a>
                    <p  class="loginsubmits" :style="{display:block}">确认注册</p>
                <div class="middle" :style="{display:zhuce}">{{resgisters}}</div>
            </div>
            <p class="resgisteryanzheng">
                {{unamelose}}
            </p>
            <p class="resgisteryanzheng1" > 
                {{upwdlose}}
            </p>
            <p class="resgisteryanzheng22">
                {{upwdtoo}}
            </p>
            <p class="resgisteryanzheng2" > 
                {{emaillose}}
            </p>
            <p class="resgisteryanzheng3" > 
                {{phonelose}}
            </p>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header.vue'
export default {
    data(){
        return{
            zhuce:"none",
            isresgister:true,
            none:"none",
            block:"block",
            username:"",
            userpwd:"",
            userpwdtoo:"",
            useremail:"",
            userphone:"",
            unamelose:"请输入用户名6-12位",
            upwdlose:"请输入6-18位为英文和数字组成的密码",
            upwdtoo:"请重复密码",
            emaillose:"请输入正确的邮箱",
            phonelose:"请输入有效手机号",
            resgisters:"",
        }
    },
    directives:{
        focus:{
            inserted:function(el){
                el.focus(function(){
                })
            }
        }
    },
    components:{
        MyHeader
    },
    methods:{
        clickbox(){
            if(this.isresgister==true && this.block=="block"){
                this.isresgister=false
                this.block ="none"
                this.none="block"
            }else{
                this.block="block"
                this.none="none"
                this.isresgister=true
            }
        },
        looktiming(){
            if(this.username==""){this.resgisters="用户名不能为空";this.zhuce="block"}
            else if(this.userpwd==""){this.resgisters="密码不能为空";this.zhuce="block"}
            else if(this.useremail==""){this.resgisters="邮箱不能为空";this.zhuce="block"}
            else if(this.userphone==""){this.resgisters="手机号不能为空";this.zhuce="block"}
            else if(this.unamelose=="用户已被注册"){this.resgisters="用户已被注册";this.zhuce="block"}
            else if(this.upwdlose=="请输入6-18位为英文和数字组成的密码"){this.resgisters="密码格式不对";this.zhuce="block"}
            else if(this.emaillose=="邮箱已被注册"){this.resgisters="邮箱已被注册";this.zhuce="block"}
            else if(this.phonelose=="手机号已被注册"){this.resgisters="手机号已被注册";this.zhuce="block"}
            else{
                this.zhuce="block";
                (async function(self){
                    var res =await self.$http.get("api/resgister/add",{
                        params:{
                            uname:self.username,
                            upwd:self.userpwd,
                            email:self.useremail,
                            phone:self.userphone
                        }
                        })
                    self.resgisters=res.data.msg
                })(this)
                var self =this
                setTimeout(function(){
                    self.$router.push("/login") 
                },500)
            }
        },

    },
    watch:{
        username(){
            if(this.username==""){
                this.unamelose="请输入用户名6-12位"
            }else if(this.username.length>=6 && this.username.length<=12){
                (async function(self){
                    var res =await self.$http.get("api/resgister/yhyz",{params:{uname:self.username}})
                    self.unamelose=res.data.msg
                })(this)
            }else{
                this.unamelose="请输入用户名6-12位"
            }
        },
        userpwd(){
            if(this.userpwd==""){
                this.upwdlose="请输入6-18位为英文和数字组成的密码"
            }else if(this.userpwd.length>=6 && this.userpwd.length<=12){
                this.upwdlose="密码可用"
            }else{
                this.upwdlose="请输入6-18位为英文和数字组成的密码"
            }
        },
        userpwdtoo(){
            if(this.userpwdtoo==""){
                this.upwdtoo="请重复密码"
            }else if(this.userpwd==this.userpwdtoo){
                this.upwdtoo="密码正确"
            }else if(this.userpwd!=this.userpwdtoo){
                this.upwdtoo="密码不正确"
            }else{
                this.upwdtoo="请重复密码"
            }
        },
        useremail(){
            var yx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if(this.useremail==""){
                this.emaillose="请输入正确的邮箱"
            }else if(yx.test(this.useremail)==true){
                (async function(self){
                    var res =await self.$http.get("api/resgister/yxyz",{params:{email:self.useremail}})
                    self.emaillose=res.data.msg
                })(this)
            }else{
                this.emaillose="请输入正确的邮箱"
            }
        },
        userphone(){
            var sj = /^1[34578]\d{9}$/
            if(this.userphone==""){
                this.phonelose="请输入有效手机号"
            }else if(sj.test(this.userphone)==true){
                (async function(self){
                    var res =await self.$http.get("api/resgister/sjyz",{params:{phone:self.userphone}})
                    self.phonelose=res.data.msg
                })(this)
            }else{
                this.phonelose="请输入有效手机号"
            }
        }
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
    position: absolute;
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
    background:url("../../public/img/login.png") no-repeat center top #fbc02d;
    width:100%;
    height:800px;
    padding-right: 16px;
    margin:8px 0 -8px -8px;
}
.loginbackgroundimage img{
    width:100%
}
.logininterface{
    position: absolute;
    top:50px;
    left:37%;
    width: 350px;
    height:550px;
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
    top:545px;
    left:40px;
    display: none;
}
.loginsubmits{
    position: absolute;
    height: 38px;
    line-height: 38px;
    color: white;
    text-align: center;
    width: 350px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    background-color: #ccc;
    border: 1px solid black;
    top:535px;
    left:40px;
}
.loginradio{
    border: 0;
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
.loginradiotiaokuan{
    color:#ccc;
    font-size:12px;
}
.resgisteryanzheng{
    width: 320px;
    text-align: center;
    border-radius: 15px;
    padding: 2px 0;
    background: #FBB814;
    position: absolute;
    top:135px;
    left:40%;
    font-size:10px;
}
.resgisteryanzheng1{
    width: 320px;
    text-align: center;
    border-radius: 15px;
    padding: 2px 0;
    background: #FBB814;
    position: absolute;
    top:200px;
    left:40%;
    font-size:10px;
}
.resgisteryanzheng22{
    width: 320px;
    text-align: center;
    border-radius: 15px;
    padding: 2px 0;
    background: #FBB814;
    position: absolute;
    top:275px;
    left:40%;
    font-size:10px;
}
.resgisteryanzheng2{
    width: 320px;
    text-align: center;
    border-radius: 15px;
    padding: 2px 0;
    background: #FBB814;
    position: absolute;
    top:345px;
    left:40%;
    font-size:10px;
}
.resgisteryanzheng3{
    width: 320px;
    border-radius: 15px;
    text-align: center;
    padding: 2px 0;
    background: #FBB814;
    position: absolute;
    top:411px;
    left:40%;
    font-size:10px;
}
.middle{
    position: absolute;
    top:450px;
    left:155px;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display: none;
}
.middletwo{
    position: absolute;
    top:450px;
    left:133px;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display:none;
}
.middlethree{
    position: absolute;
    top:450px;
    left:165px;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display:none;
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


