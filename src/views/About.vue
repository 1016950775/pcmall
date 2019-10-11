<!--商品详情页面-->
<template>
  <div class="about">
    <!--最顶部的导航-->
    <div class="t_nav" >
      <div class="t_nav1 clearfix">
        <div><router-link to="/">网站首页</router-link></div>
        <ul class="clearfix ul1">
          <li style="color: black"><router-link to="/car">购物车</router-link></li>
          <li>
            <Dropdown style="margin-left: 20px">
              <a href="javascript:void(0)">个人中心</a>
              <Dropdown-menu slot="list">
                <Dropdown-item>已买过东西</Dropdown-item>
                <Dropdown-item>足迹</Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>

    <div style="width: 1140px;margin: 0 auto;">
      <div class="t_main clearfix">
        <!--商品图片详情-->
        <div class="img_show ">
          <div class="big_img">
            <el-image
                    :src="item"
                    v-for="(item,index) in b_img"
                    v-show="index==resindex"
                    :preview-src-list="b_img">
            </el-image>
          </div>
          <div class="s_img">
            <ul>
              <li v-for="(item,index) in s_img" @mouseover="change(index)" >
                <a href="">
                  <img :src="item">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--商品名称，价格,尺码，颜色，数量，购买-->
        <div class="commodity">
          <!--名字-->
          <div class="commodity_name">
            <h3>{{ids.title}}</h3>
          </div>
          <!--价钱-->
          <div class="commodity_price clearfix">
            <div class="jiage">价格</div>
            <div class="jiaqian">
              <span class="rmb">￥</span>
              <span class="rmb_num">{{ids.price}}</span>
            </div>
          </div>
          <!--尺码 颜色-->
          <div class="size " >
            <div v-for="(color, index) in colors" :key="index" class="clearfix">
              <p>{{color.name}}</p>
              <span class="img" v-for="msg in color.msgs" ><img :src="msg"></span>
            </div>
            <div  v-for="(spec,index) in specs" :key="index" class="clearfix">
              <p>{{spec.name}}</p>
              <span class="spec" v-for="msg in spec.msgs">{{msg}}</span>
            </div>
          </div>
          <!--数量-->
          <div class="amount clearfix">
            <div class="amount1">数量</div>
            <el-input-number class="jishu" size="mini" v-model="num" @change="handleChange" @click="select(index, ind)"  :min="1" :max="10" label="描述文字"></el-input-number>
            <em>件(库存<span>999</span>件)</em>
          </div>
          <!--按钮-->
          <div class="btn clearfix">
            <div class="btn_buy">
              <a href=""> <el-button type="primary">立即购买</el-button></a>
            </div>
            <div class="btn_add">
              <div @click="more1(item)"><el-button type="warning">加入购物车</el-button></div>
            </div>
          </div>
        </div>
      </div>
      <!--宝贝详情-->
      <div class="details">
        <div class="pagehead">
          <h3>宝贝详情</h3>
        </div>
        <div class="details1">
          <div class="parameter">
            <ul class="clearfix">
              <li>品牌:&nbsp孔浪子</li>
              <li>材质:&nbsp涤纶</li>
              <li>涤纶含量:&nbsp70%(含)-79%(含)</li>
              <li>尺码:&nbspM L XL 2XL 3XL</li>
              <li>面料分类:&nbsp涤纶</li>
              <li>图案:&nbsp迷彩</li>
              <li>领型:&nbsp连帽</li>
              <li>衣门襟:&nbsp拉链门襟</li>
              <li>颜色:&nbsp红色 绿色 灰色</li>
              <li>袖型: 收口袖</li>
              <li>上市时间: 2019年</li>
              <li>货号: 1903</li>
              <li>细分风格: 潮</li>
              <li>基础风格: 青春流行</li>
              <li>适用季节: 秋季</li>
              <li>袖长: 长袖</li>
              <li>厚薄: 薄</li>
              <li>适用场景: 运动</li>
              <li>衣长: 常规</li>
              <li>版型: 宽松</li>
              <li>款式细节: 拼接</li>
              <li>工艺处理: 免烫处理</li>
              <li>适用对象: 青少年</li>
              <li>下摆设计: 橡筋下摆</li>
              <li>服装口袋样式: 侧缝插袋</li>
              <li>穿搭方式: 外穿</li>
              <li>材质成分: 聚酯纤维100%</li>
            </ul>
          </div>
          <div class="details_img">
            <img src="https://img.alicdn.com/imgextra/i2/830142270/O1CN01ItHrWf1SdhYxCyTTh_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i2/830142270/O1CN01Tg3Xh01SdhYyadIM1_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i1/830142270/O1CN01r5KbDM1SdhYxqZhxp_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i1/830142270/O1CN01vC9UM11SdhYzi2l66_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/830142270/O1CN01qostRv1SdhYyadpdq_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/830142270/O1CN01mfLzlK1SdhYxqYu7m_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i2/830142270/O1CN01ks21ED1SdhYzwz9Mr_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/830142270/O1CN01TQgbRV1SdhYz039HF_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i4/830142270/O1CN01031xf81SdhYw5pfAB_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/830142270/O1CN01DUTF531SdhYxD1QTp_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/830142270/O1CN01kHv3Ja1SdhYxCzY3h_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i1/830142270/O1CN01FscbOG1SdhYqzaG1l_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/830142270/O1CN01uyPO5t1SdhYxn13LS_!!830142270.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i2/830142270/O1CN01AbbVqb1SdhYyTqHvD_!!830142270.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

    <el-backtop :bottom="100">
      <div
              style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default{
  name: 'about',
  data(){
    return{
      ids:[{
        title:"",
        img: "",
        price: "",
        b_img:[],
        s_img:[],
        colors:[],
        specs:[],
      }],

      colors: [],
      specs: [],


      b_img:[],
      s_img:[],
      resindex:0,
      num: 1,
    }
  },
  methods:{
    change(value){
      this.resindex=value;
    },
    handleChange(value) {
      console.log(value);
    },



  },
  created:function(){
    this.ids = JSON.parse(decodeURIComponent(this.$route.params.ids));
    this.b_img=this.ids.b_img;
    this.s_img=this.ids.s_img;
    this.colors=this.ids.colors;
    this.specs=this.ids.specs;
  },


}
</script>
<style>


  .size p{
    float: left;
    width: 55px;
    margin-bottom: 10px;
  }
  .size .img{
    width: 42px;
    height: 42px;
    /*display: inline-block;*/
    margin: 0 5px 10px 0;
    border: 1px solid #DCDCDC;
    background: #FFF;
    float: left;
  }
  .size .spec {
    display: inline-block;
    padding: 3px 6px;
    margin: 0 5px 10px 0;
    border: 1px solid #DCDCDC;
    background: #FFF;
    float: left;
  }
  .size span:hover{
    border: 1px solid #F40;
  }
  .size .select {
    color: #F40;
  }

  .row {
    display: inline-block;
  }








  .t_main{
    margin-top: 20px;
    border: 1px solid #E8E8E8;
  }
  /*清除浮动*/
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  /*商品图片详情*/
  .img_show{
    width: 400px;
    margin: 20px 0 20px 20px;
    float: left;
  }
  .img_show .big_img{
    margin-bottom: 20px;
  }
  .img_show .big_img img{
    width: 400px;
    height: 400px;
  }
  .img_show .s_img ul{
    text-align: center;
    white-space: nowrap;
    position: relative;
  }
  .img_show .s_img ul li{
    display: inline-block;
    margin-right: 16px;
    padding-top: 22px;
  }
  .img_show .s_img ul li a{
    float: left;
    position: relative;
  }
  .img_show .s_img ul li a img{
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
  }
  .img_show .s_img ul li a img:hover{
    border: 2px solid #f40;
  }
  /*商品价格，名称*/
  .commodity{
    float: left;
    padding: 0 20px 20px 30px;
    width: 715px;
    position: relative;
  }
  .commodity .commodity_name{
    padding: 20px 0 10px!important;
    position: relative;
  }
  .commodity .commodity_name h3{
    min-height: 21px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    color: #3C3C3C;
  }
  .commodity .commodity_price{
    background-color: #FFF2E8;
    margin-bottom: 5px;
  }
  .commodity .commodity_price .jiage{
    float: left;
    line-height: 26px;
    margin-top: 5px;
    margin-right: 5px;
    width: 55px;
    color: #6C6C6C;
  }
  .commodity .commodity_price .jiaqian{
    float: left;
    color: #E4393C;
    margin-right: 10px;
    overflow: hidden;
    font-size: 26px;
    font-weight: 700;
  }
  .commodity .commodity_price .jiaqian .rmb{
    font-family: arial;
    margin-right: 4px;
    font-weight: 400;
  }
  .commodity .commodity_price .jiaqian .rmb_num{
    color: #e4393c;
    font-family: verdana,arial;
  }

  /*数量*/
  .amount1{
  float: left;
  width: 55px;
  }
  .amount .jishu{
    float: left;
  }
  .amount em{
    float: left;
    font-style: normal;
    line-height: 28px;
    color: #3C3C3C;
  }
  /*按钮*/
  .btn{
    margin-top: 20px;
  }
  .btn .btn_buy{
    margin-right: 9px;
    float: left;
  }
  .btn .btn_add{
    float: left;
  }
  /*宝贝详情*/
  .details .details1{
    width: 750px;
    margin: 0 auto;
  }
  .details .details1 .parameter{
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: solid 1px #eee;
  }
  .details .details1 .parameter ul{
    padding: 0 15px;
    list-style: none;
  }
  .details .details1 .parameter ul li{
    display: inline;
    float: left;
    width: 206px;
    height: 24px;
    margin-right: 20px;
    overflow: hidden;
    text-indent: 5px;
    line-height: 24px;
    text-overflow: ellipsis;
    text-align: left;
  }
  .details .details1 .details_img{
    width: 100%;
    padding: 10px 0 0;
    overflow: hidden;
    margin: 1.12em 0;
  }
</style>
