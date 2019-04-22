<template>
    <div>
        <my-header></my-header>
        <div class="container">
            <div class="my_lunbo">
                <ul id="lunbotu" class="my_lunbozuofloat" :style="{left:left}">
                    <li class="my_pics"><a href="#"><img src="img/20180914043719292.jpg" alt="" width="465px" class="pic"></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180827112747983.jpg" alt="" width="465px" class="pic"></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914060312932.jpg" alt="" width="465px" class="pic"></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914030023969.jpg" alt="" width="465px" class="pic"></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914030055153.jpg" alt="" width="465px" class="pic"></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914030242999.jpg" alt="" width="465px" class="pic"></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914030319615.jpg" alt="" width="465px" class="pic"></a></li>
                </ul>
                <div class="qigeyuanbox">
                    <div class="qigeyuan">
                        <span @click="lunbo(6)" class="circular" :class="{circularFirst:v==6}"></span>
                        <span @click="lunbo(5)" class="circular" :class="{circularFirst:v==5}"></span>
                        <span @click="lunbo(4)" class="circular" :class="{circularFirst:v==4}"></span>
                        <span @click="lunbo(3)" class="circular" :class="{circularFirst:v==3}"></span>
                        <span @click="lunbo(2)" class="circular" :class="{circularFirst:v==2}"></span>
                        <span @click="lunbo(1)" class="circular" :class="{circularFirst:v==1}"></span>
                        <span @click="lunbo(0)" class="circular" :class="{circularFirst:v==0}" id="lastone"></span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="leftcheck"></div>
                <div class="rightcheck"></div>
            </div>
            <div class="lunbozhong">
                <ul class="my_lunbozhong">
                    <li class="my_lunbofloat" v-for="(item,index) in res" :key="index" v-if="index<6">
                        <a href="#"  class="mousepic">
                            <img :src="item.img" alt="" width="130px" height="90px">
                            <p class="textposition">【{{item.author}}】{{item.intro | textlength(15)}}</p>
                            <p class="textsmallposition">{{item.reader | textcount}}人在看</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="lunboyou">
                <a href="www.ciweimao.com" ><img src="img/ciweimao_notice.jpg" alt="" class="fuli"></a>
                <a href="www.ciweimao.com"><img src="img/20180109032303547.jpg" alt=""></a>
                <h4 class="rightlan">精选荣誉榜单</h4>
                <div class="tit">
                    <div>
                        主编强推
                    </div>
                    <div class="sub-tit">
                        <i>TOP 10</i>
                        精挑细选
                    </div>
                    <ul class="sub-titcontent">
                        <li class="sub-titcontentone">
                            <a href="#" class="sub-titcontenta">
                                <img src="img/15-08-18152151-53603-100076330.jpg" alt="">
                                <i>1</i>
                                <p class="sub-titcontentonemiddle">【青春日常】猫和春物鬼畜...</p>
                                <p class="sub-titcontentonemiddletwo">无敌的我</p>
                                <span class="sub-titcontentonemiddlethree">666万</span>
                            </a>
                        </li>
                        <li class="sub-titcontenttwo">
                            <a href="#" class="sub-titcontenta">
                                <i>2</i>
                                <span class="sub-titcontenttwofont">【游戏世界】我觉得氯化拯救不</span>
                                <span class="sub-titcontenttwofonter">66万</span>
                            </a>
                        </li>
                        <li class="sub-titcontentthree">
                            <a href="#" class="sub-titcontenta">
                                <i>3</i>
                                <span class="sub-titcontentthreefont">【游戏世界】我.不是天生欧</span>
                                <span class="sub-titcontentthreefonter">66.6万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>4</i>
                                <span class="sub-titcontentallfont">【动漫穿越】我，黑岩射手，穿</span>
                                <span class="sub-titcontentallfonter">357.4万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>5</i>
                                <span class="sub-titcontentallfont">【动漫穿越】当剑圣降临二</span>
                                <span class="sub-titcontentallfonter">183.1万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>6</i>
                                <span class="sub-titcontentallfont">【青春日常】我的青春是诱骗</span>
                                <span class="sub-titcontentallfonter">444.2万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>7</i>
                                <span class="sub-titcontentallfont">【异界幻想】别人氪金我氪命</span>
                                <span class="sub-titcontentallfonter">63.2万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>8</i>
                                <span class="sub-titcontentallfont">【异界幻想】我，在型月世</span>
                                <span class="sub-titcontentallfonter">1.1万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>9</i>
                                <span class="sub-titcontentallfont">【动漫穿越】八重樱！嘤嘤</span>
                                <span class="sub-titcontentallfonter">642.1万</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall">
                            <a href="#" class="sub-titcontenta">
                                <i>10</i>
                                <span class="sub-titcontentallfont">【超现实都市】我居然变身了！</span>
                                <span class="sub-titcontentallfonter">65.6万</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tit">
                    <div>
                        宅文强推
                    </div>
                    <div class="sub-tit">
                        <i>TOP 10</i>
                        宅力无边
                    </div>
                    <ul class="sub-titcontent-z">
                        <li class="sub-titcontentone" v-for="(item,index) in res" :key="index" v-if="index==0">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <img :src="item.img" alt="" width="80px">
                                <i>{{index+1}}</i>
                                <p class="sub-titcontentonemiddle">【{{item.classify}}】{{item.intro | textlength(6)}}</p>
                                <p class="sub-titcontentonemiddletwo">{{item.title}}</p>
                                <span class="sub-titcontentonemiddlethree">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li class="sub-titcontenttwo" v-for="(item,index) in res" :key="item.img" v-if="index==1">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontenttwofont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontenttwofonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                         <li class="sub-titcontentthree" v-for="(item,index) in res" :key="item.classify" v-if="index==2">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontentthreefont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentthreefonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall"  v-for="(item,index) in res" :key="item.intro" v-if="index<8">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+3}}</i>
                                <span class="sub-titcontentallfont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentallfonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tit">
                    <div>
                        同人强推
                    </div>
                    <div class="sub-tit">
                        <i>TOP 10</i>
                        我要的次元
                    </div>
                    <ul class="sub-titcontent-t">
                        <li class="sub-titcontentone" v-for="(item,index) in rest" :key="index" v-if="index==0">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <img :src="item.img" alt="" width="80px">
                                <i>{{index+1}}</i>
                                <p class="sub-titcontentonemiddle">【{{item.classify}}】{{item.intro | textlength(6)}}</p>
                                <p class="sub-titcontentonemiddletwo">{{item.title}}</p>
                                <span class="sub-titcontentonemiddlethree">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li class="sub-titcontenttwo" v-for="(item,index) in res" :key="item.img" v-if="index==1">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontenttwofont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontenttwofonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                         <li class="sub-titcontentthree" v-for="(item,index) in res" :key="item.classify" v-if="index==2">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontentthreefont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentthreefonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall"  v-for="(item,index) in res" :key="item.intro" v-if="index<8">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+3}}</i>
                                <span class="sub-titcontentallfont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentallfonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tit">
                    <div>
                        男生强推
                    </div>
                    <div class="sub-tit">
                        <i>TOP 10</i>
                        当红小说
                    </div>
                    <ul class="sub-titcontent-n">
                        <li class="sub-titcontentone" v-for="(item,index) in resn" :key="index" v-if="index==0">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <img :src="item.img" alt="" width="80px">
                                <i>{{index+1}}</i>
                                <p class="sub-titcontentonemiddle">【{{item.classify}}】{{item.intro | textlength(6)}}</p>
                                <p class="sub-titcontentonemiddletwo">{{item.title}}</p>
                                <span class="sub-titcontentonemiddlethree">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li class="sub-titcontenttwo" v-for="(item,index) in res" :key="item.img" v-if="index==1">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontenttwofont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontenttwofonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                         <li class="sub-titcontentthree" v-for="(item,index) in res" :key="item.classify" v-if="index==2">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontentthreefont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentthreefonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall"  v-for="(item,index) in res" :key="item.intro" v-if="index<8">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+3}}</i>
                                <span class="sub-titcontentallfont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentallfonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tit">
                    <div>
                        女生强推
                    </div>
                    <div class="sub-tit">
                        <i>TOP 10</i>
                        当红小说
                    </div>
                    <ul class="sub-titcontent-nv">
                        <li class="sub-titcontentone" v-for="(item,index) in resnv" :key="index" v-if="index==0">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <img :src="item.img" alt="" width="80px">
                                <i>{{index+1}}</i>
                                <p class="sub-titcontentonemiddle">【{{item.classify}}】{{item.intro | textlength(6)}}</p>
                                <p class="sub-titcontentonemiddletwo">{{item.title}}</p>
                                <span class="sub-titcontentonemiddlethree">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li class="sub-titcontenttwo" v-for="(item,index) in res" :key="item.img" v-if="index==1">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontenttwofont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontenttwofonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                         <li class="sub-titcontentthree" v-for="(item,index) in res" :key="item.classify" v-if="index==2">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontentthreefont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentthreefonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall"  v-for="(item,index) in res" :key="item.intro" v-if="index<8">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+3}}</i>
                                <span class="sub-titcontentallfont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentallfonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tit">
                    <div>
                        往期BOSS推荐
                    </div>
                    <div class="sub-tit">
                        <i>TOP 10</i>
                        总裁的秘密书库
                    </div>
                    <ul class="sub-titcontent-b">
                        <li class="sub-titcontentone" v-for="(item,index) in resb" :key="index" v-if="index==0">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <img :src="item.img" alt="" width="80px">
                                <i>{{index+1}}</i>
                                <p class="sub-titcontentonemiddle">【{{item.classify}}】{{item.intro | textlength(6)}}</p>
                                <p class="sub-titcontentonemiddletwo">{{item.title}}</p>
                                <span class="sub-titcontentonemiddlethree">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li class="sub-titcontenttwo" v-for="(item,index) in res" :key="item.img" v-if="index==1">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontenttwofont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontenttwofonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                         <li class="sub-titcontentthree" v-for="(item,index) in res" :key="item.classify" v-if="index==2">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+1}}</i>
                                <span class="sub-titcontentthreefont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentthreefonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                        <li  class="sub-titcontentall"  v-for="(item,index) in res" :key="item.intro" v-if="index<8">
                            <a href="javascript:;" class="sub-titcontenta"  @click="changer(),reader(item.title)">
                                <i>{{index+3}}</i>
                                <span class="sub-titcontentallfont">【{{item.classify}}】{{item.intro | textlength(6)}}</span>
                                <span class="sub-titcontentallfonter">{{item.reader | textcount}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 宅文推荐 -->
            <div class="zhawentuijian">
                <h2 class="tuijian">宅文推荐</h2>
                <i class="tuijianline"></i>
                <a href="loser.html" class="all">查看全部 ></a>
                <span class="spanfont">200位宅文大神鼎力打造</span>
            </div>
            <!-- 书群 -->
            <div class="booker">
                <ul class="booker-ul-z">
                    <li class="booker-li" v-for="(item) in res" :key="item.id" v-if="item.id<19">
                        <a href="javascript:;" class="mousepics" @click="changer(),reader(item.title)">
                            <img :src="item.img" alt="" width="128px" height="178px" class="books-bimg">
                            <p class="textpositions-title">
                                <img :src="item.author_img" alt="" class="books-img"><span class="books-zi">【{{item.author | textlength(3)}}】</span>
                            </p>
                            <p class="textpositions">{{item.intro | textlength(50)}}</p>
                            <p class="textsmallpositions">{{item.commend}}</p>
                        </a>
                        <a href="javascript:;" class="booker-down" @click="changer(),reader(item.title)">
                            <p class="booker-zi">{{item.title}}</p>
                            <p class="booker-zixia">{{item.reader | textcount}}︱{{item.classify}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ↑ -->
            <div class="my_heightmove">
                <ul id="jsmove1" class="left heightmove" :style="{top:top}">
                    <li class="my_pics"><a href="#"><img src="img/20180914031656469.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031729302.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031759956.jpg" alt=""></a></li>
                </ul>
            </div>
            <!-- 宅文推荐 -->
            <!-- 同人推荐 -->
            <div class="zhawentuijian">
                <h2 class="tuijian">同人推荐</h2>
                <i class="tuijianline"></i>
                <a href="colleagues.html" class="all">查看全部 ></a>
                <span class="spanfont">万人在线抢着看</span>
            </div>
            <!-- 书群 -->
            <div class="booker">
                <ul class="booker-ul-t">
                    <li class="booker-li" v-for="(item) in rest" :key="item.id" v-if="item.id<19">
                        <a href="javascript:;" class="mousepics"  @click="changer(),reader(item.title)">
                            <img :src="item.img" alt="" width="128px" height="178px" class="books-bimg">
                            <p class="textpositions-title">
                                <img :src="item.author_img" alt="" class="books-img"><span class="books-zi">【{{item.author | textlength(3)}}】</span>
                            </p>
                            <p class="textpositions">{{item.intro | textlength(50)}}</p>
                            <p class="textsmallpositions">{{item.commend}}</p>
                        </a>
                        <a href="javascript:;" class="booker-down"  @click="changer(),reader(item.title)">
                            <p class="booker-zi">{{item.title}}</p>
                            <p class="booker-zixia">{{item.reader | textcount}}︱{{item.classify}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ↑ -->
            <div class="my_heightmove">
                <ul id="jsmove2" class="left heightmove" :style="{top:top}">
                    <li class="my_pics"><a href="#"><img src="img/20180914031656469.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031729302.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031759956.jpg" alt=""></a></li>
                </ul>
            </div>
            <!-- 同人推荐 -->
            <!-- 男生推荐 -->
            <div class="zhawentuijian">
                <h2 class="tuijian">男生推荐</h2>
                <i class="tuijianline"></i>
                <a href="boy.html" class="all">查看全部 ></a>
                <span class="spanfont">万人在线抢着看</span>
            </div>
            <!-- 书群 -->
            <div class="booker-sex">
                <ul class="booker-ul-n">
                    <li class="booker-li" v-for="(item) in resn" :key="item.id" v-if="item.id<13">
                        <a href="javascript:;" class="mousepics"  @click="changer(),reader(item.title)">
                            <img :src="item.img" alt="" width="128px" height="178px" class="books-bimg">
                            <p class="textpositions-title">
                                <img :src="item.author_img" alt="" class="books-img"><span class="books-zi">【{{item.author | textlength(3)}}】</span>
                            </p>
                            <p class="textpositions">{{item.intro | textlength(50)}}</p>
                            <p class="textsmallpositions">{{item.commend}}</p>
                        </a>
                        <a href="javascript:;" class="booker-down"  @click="changer(),reader(item.title)">
                            <p class="booker-zi">{{item.title}}</p>
                            <p class="booker-zixia">{{item.reader | textcount}}︱{{item.classify}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ↑ -->
            <div class="my_heightmove">
                <ul id="jsmove3" class="left heightmove" :style="{top:top}">
                    <li class="my_pics"><a href="#"><img src="img/20180914031656469.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031729302.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031759956.jpg" alt=""></a></li>
                </ul>
            </div>
            <!-- 男生推荐 -->
            <!-- 女生推荐 -->
            <div class="zhawentuijian">
                <h2 class="tuijian">女生推荐</h2>
                <i class="tuijianline"></i>
                <a href="girl.html" class="all">查看全部 ></a>
                <span class="spanfont">万人在线抢着看</span>
            </div>
            <!-- 书群 -->
            <div class="booker-sex">
                <ul class="booker-ul-nv">
                    <li class="booker-li" v-for="(item) in resnv" :key="item.id" v-if="item.id<13">
                        <a href="javascript:;" class="mousepics"  @click="changer(),reader(item.title)">
                            <img :src="item.img" alt="" width="128px" height="178px" class="books-bimg">
                            <p class="textpositions-title">
                                <img :src="item.author_img" alt="" class="books-img"><span class="books-zi">【{{item.author | textlength(3)}}】</span>
                            </p>
                            <p class="textpositions">{{item.intro | textlength(50)}}</p>
                            <p class="textsmallpositions">{{item.commend}}</p>
                        </a>
                        <a href="javascript:;" class="booker-down"  @click="changer(),reader(item.title)">
                            <p class="booker-zi">{{item.title}}</p>
                            <p class="booker-zixia">{{item.reader | textcount}}︱{{item.classify}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ↑ -->
            <div class="my_heightmove">
                <ul id="jsmove4" class="left heightmove" :style="{top:top}">
                    <li class="my_pics"><a href="#"><img src="img/20180914031656469.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031729302.jpg" alt=""></a></li>
                    <li class="my_pics"><a href="#"><img src="img/20180914031759956.jpg" alt=""></a></li>
                </ul>
            </div>
            <!-- 女生推荐 -->
            <!-- BOSS任性推荐 -->
            <div class="zhawentuijian">
                <h2 class="bosstuijian">BOSS任性推荐</h2>
                <i class="tuijianline"></i>
                <a href="room.html" class="all">查看全部 ></a>
                <span class="spanfont">万人在线抢着看</span>
            </div>
            <!-- 书群 -->
            <div class="book-boss">
                <ul class="booker-ul-b">
                    <li class="booker-li" v-for="(item) in resb" :key="item.id" v-if="item.id<7">
                        <a href="javascript:;" class="mousepics"  @click="changer(),reader(item.title)">
                            <img :src="item.img" alt="" width="128px" height="178px" class="books-bimg">
                            <p class="textpositions-title">
                                <img :src="item.author_img" alt="" class="books-img"><span class="books-zi">【{{item.author | textlength(3)}}】</span>
                            </p>
                            <p class="textpositions">{{item.intro | textlength(50)}}</p>
                            <p class="textsmallpositions">{{item.commend}}</p>
                        </a>
                        <a href="javascript:;" class="booker-down"  @click="changer(),reader(item.title)">
                            <p class="booker-zi">{{item.title}}</p>
                            <p class="booker-zixia">{{item.reader | textcount}}︱{{item.classify}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ↑ -->
            <!-- BOSS任性推荐 -->
        </div>
        <div class="container">
            <div class="zhawentuijian">
            <h3>
                <i></i>
                最近更新小说
            </h3>
            <a href="#" class="end">查看全部 ></a>
            <i class="endline"></i>
            </div>
            <div class="clear"></div>
            <div class="row">
                <div class="tablerow">
                    <table class="tablestyle">
                        <tbody>
                            <tr>
                                <th><span>序号</span></th>
                                <th><span>小说类别</span></th>
                                <th><span>小说书名/小说章节</span></th>
                                <th><span>字数</span></th>
                                <th><span>小说作者</span></th>
                                <th><span>更新时间</span></th>
                            </tr>
                            <tr v-for="(item,index) in resq" :key="index" v-if="index<15">
                                <td>
                                    <p class="fontcolor">{{index+1}}</p>
                                </td>
                                <td>
                                    <p class="fontcolor">【{{item.classify}}】</p>
                                </td>
                                <td>
                                    <p>
                                        <a href="#" class="urlstyle">{{item.title}}</a>
                                        <span class="fontcolor">第九百三十章 先知</span>
                                        <i class="vipstyle"></i>
                                    </p>
                                </td>
                                <td>
                                    <p class="fontcolor">{{item.reader}}</p>
                                </td>
                                <td>
                                    <p>
                                        <a href="#" class="urlstyle">{{item.author}}</a>
                                    </p>
                                </td>
                                <td>
                                    <p class="fontcolor">2018-10-08 18:05:39</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
            res:[],
            rest:[],
            resn:[],
            resnv:[],
            resb:[],
            resq:[],
            left:0,
            top:0,
            v:0,
            smallv:0,

        }
    },
    components:{
        MyHeader,
    },
    methods:{
        changer(){
            this.change(0)
        },
        lunbo(i){
            this.v=i
            this.left=(i*-465)+"px"
        },
        reader(title){
            this.$router.push("/reader/"+title)
        },
        detail(){
            //宅文
            (async function(self){
                var res = await self.$http.get(
                    "/api/books/zbooks"
                )
                self.res = res.data
                
            })(this),
            // 同人
            (async function(self){
                var res = await self.$http.get(
                    "/api/books/tbooks"
                )
                self.rest = res.data
            })(this),
            // 男生
            (async function(self){
                var res = await self.$http.get(
                    "/api/books/nbooks"
                )
                self.resn = res.data
            })(this),
            // 女生
            (async function(self){
                var res = await self.$http.get(
                    "/api/books/nvbooks"
                )
                self.resnv = res.data
            })(this),
            // BOSS
            (async function(self){
                var res = await self.$http.get(
                    "/api/books/bbooks"
                )
                self.resb = res.data
            })(this),
            //全文
            (async function(self){
                var res = await self.$http.get(
                    "/api/books/nowbooks"
                )
                self.resq = res.data
            })(this)
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
        },
    },
    created(){  
        this.detail()
    },
    mounted(){
        var self = this
        setInterval(function(){
            if(self.v==6){self.v=-1}
            var i = self.v
            i++
            self.left = (-465*i)+"px"
            self.v = i; 
            if(self.smallv==2){self.smallv=-1}
            var ll = self.smallv
            ll++
            self.top = (-120*ll)+"px"
            self.smallv = ll
        },7000)
    },
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
.menuul{
    float: left;
    list-style: none;
    padding-left:0;
    padding-top:24px;
    margin:0;
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
.circularFirst{
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
    margin-bottom: 20px
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


