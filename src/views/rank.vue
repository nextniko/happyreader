<template>
    <div>
        <my-header></my-header>
        <div class="rankbody">
        <div class="ranklist">
            <ul class="ranklistul">
                <li><span :class="{ranklistullifast:rank==1}" class="ranklistulli" @click="paihangbang()">小说排行榜</span></li>
                <li><span :class="{ranklistullifast:rank==2}" class="ranklistulli" @click="dianjibang()">点击榜</span></li>
                <li><span :class="{ranklistullifast:rank==3}" class="ranklistulli" @click="shoucangbang()">收藏榜</span></li>
                <li><span :class="{ranklistullifast:rank==4}" class="ranklistulli" @click="tuijianbang()">推荐榜</span></li>
                <li><span :class="{ranklistullifast:rank==5}" class="ranklistulli" @click="dingyuebang()">订阅榜</span></li>
                <li><span class="ranklistulli">月票榜</span></li>
            </ul>
        </div>
        <div class="rankborn">
            <div class="xiaoshuopaihangbang" :style="{display:paihangbanglook}">
                <div class="rankselect">
                    <div class="rankselectdiv">
                        <div class="rankselectdianji">点击榜</div>
                        <ul class="rankselectul">
                            <li class="top1">
                                <div class="info">
                                    <i class="info-top">NO.1</i>
                                    <h3 class="info-h3">
                                        <a href="javascript:;" @click="reader(resd[0].title)">{{resd[0].title}}</a>
                                    </h3>
                                    <p class="top-author">{{resd[0].author}}</p>
                                    <p class="top-num"><span>{{resd[0].reader}}</span></p>
                                </div>
                                <a href="#" class="rankimg"><img :src="'/'+resd[0].img" alt=""></a>
                            </li>
                            <li class="top2">
                                <a href="javascript:;"  @click="reader(resd[1].title)"> 
                                    <i class="top2-num">2</i> 
                                    <b>[{{resd[1].classify}}]</b>
                                    <span class="top2-font">{{resd[1].title | textlength(8)}}</span>
                                    <span class="top2-num2">{{resd[1].reader | textcount()}}</span>
                                </a>
                            </li>
                            <li v-for="(item,index) in resd" :key="index" v-if="index<11 && index>2">
                                <a href="javascript:;"  @click="reader(item.title)"> 
                                    <i class="top2-num">{{index}}</i> 
                                    <b>[{{item.classify}}]</b>
                                    <span class="top2-font">{{item.title | textlength(8)}}</span>
                                    <span class="top2-num2">{{item.reader | textcount()}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rankselect">
                    <div class="rankselectdiv">
                        <div class="rankselectdianji">收藏榜</div>
                        <ul class="rankselectulshoucang">
                            <li class="top1">
                                <div class="info">
                                    <i class="info-top">NO.1</i>
                                    <h3 class="info-h3">
                                        <a href="javascript:;" @click="reader(ress[0].title)">{{ress[0].title}}</a>
                                    </h3>
                                    <p class="top-author">{{ress[0].author}}</p>
                                    <p class="top-num"><span>{{ress[0].reader}}</span></p>
                                </div>
                                <a href="#" class="rankimg"><img :src="'/'+ress[0].img" alt=""></a>
                            </li>
                            <li class="top2">
                                <a href="javascript:;"  @click="reader(ress[1].title)"> 
                                    <i class="top2-num">2</i> 
                                    <b>[{{ress[1].classify}}]</b>
                                    <span class="top2-font">{{ress[1].title | textlength(8)}}</span>
                                    <span class="top2-num2">{{ress[1].reader | textcount()}}</span>
                                </a>
                            </li>
                            <li v-for="(item,index) in ress" :key="index" v-if="index<11 && index>2">
                                <a href="javascript:;"  @click="reader(item.title)"> 
                                    <i class="top2-num">{{index}}</i> 
                                    <b>[{{item.classify}}]</b>
                                    <span class="top2-font">{{item.title | textlength(8)}}</span>
                                    <span class="top2-num2">{{item.reader | textcount()}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rankselect">
                    <div class="rankselectdiv">
                        <div class="rankselectdianji">推荐榜</div>
                        <ul class="rankselectultuijian">
                            <li class="top1">
                                <div class="info">
                                    <i class="info-top">NO.1</i>
                                    <h3 class="info-h3">
                                        <a href="javascript:;" @click="reader(rest[0].title)">{{rest[0].title}}</a>
                                    </h3>
                                    <p class="top-author">{{rest[0].author}}</p>
                                    <p class="top-num"><span>{{rest[0].reader}}</span></p>
                                </div>
                                <a href="#" class="rankimg"><img :src="'/'+rest[0].img" alt=""></a>
                            </li>
                            <li class="top2">
                                <a href="javascript:;"  @click="reader(rest[1].title)"> 
                                    <i class="top2-num">2</i> 
                                    <b>[{{rest[1].classify}}]</b>
                                    <span class="top2-font">{{rest[1].title | textlength(8)}}</span>
                                    <span class="top2-num2">{{rest[1].reader | textcount()}}</span>
                                </a>
                            </li>
                            <li v-for="(item,index) in rest" :key="index" v-if="index<11 && index>2">
                                <a href="javascript:;"  @click="reader(item.title)"> 
                                    <i class="top2-num">{{index}}</i> 
                                    <b>[{{item.classify}}]</b>
                                    <span class="top2-font">{{item.title | textlength(8)}}</span>
                                    <span class="top2-num2">{{item.reader | textcount()}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rankselect">
                    <div class="rankselectdiv">
                        <div class="rankselectdianji">订阅榜</div>
                        <ul class="rankselectuldingyue">
                            <li class="top1">
                                <div class="info">
                                    <i class="info-top">NO.1</i>
                                    <h3 class="info-h3">
                                        <a href="javascript:;" @click="reader(resy[0].title)">{{resy[0].title}}</a>
                                    </h3>
                                    <p class="top-author">{{resy[0].author}}</p>
                                    <p class="top-num"><span>{{resy[0].reader}}</span></p>
                                </div>
                                <a href="#" class="rankimg"><img :src="'/'+resy[0].img" alt=""></a>
                            </li>
                            <li class="top2">
                                <a href="javascript:;"  @click="reader(resy[1].title)"> 
                                    <i class="top2-num">2</i> 
                                    <b>[{{resy[1].classify}}]</b>
                                    <span class="top2-font">{{resy[1].title | textlength(8)}}</span>
                                    <span class="top2-num2">{{resy[1].reader}}</span>
                                </a>
                            </li>
                            <li v-for="(item,index) in resy" :key="index" v-if="index<11 && index>2">
                                <a href="javascript:;"  @click="reader(item.title)"> 
                                    <i class="top2-num">{{index}}</i> 
                                    <b>[{{item.classify}}]</b>
                                    <span class="top2-font">{{item.title | textlength(8)}}</span>
                                    <span class="top2-num2">{{item.reader | textcount()}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="dianjibang" :style="{display:dianjibanglook}">
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
        <div class="clear"></div>
    </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header.vue'
export default {
    data(){
        return{
            resd:[
                {title:""},
                {title:""}
            ],
            ress:[
                {title:""},
                {title:""}
            ],
            rest:[
                {title:""},
                {title:""}
            ],
            resy:[
                {title:""},
                {title:""}
            ],
            resxunhuan:[],
            reslist:[],
            paihangbanglook:sessionStorage["paihang"],
            dianjibanglook:sessionStorage["dianji"],
            pagesize:10,
            page:sessionStorage["page"],
            rank:sessionStorage["rank"],
            url:sessionStorage["url"],
            listurl:sessionStorage["listurl"]
        }
    },
    components:{
        MyHeader
    },
    beforeCreate(){
        if(sessionStorage["page"]==null){
            sessionStorage["page"]=1
        }
        if(sessionStorage["rank"]==null){
            sessionStorage["rank"]=1
        }
        if(sessionStorage["url"]==null){
            sessionStorage["url"]="api/books/clickzhai"
        }
        if(sessionStorage["listurl"]==null){
            sessionStorage["listurl"]="api/books/zbooks"
        }
    },
    created(){  
        //点击榜
        (async function(self){
            var res = await self.$http.get(
                "api/books/zbooks"
            )
            self.resd = res.data
        })(this),
        //收藏榜
        (async function(self){
            var res = await self.$http.get(
                "api/books/tbooks"
            )
            self.ress = res.data
        })(this),
        //推荐榜
        (async function(self){
            var res = await self.$http.get(
                "api/books/nbooks"
            )
            self.rest = res.data
        })(this),
        //订阅榜
        (async function(self){
            var res = await self.$http.get(
                "api/books/nvbooks"
            )
            self.resy = res.data
        })(this),
        (async function(self){
            var res = await self.$http.get(self.url,
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
            var res = await self.$http.get(self.listurl)
            self.reslist = res.data
        })(this)
    },
    mounted(){
        this.userchange()
    },
    methods:{
        reader(title){
            this.$router.push("/reader/"+title)
        },
        //排行
        paihangbang(){
            sessionStorage.setItem("dianji","none") 
            sessionStorage.setItem("paihang","block") 
            sessionStorage.setItem("rank",1) 
            this.$router.push("/rank")
            this.$router.go(0)
        },
        //点击
        dianjibang(){
            sessionStorage.setItem("url","api/books/clickzhai")
            sessionStorage.setItem("listurl","api/books/zbooks")
            sessionStorage.setItem("dianji","block") 
            sessionStorage.setItem("paihang","none") 
            sessionStorage.setItem("rank",2) 
            this.$router.push("/rank/"+"click")
            this.$router.go(0)
        },
        //收藏
        shoucangbang(){
            sessionStorage.setItem("url","api/books/clicktong")
            sessionStorage.setItem("listurl","api/books/tbooks")
            sessionStorage.setItem("dianji","block") 
            sessionStorage.setItem("paihang","none") 
            sessionStorage.setItem("rank",2) 
            sessionStorage.setItem("rank",3) 
            this.$router.push("/rank/"+"collect")
            this.$router.go(0)
        },
        //推荐
        tuijianbang(){
            sessionStorage.setItem("url","api/books/clicknan")
            sessionStorage.setItem("listurl","api/books/nbooks")
            sessionStorage.setItem("dianji","block") 
            sessionStorage.setItem("paihang","none") 
            sessionStorage.setItem("rank",2) 
            sessionStorage.setItem("rank",4) 
            this.$router.push("/rank/"+"recommend")
            this.$router.go(0)
        },
        //订阅
        dingyuebang(){
            sessionStorage.setItem("url","api/books/clicknv")
            sessionStorage.setItem("listurl","api/books/nvbooks")
            sessionStorage.setItem("dianji","block") 
            sessionStorage.setItem("paihang","none") 
            sessionStorage.setItem("rank",2) 
            sessionStorage.setItem("rank",5) 
            this.$router.push("/rank/"+"subscription")
            this.$router.go(0)
        },
        ltmove(){
            sessionStorage.setItem("page",1)
            this.$router.go(0)
        },
        gtmove(){
            sessionStorage.setItem("page",2)
            this.$router.go(0)
        }
    },
    filters:{
        //字体长度
        textlength(value,i){
            if(!value){return ''}
            if(value.length>i){
                return value.slice(0,i)+"..."
            }else{
                return value
            }
        },
        //数字总数超过10000变化
        textcount(value){
            if(!value){return ''}
            if(value>10000){
                return (value/10000).toFixed(2)+"万"
            }else{
                return value
            }
        }
    },
    props:["position"]
}
</script>
<style scoped>
.clear{
    clear: both;
}
a{
    text-decoration: none;
}
.rankbody{
    width:1200px;
    margin:20px auto;
}
.rankborn{
    width: 980px;
    float: left;
}
.ranklist{
    float: left;
    width: 200px;
    height:800px;
}
.ranklistul{
    list-style: none;
    padding-left:0;
}
.ranklistulli{
    display: block;
    width: 200px;
    height:50px;
    text-align: center;
    line-height:50px;
    border:1px solid #dcdcdc;
    border-left:3px solid #4acbff;
    border-collapse: collapse;
}
.ranklistullifast{
    border-right:3px solid #4acbff;
    color:#4acbff;
}
.ranklistul li span:hover{
    cursor:pointer;
    border-right:3px solid #4acbff;
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