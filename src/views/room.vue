<template>
    <div>
        <my-header></my-header>
        <div class="roombody">
        <div class="roomlistall">
            <div class="roomlistbottom">
                <p class="roomlistbottom-p">作品标签:</p>
                <ul class="roomlistbottom-ul">
                    <li class="roomselect"><a href="#" class="roomselectnow">全部</a></li>
                </ul>
            </div>
            <div class="roomlistbottom">
                <p class="roomlistbottom-p">排序方式:</p>
                <ul class="roomlistbottom-ul">
                    <li class="roomselect"><a href="#" class="roomselectnow">默认</a></li>
                    <li class="roomselect"><a href="#">更新时间</a></li>
                    <li class="roomselect"><a href="#">周点击</a></li>
                    <li class="roomselect"><a href="#">月点击</a></li>
                    <li class="roomselect"><a href="#">总点击</a></li>
                    <li class="roomselect"><a href="#">周推荐</a></li>
                    <li class="roomselect"><a href="#">月推荐</a></li>
                    <li class="roomselect"><a href="#">总推荐</a></li>
                    <li class="roomselect"><a href="#">总收藏</a></li>
                </ul>
            </div>
            <div class="roomlistbottom">
                <p class="roomlistbottom-p">更新时间:</p>
                <ul class="roomlistbottom-ul">
                    <li class="roomselect"><a href="#" class="roomselectnow">不限</a></li>
                    <li class="roomselect"><a href="#">三日内</a></li>
                    <li class="roomselect"><a href="#">七日内</a></li>
                    <li class="roomselect"><a href="#">本月内</a></li>
                    <li class="roomselect"><a href="#">一月内</a></li>
                </ul>
            </div>
            <div class="roomlistbottom">
                <p class="roomlistbottom-p">作品字数:</p>
                <ul class="roomlistbottom-ul">
                    <li class="roomselect"><a href="#" class="roomselectnow">不限</a></li>
                    <li class="roomselect"><a href="#">15万以下</a></li>
                    <li class="roomselect"><a href="#">15-30万字</a></li>
                    <li class="roomselect"><a href="#">30-50万字</a></li>
                    <li class="roomselect"><a href="#">50-100万字</a></li>
                    <li class="roomselect"><a href="#">100-200万字</a></li>
                    <li class="roomselect"><a href="#">200万以上</a></li>
                </ul>
            </div>
            <div class="roomlistbottom">
                <p class="roomlistbottom-p">其他选择:</p>
                <ul class="roomlistbottom-ul">
                    <li class="roomselect"><a href="#" class="roomselectnow">不限</a></li>
                    <li class="roomselect"><a href="#">只看完本</a></li>
                    <li class="roomselect"><a href="#">免费作品</a></li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        <table class="roombooks">
            <tbody>
                <tr>
                    <th>[小说类别]</th>
                    <th width="170px">小说书名</th>
                    <th width="180px">最新章节</th>
                    <th width="130px">作者名</th>
                    <th width="90px">字数</th>
                    <th>更新时间</th>
                </tr>
                <tr class="roomremove" v-for="(item,index) in res" :key="index" v-if="index<10">
                    <td>[{{item.classify}}]</td>
                    <td width="170px"><p><a href="javascript:;" @click="reader(item.title)" >{{item.title}}</a></p></td>
                    <td width="180px"> <p class="type">第一千八十六章</p></td>
                    <td width="130px">{{item.author}}</td>
                    <td width="90px">{{item.reader}}</td>
                    <td>2018-10-28</td>
                </tr>
            </tbody>
            <div class="clear"></div>
        </table>
        <div class="roomborn">
            <ul class="roompage">
                <li><a href="javascript:;" class="pagesizebtn" @click="ltmove()">&lt;&lt;</a></li>
                <li><a href="javascript:;" class="pagesizebtn" :class="{roompagefast:pagecount==1}">1</a></li>
                <li v-for="(item,index) in reslist" :key="index" v-if="Math.ceil(item.id/10)>1 && Math.ceil(reslist[index-1].id/10)!=Math.ceil(reslist[index].id/10)"><a href="#" class="pagesizebtn" :class="{roompagefast:pagecount==Math.ceil(item.id/10)}">{{Math.ceil(item.id/10)}}</a></li>
                <li><a href="javascript:;" class="pagesizebtn" @click="gtmove()">&gt;&gt;</a></li>
            </ul>
        </div>
        <div class="roomskip">
            <span>跳转到</span>
            <input type="text" class="skipinput">
            <span>/{{Math.ceil(this.reslist[this.reslist.length-1].id/10)}}页</span>
            <a href="#" class="skipa">确认</a>
        </div>
    </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header.vue'
