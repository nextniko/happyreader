<template>
    <div>
        <my-header></my-header>
        <div class="container">
            <div class="readerbox">
                <div class="readermiddle" :style="{display:addings}">添加成功</div>
                <div class="readerboxpic">
                    <img :src="'/'+res[0].img" alt="" width="180px" height="240px" style="display:block;">
                </div>
                <div class="readerboxfont">
                    <h3>
                        {{res[0].title}}
                        <span><a href="#" class="readerboxfonta">{{res[0].author}}</a>著</span>
                    </h3>
                    <p class="readerboxlianzai">连载中·本站首发</p>
                    <p class="readerboxshuju">总点击: <b>{{res[0].reader | textcount()}}</b>总收藏: <b>{{res[0].collect}}</b> 总字数: <b>{{res[0].fontnumber}}</b></p>
                    <div class="readerboxreader">
                        <a href="javascript:;" class="readerboxread" @click="readers(res[0].title,1)">立即阅读</a>
                        <a href="javascript:;" class="readerboxbook readeradd" :style="{display:add}" @click="adder()">放入书架</a>
                        <a href="javascript:;" class="readeradding" :style="{display:adding}">已放入书架</a>
                        <router-link class="readerboxbook" to="/room">免费书籍</router-link>
                    </div>
                </div>
                <div class="readerboxauther">
                    <ul class="readerboxauthertext">
                        <li class="readerboxauthertextstyle "><a href="javascript:;" :class="{readerboxauthertextstyleone:jianjie}" @click="introclick()">作品简介</a></li>
                        <li class="readerboxauthertextstyle"><a href="javascript:;" :class="{readerboxauthertextstyleone:xinxi}" @click="introclicktwo()">作品信息</a></li>
                    </ul>
                </div>
                <div class="readerboxauthercontent" v-html="res[0].intro" :style="{display:intro}">
                </div>
                <div class="readerboxauthercontentnext" :style="{display:introtwo}">
                    <span>小说性质: <i>{{res[0].nature}}</i></span>
                    <span>总点击: <i>{{res[0].reader}}</i></span>
                    <span>月点击: <i>{{res[0].collect}}</i></span>
                    <span>周点击: <i>{{res[0].fontnumber}}</i></span>
                    <span>小说类别: <i>{{res[0].classify}}</i></span>
                    <span class="color">本站首发</span>
                </div>
                <div class="warninger">
                        （本站郑重提醒: 本故事纯属虚构，如有雷同，纯属巧合，切勿模仿。)
                </div>
            </div>
            <div class="readerbooks">
                <div class="readerbookssection">
                    <h3>章节目录</h3>
                    <div class="readerbookssectionall">
                        <h4>全文预览</h4>
                        <ul class="sectionall">
                            <li v-for="(item,index) in ressection" :key="index" v-if="index < 12"><a href="javascript:;" @click="readers(item.title,item.id)">{{item.section}}</a></li>    
                        </ul>
                        <ul class="sectionallhidden" :style="{display:sectiontwo}">
                            <li v-for="(item,index) in ressection" :key="index" v-if="index > 11"><a href="javascript:;" @click="readers(item.title,item.id)">{{item.section}}</a></li>    
                        </ul>
                        <a href="javascript:;" class="sectionallclick" @click="move()" :style="{display:section}">显示更多</a>
                        <a href="javascript:;" class="sectionsomeclick" @click="move()" :style="{display:sectiontwo}">部分隐藏</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header.vue'
export default {
    data(){
        return{
            res:[{title:""}],
            resall:[],
            ressection:[],
            section:"block",
            sectiontwo:"none",
            add:"block",
            adding:"none",
            addings:"none",
            intro:"block",
            introtwo:"none",
            jianjie:true,
            xinxi:false
        }
    },
    components:{
        MyHeader
    },
    created(){
        this.detail()
        console.log(this.title)
        console.log(this.asd)
    },
    filters:{
        //数字总数超过10000变化
        textcount(value){
            if(!value){return ''}
            if(value>10000){
                return (value/10000)+"万"
            }else{
                return value
            }
        },
    },
    methods:{
        //详情页
        detail(){
            (async function(self){
                var res = await self.$http.get("/api/books/bookers",{params:{title:self.title}})
                self.res = res.data
            })(this),
            //小说id
            (async function(self){
                var res = await self.$http.get("/api/books/lookall",{params:{title:self.title}})
                self.resall = res.data
            })(this),
            //小说章节
            (async function(self){
                var res = await self.$http.get("/api/books/read",{params:{title:self.title}})
                self.ressection = res.data
            })(this)
        },
        readers(title,id){
            this.$router.push("/readers/"+title+"/"+id)
        },
        move(){
            if(this.section=="block"){
                    this.section="none"
                    this.sectiontwo="block"
            }else{
                    this.section="block"
                    this.sectiontwo="none"
            }
        },
        adder(){
            if(this.add=="block"){
                this.add="none"
                this.adding="block"
                this.addings="block"
            }
        },
        introclick(){
            if(this.intro=="none"){
                this.intro="block"
                this.introtwo="none"
                this.jianjie=true
                this.xinxi=false
            }
        },
        introclicktwo(){
            if(this.introtwo=="none"){
                this.xinxi=true
                this.introtwo="block"
                this.intro="none"
                this.jianjie=false
            }
        }
        },
    props:["title","asd"]
}
</script>
<style scoped>
.container{
    width: 1200px;
    margin:0 auto;
}
.readermiddle{
    position: absolute;
    top: 135px;
    left: 530px;
    background: #ccc;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    display: none;
}
.readeradding{
    display: none;
    margin-top: 20px;
    color: white;
    background-color: #f44d4d;
    border: 1px solid #f44d4d;
    width: 118px;
    height: 38px;
    padding: 0 0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
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
    display: block;
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
.sectionall a:hover{
    color:#fbc02d;
}
.sectionallhidden a:hover{
    color:#fbc02d;
}
</style>
