<template>
    <div>
        <header>
            <div class="kaitou"> 
                <ul class="left Amsa">
                    <li class="lizuotou overflow userout"><a href="#" class=""><img src="/img/icon-login-info.png" alt="" ></a></li>
                    <li class="lizuotou userout" ><router-link class="xiahuaxian ziti-12" to="/login">登录</router-link></li>
                    <li class="lizuotou line userout">|</li>
                    <li class="lizuotou userout"><router-link  class="xiahuaxian ziti-12" to="/resgister">注册</router-link></li>
                    <li class="lizuotou userlogin"><a href="#" class="xiahuaxian ziti-12">欢迎回来,{{uname}}</a></li>
                    <li class="lizuotou line userlogin">|</li>
                    <li class="lizuotou userlogin"><a href="javacript:;" class="xiahuaxian ziti-12" @click="changer1(),signout()">【退出】</a></li>
                </ul>
                <div class="right">
                    <ul class="right1">
                        <li class="lizuotou"><a href="#" class="xiahuaxian ziti-12">充值中心</a></li>
                        <li class="lizuotou line2">|</li>
                        <li class="lizuotou"><a href="#" class="xiahuaxian ziti-12">作者后台</a></li>
                        <li class="lizuotou line2">|</li>
                    </ul> 
                    <a href="#" class="kaitoupic"><img src="/img/app-download.png" alt=""></a>
                </div>
            </div>
            <div class="header">
                <div class="headerwidth">
                    <div class="picsize">
                        <img src="/img/logo.png" alt="">
                        <p class="picziti">互动文学领导者，让阅读和创作不再寂寞。</p>
                    </div>
                </div>
                <div class="headermenu">
                    <div class="headerdaohang">
                        <ul class="menuul">
                            <li class="lizuo" @click="changer1()"><router-link :class="{menuyangshitou:this.addclass==1}" class="menuxiahua" to="/">首页</router-link></li>
                            <li class="lizuo" @click="changer2()"><router-link :class="{menuyangshitou:this.addclass==2}" class="menuxiahua" to="/rank" >排行</router-link></li>
                            <li class="lizuo" @click="changer3()"><router-link :class="{menuyangshitou:this.addclass==3}" class="menuxiahua" to="/loser">宅文</router-link></li>
                            <li class="lizuo" @click="changer4()"><router-link :class="{menuyangshitou:this.addclass==4}" class="menuxiahua" to="/colleagues">同人</router-link></li>
                            <li class="lizuo" @click="changer5()"><router-link :class="{menuyangshitou:this.addclass==5}" class="menuxiahua" to="/girl">女生</router-link></li>
                            <li class="lizuo" @click="changer6()"><router-link :class="{menuyangshitou:this.addclass==6}" class="menuxiahua" to="/boy">男生</router-link></li>
                            <li class="lizuo" @click="changer7()"><router-link :class="{menuyangshitou:this.addclass==7}" class="menuxiahua" to="/room">书库</router-link></li>
                        </ul>
                        <input type="text" placeholder="搜素更多作者或作品" class="headerinput" v-model="text">
                        <a href="javascript:;" placeholder="搜索" class="headerbutton" @click="selecting()"></a>
                        <ul class="menuulselect" :style="{display:menuselect}">
                            <li v-for="(item,index) in select" :key="index"><a href="#" class="aselect" @click="goup(item.title)">{{item.title}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name:"my-header",
    data(){
        return {
            uname:"",
            islogin:false,
            menuselect:"none",
            text:"",
            select:[],
        }
    },
    mounted(){
        this.userchange()
    },
    methods:{
        goup(title){
            this.text = title
        },
        selecting(){
            this.$router.push("/reader/"+this.text)
        },
        signout(){
            sessionStorage.removeItem("uname")
            this.userchange()
            this.$router.push("/")
        },
        changer1(){
            this.change(1)
        },
        changer2(){
            this.change(2)
        },
        changer3(){
            this.change(3)
        },
        changer4(){
            this.change(4)
        },
        changer5(){
            this.change(5)
        },
        changer6(){
            this.change(6)
        },
        changer7(){
            this.change(7)
        },
    },
    watch:{
        text(){
            if(this.text==""){
                return
            }else{
                (async function(self){
                    var res = await self.$http.get("api/books/listselect",{params:{text:self.text}
                    })
                    self.select = res.data
                })(this)
                this.menuselect="block"
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
header{
    margin:-8px;
    min-width: 1200px;
}
.container{
    width: 100%;
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
    min-width:1200px;
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
    min-width: 100%;
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
.menuul{
    float: left;
    list-style: none;
    padding-left:0;
    padding-top:24px;
    margin:0;
}
.menuulselect{
    position: fixed;
    left:1565px;
    top:265px;
    float: left;
    list-style: none;
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
.aselect{
    width:240px;
    height:30px;
    font-size:10px;
    background: black;
    opacity: 0.6;
    text-decoration: none;
    color:white;
    display: block;
    line-height: 32px;
    padding-left: 20px;
    border-radius: 5px;
}
.aselect:hover{
    background: #4acbff;
    color:black;
    opacity: 0.7;
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
/*�ֲ�ͼ*/
.circular{
    
}
.circular-r{
    background-color: red !important;
}
.circular-first{
    background-color: red !important;
}
.my_lunbo{
    position:relative;
    margin-top:27px;
    width:465px;
    height:200px;
    float:left;
    overflow:hidden;
}
.my_lunbozuofloat{
    width:10000px;
    padding:0;
    margin:0;
    list-style: none;
    float:left;
    position:absolute;
    top:0;
    left:0;
    transition:all 1s linear;
}
.qigeyuanbox{
    height: 30px;
    opacity: .7;
    background: #000;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    padding-right:5px;
}
.qigeyuan{
    margin-right:10px;
}
.qigeyuanbox span{
    display:block;
    width:8px;
    height:8px;
    margin-left:3px;
    margin-right:3px;
    margin-top:15px;
    border-radius: 50%;
    background: none 0 0 repeat scroll #fff;
    border: 1px solid #e2e2e2;
    float: right;
    cursor: pointer;
    line-height:8px;
}
.my_pics{
    float: left;
}
.lunbozhong{
    float:left;
    width:454px;
    height:200px;
    margin-top:27px;
    margin-left:21px;
}

.lunboyou{
    float:left;
    width:250px;
    height:200px;
    margin-top:27px;
    margin-left:10px;
}
.fuli{
    margin-bottom:17px;
}
.my_lunbozhong{
    float: left;
    padding:0;
    margin-top:0;
    list-style: none;

}
.my_lunbofloat{
    position:relative;
    float:left;
    margin-right:21px;
}
.mousepic{
    display: block;
    height:90px;
    background: black;
    
}
.textposition{
    position: absolute;
    top:10px;
    left:10px;
    padding-right:10px;
    color:white;
    margin:0;
    display: none;
    font-size:10px;
    line-height:1.2;
}
.textsmallposition{
    position: absolute;
    top:70px;
    left:10px;
    color:yellow;
    margin:0;
    display: none;
    font-size:10px;
}
.my_lunbofloatbottom{
    position: relative;
    float:left;
    margin-top:17px;
    margin-right:21px;
}
/*�ֲ���*/
/*լ��*/
.zhawentuijian{
    float:left;
    width:920px;
    height:81px;
    margin-top:55px;
    position: relative;
}
.tuijian{
    width:196px;
    height:51px;
    border:2px solid #4acbff;
    border-radius:25px;
    margin:0 auto;
    text-align: center;
    line-height:51px;
    color:#4acbff;
    background: white;
}
.tuijianline{
    float:left;
    position: relative;
    z-index: -1;
    top: -26px;
    left: 0;
    width: 100%;
    display: block;
    border-bottom: 1px dotted #c8c8c8;
}
.all{
    font-size: 14px;
    position: absolute;
    top: 8px;
    right: 0;
    color: #969696;
    text-decoration: none;
}
.spanfont{
    display:block;
    font-size:20px;
    text-align: center;
}
/*լ�������ֲ�ͼ*/
.my_heightmove{
    position:relative;
    float: left;
    width:920px;
    height:110px;
    padding-right:0px;
    overflow:hidden;
    margin-top:50px;
}
.heightmove{
    position: absolute;
    top:0;
    left:0;
    height:10000px;
    padding:0;
    transition:all 1s linear;
}
.heightmove a{
    padding:0;
    margin:0;
    display:block;
}
/*լ��*/
.bosstuijian{
    width:258px;
    height:51px;
    border:2px solid #4acbff;
    border-radius:25px;
    margin:0 auto;
    text-align: center;
    line-height:51px;
    color:#4acbff;
    background: white;
}
/* 右边栏 */
.rightlan{
    width:250px;
    height:88px;
    margin:0;
    text-align: center;
    line-height: 88px;
    margin-top:30px;
}
.tit{
    padding-bottom: 22px;
    border-bottom: 1px dotted ;
    margin-top:22px;
    height:441px;
    width:250px;
}
.sub-tit{
    font-size: 14px;
    color: #969696;
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    margin-bottom: 10px;
}
.sub-tit i{
    display: inline-block;
    background: #4acbff;
    line-height: 14px;
    padding: 2px 4px;
    font-size: 14px;
    font-family: "MV Boli";
    color: #fff;
    border-radius: 4px;
}
.sub-titcontent{
    list-style: none;
    padding:0;
}
.sub-titcontent-z{
    list-style: none;
    padding:0;
}
.sub-titcontent-t{
    list-style: none;
    padding:0;
}
.sub-titcontent-n{
    list-style: none;
    padding:0;
}
.sub-titcontent-nv{
    list-style: none;
    padding:0;
}
.sub-titcontent-b{
    list-style: none;
    padding:0;
}
.sub-titcontentone{
    position: relative;
    padding-right: 5px;
    
    background-color:#fafafa;
    width:250px;
    height:106px; 
}
.sub-titcontenttwo{
    position: relative;
    height:26px; 
    font-size:10px;
    padding-top:13px;
}
.sub-titcontentthree{
    position: relative;
    height:26px; 
    font-size:10px;
}
.sub-titcontentall{
    position: relative;
    width:250px;
    height:26px; 
    font-size:10px;
}
.sub-titcontentonemiddle{
    position: absolute;
    font-size:10px;
    color:black;
    top:20px;
    left:80px;
}
.sub-titcontentonemiddletwo{
    position: absolute;
    top:45px;
    left:85px;
    font-size:10px;
    color:#969696;
}
.sub-titcontentonemiddlethree{
    font-size:10px;
    color:red;
    position: absolute;
    right:10px;
    bottom:3px;
}
.sub-titcontenttwofont{
    color:black;
}
.sub-titcontenttwofonter{
    float:right;
    color:red;
    opacity: 0.7;
    margin-right:4px;
}
.sub-titcontentthreefont{
    color:black;
}
.sub-titcontentthreefonter{
    float:right;
    color:red;
    opacity: 0.4;
    margin-right:4px;
}
.sub-titcontentallfont{
    color:black;
}
.sub-titcontentallfonter{
    float:right;
    color:black;
    margin-right:4px;
}
.sub-titcontent img{
    width:80px;
    height:106px;
}
.sub-titcontentone i{
    position: absolute;
    top:10px;
    left:85px;
    background: #ed5565!important;
    display: inline-block;
    width: 18px;
    padding: 0 4px;
    margin-right: 2px;
    height: 15px;
    font-size: 14px;
    font-family: "MV Boli";
    text-align: right;
    line-height: 15px;
    color: #fff;
    border-radius: 4px;
    font-style: normal;
}
.sub-titcontenttwo i{
    background: #ed5565!important;
    display: inline-block;
    width: 18px;
    padding: 0 4px;
    margin-right: 2px;
    height: 15px;
    font-size: 14px;
    font-family: "MV Boli";
    text-align: right;
    line-height: 15px;
    color: #fff;
    border-radius: 4px;
    font-style: normal;
    opacity: 0.7;
}
.sub-titcontentthree i{
    background: #ed5565!important;
    display: inline-block;
    width: 18px;
    padding: 0 4px;
    margin-right: 2px;
    height: 15px;
    font-size: 14px;
    font-family: "MV Boli";
    text-align: right;
    line-height: 15px;
    color: #fff;
    border-radius: 4px;
    font-style: normal;
    opacity: 0.4;
}
.sub-titcontentall i{
    background: #b4b4b4!important;
    display: inline-block;
    width: 18px;
    padding: 0 4px;
    margin-right: 2px;
    height: 15px;
    font-size: 14px;
    font-family: "MV Boli";
    text-align: right;
    line-height: 15px;
    color: #fff;
    border-radius: 4px;
    font-style: normal;
}
.sub-titcontenta{
    display: block;
    text-decoration: none;
}
.zhawentuijian h3 i{
    display: inline-block;
    width: 8px;
    height: 22px;
    background: #4fc1e9;
    vertical-align: top;
    margin-right: 15px;
}
.zhawentuijian h3{
    position: absolute;
    top:-25px;
}
.end{
    font-size: 14px;
    color: #969696;
    text-decoration: none;
    float: right;

}
.endline{
    float:left;
    width: 100%;
    display: block;
    border-bottom: 1px dotted #c8c8c8;
}
.booker{
    width:950px;
    height:765px;
    float:left;
}
.booker-sex{
    width:950px;
    height:510px;
}
.book-boss{
    width:950px;
    height:255px;
}
.booker-ul{
    float: left;
    list-style: none;
    margin:0;
    padding: 0;
}
.books-img{
    width:20px;
    height:20px;
    background: black;
    border-radius: 50%;
    margin-right:15px;
}
.booker-ul-z{
    float: left;
    list-style: none;
    margin:0;
    padding: 0;
}
.booker-ul-t{
    float: left;
    list-style: none;
    margin:0;
    padding: 0;
}
.booker-ul-n{
    float: left;
    list-style: none;
    margin:0;
    padding: 0;
    overflow: hidden;
}
.booker-ul-nv{
    float: left;
    list-style: none;
    margin:0;
    padding: 0;
}
.booker-ul-b{
    float: left;
    list-style: none;
    margin:0;
    padding: 0;
}
.booker-li{
    position: relative;
    float: left;
    margin-right: 28px;
    margin-top: 30px;
}
.booker-down{
    display: block;
    width:126px;
    height:51px;
    text-decoration: none;
}
.booker-zi{
    float: left;
    color:black;
    font-size:12px;
    margin-top:0;
    margin-bottom: 5px;
    text-align: center;
    width:126px;
}
.booker-zixia{
    color:#969696;;
    font-size:5px;
    margin-top:5px;
    margin-bottom:0;
    text-align: center;
}
.mousepics{
    display: block;
    height:178px;
    background: black;
    
}
.textpositions{
    position: absolute;
    top:50px;
    left:10px;
    padding-right:10px;
    color:white;
    margin:0;
    display: none;
    font-size:10px;
    line-height:1.2;
}
.textsmallpositions{
    position: absolute;
    bottom:70px;
    left:10px;
    color:yellow;
    margin:0;
    display: none;
    font-size:10px;
}
.textpositions-title{
    position: absolute;
    top:10px;
    left:10px;
    padding-right:10px;
    color:white;
    margin:0;
    display: none;
    font-size:10px;
}
.row{
    width:950px;
    display: block;
}
.tablerow{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.tablestyle{
    border: 1px solid #dcdcdc;
    margin-top: 30px;
    border-collapse: collapse;
    border-spacing: 0;
    width:920px;
}
tr{
    border-bottom:1px dotted #c8c8c8;

}
td{
    text-align:center;
    height:38px;
}
td>p{
    margin-top:0;
    margin-bottom:0;
    font-size:14px;
}
th{
    height:39px;
}
th, td {
    font-weight: 400;
    font-style: normal;
    display: table-cell;
}
.tablestyle th span {
    border-right: 1px solid #dcdcdc;
    display: block;
}
.fontcolor{
    color:#969696;
}
.urlstyle{
    text-decoration: none;
    color:black;
}
.vipstyle{
    color: #ed5565;
    margin-left: 5px;
    font-style: normal;
}
.gehangbianse{
    background-color:#fafafa; 
}
.readerbox{
    position: relative;
    box-sizing: border-box;
    width:1200px;
    height:560px;
    margin-top:50px;
    background: #fafafa;
    box-shadow: 1px 1px 3px #dcdcdc;
    padding:20px;
}
.readerboxpic{
    
    width: 178px;
    height: 248px;
}
.readerboxpic img{
    border: 0 none;
    vertical-align: baseline;
    box-shadow: 1px 1px 3px #dcdcdc;
}
.readerboxfont{
    position: absolute;
    top:20px;
    left: 350px;
    height:248px;
    width:700px;
}
.readerboxfonta {
    color: #119fd1;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
}
.readerboxfont span{
    margin-left: 15px;
    font-size: 14px;
    color: #aaa;
    font-weight: normal;
}
.readerboxlianzai{
    margin-top: 12px;
    color: #fbc02d;
    font-weight: bold;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.readerboxshuju{
    padding-top:115px;
    color: #828282;
}
.readerboxshuju b{
    margin-right: 12px;
    font-size: 18px;
    color: #f44d4d;
    font-weight: bold;
    font-style: italic;
}
.readerboxreader{
    position: absolute;
    top:20px;
    right:10px;
}
.readerboxread{
    display: block;
    color: #fff !important;
    background-color: #f44d4d;
    border: 1px solid #f44d4d;
    margin-top: 20px;
    width: 118px;
    height:38px;
    padding: 0 0;
    font-size: 14px;
    line-height: 38px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
}
.readerboxbook{
    display: block;
    margin-top: 20px;
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 118px;
    height: 38px;
    padding: 0 0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
}
.readerboxauther{
    width:980px;
    height:73px;
}
.readerboxauthertext{
    float: left;
    list-style: none;
    border-bottom: 1px solid white;
}
.readerboxauthertextstyle{
    float: left;
    margin-right:30px;
    margin-top:20px;
    padding:0;
}
.readerboxauthertextstyleone{
    color:black !important;
}
.readerboxauthertextstyle a{
    color: #666;
    font-weight: bold;
    display: block;
    max-width: 210px;
    height: 20px;
    padding: 0 32px;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-decoration: none;
} 
.readerboxauthercontent{
    position: absolute;
    background: white;
    width:1150px;
    height:150px;
    overflow: hidden;
    font-size: 14px;
    line-height: 26px;
}
.scrollbarstyle{
    overflow: scroll;
}
::-webkit-scrollbar{
    height:0px;
    width:5px;
}
/*.readerboxauthercontent::-webkit-scrollbar-track{
}*/
::-webkit-scrollbar-thumb{
    background-color:#ccc;
    border-radius:3px
}
/*.readerboxauthercontent::-webkit-scrollbar-button{}*/
/*.readerboxauthercontent::-webkit-scrollbar-corner{}*/
.readerboxauthercontentnext{
    position: absolute;
    background: white;
    width:1150px;
    height:150px;
    overflow: hidden;
    font-size: 14px;
    line-height: 26px;
    display: none;
}
.pulldown{
    position: absolute;
    top:0px;
    left:1145px;
    width: 5px;
    height:80px;
    background:#ccc ;
    border-radius: 3px;

}
.warninger{
    position: absolute;
    top:520px;
    font-size: 12px;
    color: #969696;
    height: 34px;
    line-height: 34px;
}
.readerbooks{
    width:1200px;
    height:700px;
}
.readerbookssection{
    height: 48px;
    line-height: 40px;
    font-size: 24px;
    color: #212121;
    font-weight: bold;
    text-align: center;
}
.readerbookssectionall h4{
    height: 60px;
    padding: 0 20px;
    font-size: 16px;
    color: #212121;
    font-weight: bold;
    line-height: 60px;
    background: #fff;
}
.sectionall{
    display: block;
    float: left;
    list-style:none;
    height:160px;
    width:1200px;
    text-align: center;
    padding-left:0;
    margin-bottom:0;
    box-shadow: 1px 1px 3px #dcdcdc;
    background: #fafafa;
    overflow: hidden;
}
.sectionall li{
    float: left;
    width: 400px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
}
.sectionall li:nth-child(odd){
    background: white !important;
}
.sectionall a{
    text-decoration: none;
    color: #333;
    font-weight:200;
    font-size:16px;
}
.sectionallhidden{
    display: none;
    float: left;
    list-style:none;
    width:1200px;
    text-align: center;
    padding-left:0;
    margin-top:0;
    box-shadow: 3px 3px  #dcdcdc;
    background: #fafafa;
}
.sectionallhidden li{
    float: left;
    width: 400px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
}
.sectionallhidden li:nth-child(odd){
    background: white !important;
}
.sectionallhidden a{
    text-decoration: none;
    color: #333;
    font-weight:200;
    font-size:16px;
}
.readerboxauthercontentnext span{
    float: left;
    width: 250px;
    height: 26px;
    font-size: 14px;
    color: #aaa;
    line-height: 26px;
    overflow: hidden;
    margin-left:20px;
}
.readerboxauthercontentnext i{
    color: #666;
    font-style: normal;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.color{
    color:#fbc02d !important;
}
.sectionallclick{
    display: block;
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #f78700;
    line-height: 40px;
    text-align: center;
    background: #fff;
    border-top: 1px solid #eaeaea;
    text-decoration: none;
}
.sectionsomeclick{
    display: none;
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #f78700;
    line-height: 40px;
    text-align: center;
    background: #fff;
    text-decoration: none;
}
.nomore{
    display: block;
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #aaa;
    line-height: 40px;
    text-align: center;
    background: #fff;
    border-top: 1px solid #eaeaea;
    text-decoration: none;
}
.ziti-12{
    font:12px/1.5 'Microsoft Yahei',tahoma,arial,\5b8b\4f53,sans-serif;
}
.picziti{
    color:white;
    text-shadow: 0 0 4px #000;
}
.tit{
    font-size: 20px;
    height: 30px;
    overflow: hidden;
}
.xiahuaxian:hover{
    color:red !important;
}
input:focus{
    border:1px solid #4bcaff !important;
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
.menuxiahua:hover{
    color:#4acbff;
    border:1px solid #4acbff;
    border-radius: 2px;
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
.mousepic:hover .textposition{
    display: block;
    transition: all .3s linear;
}
.mousepic:hover .textsmallposition{
    display: block;
    transition: all .3s linear;
}
.mousepic:hover img{
    opacity: 0.2;
    transition: all .3s linear;
}
.mousepics:hover .textpositions{
    display: block;
    transition: all .3s linear;
}
.mousepics:hover .textsmallpositions{
    display: block;
    transition: all .3s linear;
}
.mousepics:hover .textpositions-title{
    display: block;
    transition: all .3s linear;
}
.mousepics:hover .books-bimg{
    opacity: 0.2;
    transition: all .3s linear;
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
.footersize ul li a:hover{
    color:white !important;
}
.readerboxread:hover{
    background:#f33535 !important;
}
.readerboxbook:hover{
    background:#f2f2f2 !important;
}
.readerboxauthertextstyle a:hover{
    color:black !important;
}
.sectionall a:hover{
    color:#fbc02d;
}
.sectionallhidden a:hover{
    color:#fbc02d;
}
</style>


