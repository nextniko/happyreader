<template>
    <div>
        <div class="readercontainer">
            <div class="readerborder">
                <div class="readerheaderboder">
                    <h3 class="readerheader">{{res[0].section}}</h3>
                    <p class="readerauthor">
                        <span>{{res[0].title}}</span>
                        <span>作者:{{res[0].author}}</span>
                        <span>更新时间: 2018-08-27</span>
                        <span>字数:{{res[0].commend}}</span>
                    </p>
                </div>
                <div class="readertitle">
                        {{res[0].matter}}
                </div>
            </div>
        </div>
        <div class="readercontainer">
            <div class="userclick">
                <a href="javascript:;" class="btn btn-warning" @click="over('up')">上一章</a>
                <a href="javascript:;" class="btn btn-default" @click="reader(res[0].title)">目录</a>
                <a href="javascript:;" class="btn btn-warning" @click="over('down')">下一章</a>
            </div>
        </div>
        <div class="lastone">
            这已经是最后一章了!!
        </div>
        <div class="startone">
            这是第一章!!
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            res:[
                {section:""},
            ],
            ress:[
                {section:""}
            ],
            zhangjie:this.id
        }
    },
    created(){
        this.details()
    },
    methods:{
        details(){
            var self = this
            this.$http.get("/api/books/look",{
                params:{
                    title : self.title,
                    id : self.id
                }
            }).then(res=>{
                self.res = res.data
            })
            this.$http.get("/api/books/read",{
                params:{
                    title : self.title
                }
            }).then(res=>{
                self.ress =res.data
            })
        },
        reader(title){
            this.$router.push("/reader/"+title)
        },
        // updown(number){
        //     var id = Number(this.id)
        //     var title = this.title
        //     if(number==1){
        //         if(id==1){
        //             document.getElementsByClassName("startone")[0].style="display:block;"
        //             setTimeout(function(){document.getElementsByClassName("startone")[0].style="display:none;"},2000)
        //             return
        //         }else{
        //             this.$router.push("/readers/"+title+"/"+(id-1))
        //             this.$router.go(0)
        //         }
        //     }else if(number==2){
        //         if(id==this.ress.length){
        //             document.getElementsByClassName("lastone")[0].style="display:block;"
        //             setTimeout(function(){document.getElementsByClassName("lastone")[0].style="display:none;"},2000)
        //             return
        //         }else{
        //             this.$router.push("/readers/"+title+"/"+(id+1))
        //             this.$router.go(0)
        //         }
        //     }
        // }
        over(updown){
            //上翻页
            if(updown=='up'){
                if(this.zhangjie !=1){
                    this.zhangjie -=1
                    var self = this
                    self.$http.get("/api/books/look",{
                        params:{
                            title : self.title,
                            id : self.zhangjie
                        }
                    }).then(res=>{
                        self.res = res.data
                    })
                    self.$http.get("/api/books/read",{
                        params:{
                            title : self.title
                        }
                    }).then(res=>{
                        self.ress =res.data
                    })
                    this.$router.push("/readers/"+this.title+"/"+(this.zhangjie-1))
                }else{
                    return
                }
            }
            if(updown=='down'){
                if(this.zhangjie != this.ress.id.length -1){

                }
            }
        }
    },
    props:["title","id"]
}
</script>
<style scoped>
div,p,ul,li,a,span,h3{
    margin:0px;
    padding:0px;
}
body{
    background-color:#fafafa;
}
.readercontainer{
    width: 1030px;
    margin: 0 auto;
}
.space{
    width:100%;
    height:50px;
}
.readerborder{
    padding: 24px 0 0;
    background: #faf0d9;
    width: 100%;
}
.readerheader{
    width: 871px;
    height: 46px;
    padding-right: 50px;
    font-size: 24px;
    font-weight: bold;
    line-height: 46px;
}
.readerauthor{
    height: 28px;
    font-size: 12px;
    color: #848484;
    line-height: 28px;
    overflow: hidden;
}
.readerauthor span{
    margin-right:24px;
}
.readerheaderboder{
    margin: 0 100px 22px 70px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.readertitle{
    font-size: 20px;
    width: 872px;
    padding: 0 0 30px 0;
    margin-left: 70px;
    color: #323232;
    border-bottom: 1px solid #e6e6e6;
}
a{
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    color: #000;
}
.userclick{
    margin: 40px 0;
    text-align: center;
}
.btn{
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    touch-action: manipulation;
}
.btn-warning{
    color: #212121;
    background-color: #fbc02d;
    border: 1px solid #fbc02d;
    width: 118px;
    padding: 0 0;
    font-size: 14px;
    line-height: 38px;
    margin: 0 2px;
    border-radius: 4px;
}
.btn-default{
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 0 2px;
    width: 118px;
    padding: 0 0;
    font-size: 14px;
    line-height: 38px;
    border-radius: 4px;
}
.backtop{
    position: fixed;
    right: 20px;
    bottom: 15px;
    z-index: 999;
    width: 40px;
    height: 40px;
    opacity: 0.85;
    background: url(../../public/img/backtop.png) #fff no-repeat -130px 0;
}
.mousehover{
    display: block;
    padding: 6px;
    text-align: center;
    line-height: 1.2;
    text-indent: -9999em;
    height: 28px;
    font-size: 100%;
}
.btn-warning:hover{
    opacity: 0.9;
}
.lastone{
    position: fixed;
    top:50%;
    left:43%;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display: none;
}
.startone{
    position: fixed;
    top:50%;
    left:43%;
    background: #ccc;
    padding:10px 20px;
    border-radius: 5px;
    color:white;
    display: none;
}
</style>