export default {
    data(){
        return{
            pagecount:sessionStorage["pagecount"],
            pagelast:sessionStorage["pagelast"],
            pagesize:10,
            res:[{id:""}],
            reslist:[
                {id:""}
            ]
        }
    },
    components:{
        MyHeader
    },
    beforeCreate(){
        if(sessionStorage["pagecount"]==null){
            sessionStorage["pagecount"]=1
        }
        if(sessionStorage["pagelast"]==null){
            sessionStorage["pagelast"]=1
        }
    },
    created(){
        (async function(self){
            var res = await self.$http.get("api/books/selectrepertory",{
                params:{
                    page:self.pagelast,
                    pagesize:self.pagesize
                }
            })
            self.res = res.data
        })(this),
        (async function(self){
            var res = await self.$http.get("api/books/selectrepertoryone")
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
        ltmove(){
            if(sessionStorage["pagecount"]>1){
                var count = parseInt(sessionStorage["pagecount"])-1
                sessionStorage.setItem("pagecount",count)
                var pagenumber = parseInt(sessionStorage["pagelast"])-1
                sessionStorage.setItem("pagelast",pagenumber)
                this.$router.go(0)
            }else{
                return
            }
        },
        gtmove(){
            if(sessionStorage["pagecount"]<Math.ceil(this.reslist[this.reslist.length-1].id/10)){
                var count = parseInt(sessionStorage["pagecount"])+1
                sessionStorage.setItem("pagecount",count)
                var pagenumber = parseInt(sessionStorage["pagelast"])+1
                sessionStorage.setItem("pagelast",pagenumber)
                this.$router.go(0)
            }else{
                return
            }
        }
    }
}
</script>
<style scoped>
a,ul{
    text-decoration: none;
    color: #666;
    list-style: none;
}
.roombody{
    width:1200px;
    margin:20px auto;
}
.roomlistall{
    width:1200px;
    border: 1px solid #eaeaea;
    box-shadow: 1px 1px 3px #dcdcdc;;
    color: #666;
    border-radius: 4px;
}
.roomlistbottom{
    width:1180px;
    padding: 6px 0 4px 20px;
    border-bottom: 1px solid #eaeaea;
    float: left;
}
.roomlistbottom-ul{
    margin:0px;
    float: left;
    list-style:none;
}
.roomselect{
    float: left;
    margin: 0 8px 10px;
}
.roomselectnow{
    background: #4acbff;
    border-color: #4acbff;
}
.roomlistbottom-ul a{
    color: #000;
    display: block;
    width: 78px;
    height: 24px;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
}
.roomlistbottom-p{
    float: left;
    margin:0;
}
.roombooks{
    margin-top:10px;
    width:1200px;
    border: 1px solid #eaeaea;
    box-shadow: 1px 1px 3px #dcdcdc;;
    color: #666;
    border-radius: 4px;
}
.table{
    border-collapse: collapse;
    border-spacing: 0;
}
.roombooks tr{
    padding: 0 20px;
    border-bottom: 1px solid #eaeaea;
    color: #aaa;
}
.roombooks td,.roombooks th{
    width: 1200px;
    padding: 0px 10px;
    line-height: 20px;
    background: #fff;
    display: table-cell;
    font-weight: 400;
    font-style: normal;
    font-size:14px;
}
.type{
    max-width: 82%;
    margin-right: 5px;
    font-size: 12px;
}
.roompage{
    margin:6px;
    padding: 20px 0;
    text-align: center;
    background: #fff;
    list-style: none;
}
.roompage li{
    display: inline-block;
    margin: 0 2px;
    vertical-align: middle;
}
.roompage li a{
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
.roompage li a:hover{
    background-color: #4acbff;
}
.roompagefast{
    background-color: #4acbff;
}
.roomskip{
    text-align: right;
}
.skipinput{
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0 10px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    font: 12px/1.5 'Microsoft Yahei',tahoma,arial,\5b8b\4f53,sans-serif;
}
.skipa{
    float: right;
    display: block;
    height: 30px;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 48px;
    color: #000;
    margin-left: 10px;
    border-color: #4acbff;
    background: #4acbff;
}
.roomskip span{
    font-size: 12px;
    color: #999;
    line-height: 32px;
}
</style>