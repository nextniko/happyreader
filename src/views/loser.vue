<template>
    <div>
        <my-header></my-header>
        <div class="rankborn">
            <div class="dianjibang">
                <ul class="dianjibangul">
                    <li v-for="(item,index) in resxunhuan" :key="index">
                        <i class="dianjibangi dianjibangred">{{index+1}}</i>
                        <a href="javascript:;" @click="reader(item.title)" class="classdianjibanga">
                            <img :src="'/'+item.img" alt="">
                        </a>
                        <div class="dianjibangxiangqing">
                            <h3 class="xiangqingh3">
                                <a href="javascript:;" @click="reader(item.title)">{{item.title}}</a>
                            </h3>
                            <p>小说作者:{{item.author}}</p>
                            <p class="xiangqingtitle">{{item.intro}}</p>
                        </div>
                        <div class="dianjibangright">
                            <a href="javascript:;" @click="reader(item.title)" class="xiangqingbtn">点击阅读</a>
                        </div> 
                    </li>
                </ul>
                <ul class="dianjibangpage">
                    <li><a href="javascript:;" class="pagesizebtn" @click="ltmove()">&lt;&lt;</a></li>
                    <li><a href="javascript:;" class="pagesizebtn" :class="{dianjibangpagefast:page==1}">1</a></li>
                    <li v-for="(item,index) in reslist" :key="index" v-if="Math.ceil(item.id/10)>1 && Math.ceil(reslist[index+1].id/10)!=Math.ceil(reslist[index].id/10)"><a href="#" class="pagesizebtn" :class="{dianjibangpagefast:page==Math.ceil(item.id/10)}">{{Math.ceil(item.id/10)}}</a></li>
                    <li><a href="javascript:;" class="pagesizebtn" @click="gtmove()">&gt;&gt;</a></li>
                </ul>
            </div> 
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header.vue'
export default {
    data(){
        return {
            resxunhuan:[],
            reslist:[],
            page:sessionStorage["page"],
            pagesize:10,
        }
    },
    created(){
        (async function(self){
            var res = await self.$http.get("api/books/clickzhai",
                {
                    params:{
                        pagesize:self.pagesize,
                        page:self.page
                    }
                }
            )
            self.resxunhuan = res.data
        })(this),
        (async function(self){
            var res = await self.$http.get("api/books/zbooks")
            self.reslist = res.data
        })(this)
    },
    components:{
        MyHeader
    },
    mounted(){
        this.userchange()
    },
    methods:{
        ltmove(){
            sessionStorage.setItem("page",1)
            this.$router.go(0)
        },
        gtmove(){
            sessionStorage.setItem("page",2)
            this.$router.go(0)
        }
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.rankborn{
    width: 980px;
    margin:0 auto;
}
.ranklistul{
    list-style: none;
    padding-left:0;
}
.rankselect{
    float: left;
    margin:16px;
    margin-left:30px;
    margin-right:0;
    
}
.rankselectdiv{
    float: left;
    width: 278px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    box-shadow: 1px 1px 3px #dcdcdc;
}
.rankselectul,.rankselectulshoucang,.rankselectultuijian,.rankselectuldingyue{
    list-style: none;
    padding: 20px 20px 14px;
}
.rankselectul,.rankselectulshoucang.rankselectultuijian,.rankselectuldingyue li a{
    color:#212121;
}
.rankselectdianji{
    color: #212121;
    font-weight: bold;
    width:200px;
    height:34px;
    line-height:34px;
    font-size: 18px;
    text-align: center;
}
.top1{
    line-height: 40px;
    min-height: 118px;
    padding-bottom: 15px;
    position: relative;
    overflow: hidden;
    padding-right: 5px;
    border-bottom: 1px solid #eaeaea;
}
.info-top{
    display: block;
    width: 44px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background: #f44d4d;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 4px;
    vertical-align: baseline;
    font-style: normal;
}
.info-h3{
    width: 100%;
    font-size: 16px;
    white-space: normal;
}
.info-h3 a{
    color:black;
}
.info-h3 a:hover{
    color:#4acbff;
}
.top-author{
    display: inline-block;
    width: 80%;
    font-size: 12px;
}
.top-num span{
    position: relative;
    font-size: 16px;
    font-weight: bold;
    color: #f44d4d;
}
.rankimg{
    position: absolute;
    right: 4px;
    bottom: 25px;
    width: 78px;
    height: 106px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 0 #e5e5e5;
}
.rankimg img{
    width: 100%;
    height: 106px;
}
.rankselectul,.rankselectulshoucang,.rankselectultuijian,.rankselectuldingyue li{
    position: relative;
    font-size:12px;
    padding-right: 5px;
    border-bottom: 1px solid #eaeaea;
    line-height: 40px;
}
.top2{
    font-size:12px;
}
.top2-num{
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: bold;
    color: #666;
    text-align: center;
    line-height: 18px;
    background: #ededed;
    border-radius: 4px;
    vertical-align: baseline;
}
.top2 .top2-num{
    background: #4acbff;
    color: #212121;
}
.rankselectul b{
    margin: 0 6px 0 5px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
}
.rankselectulshoucang b{
    margin: 0 6px 0 5px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
}
.rankselectultuijian b{
    margin: 0 6px 0 5px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
}
.rankselectuldingyue b{
    margin: 0 6px 0 5px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
}
.top2-num2{
    position: absolute;
    right: 0;
    font-size: 12px;
    color: #4acbff;
}
.top2-font{
    color: #212121;
}
.top2-font:hover{
    color:#4acbff;
}
.dianjibang{
    width:880px;
}
.dianjibangul{
    list-style: none;
}
.dianjibangul li{
    padding: 20px;
    border-bottom: 1px solid #eaeaea;
    height: 174px;
}
.dianjibangi{
    float: left;
    position: relative;
    width: 60px;
    padding-right: 10px;
    font-size: 48px;
    color: #ccc;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    line-height: 160px;
    overflow: hidden;
}
.dianjibangred{
    color: #f44d4d;
}
.classdianjibanga{
    float: left;
    margin-left: 10px;
    position: relative;
    display: inline-block;
    width: 128px;
    height: 172px;
    border: 1px solid #ccc;
    -webkit-box-shadow: 3px 3px 0 #e5e5e5;
    -moz-box-shadow: 3px 3px 0 #e5e5e5;
    box-shadow: 3px 3px 0 #e5e5e5;
}
.classdianjibanga img{
    width: 128px;
    height: 172px;
}
.dianjibangxiangqing{
    float: left;
    width: 440px;
    margin-left: 20px;
    overflow: hidden;
}
.xiangqingh3{
    margin: 0;
    margin-bottom: 3px;
    font-size: 18px;
    color: #212121;
    font-weight: bold;
    line-height: 26px;
}
.xiangqingh3 a{
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    color: #000;
}
.dianjibangxiangqing p{
    font-size: 13px;
    color: #848484;
    line-height: 24px;
    overflow: hidden;
}
.dianjibangxiangqing .xiangqingtitle{
    height: 60px;
    margin-top: 12px;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    overflow: hidden;
}
.dianjibangright{
    float: right;
}
.xiangqingbtn{
    display: block;
    margin-bottom: 10px;
    color: #fff;
    background-color: #f44d4d;
    border: 1px solid #f44d4d;
    width: 118px;
    padding: 0 0;
    font-size: 14px;
    line-height: 38px;
    border-radius: 4px;
    text-align: center;
    margin-top:70px; 
}
.dianjibangpage{
    margin:6px;
    padding: 20px 0;
    text-align: center;
    background: #fff;
    list-style: none;
}
.dianjibangpage li{
    display: inline-block;
    margin: 0 2px;
    vertical-align: middle;
}
.dianjibangpage li a{
    display: block;
    width: 30px;
    height: 30px;
    font-size: 12px;
    color: #ccc;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.dianjibangpage li a:hover{
    background-color: #4acbff;
}
.dianjibangpagefast{
    background-color: #4acbff;
}
</style>
