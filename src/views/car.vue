<template>
    <div id="car">
        <!--最顶部导航-->
        <div class="t_nav" >
            <div class="t_nav1 clearfix">
                <div><router-link to="/">网站首页</router-link></div>
                <ul class="clearfix ul1">
                    <li style="color: black">购物车</li>
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

        <div class="shopcar">
            <div class="cartou clearfix">
                <div class="tou-car">
                    <label  class="input-label" :class="{active: selected_all}" @click="slect_all"></label>
                </div>
                <div class="sp">商品</div>
                <div class="sl">数量</div>
                <div class="dj">单价(元)</div>
                <div class="je">金额(元)</div>
                <div class="cz" style="width: 215px">操作</div>
            </div>
            <div class="car-list">
                <ul>
                    <li class="car-item clearfix" v-for="(item,index) in good_list">
                        <div class="input-block">
                            <label class="input-label" :class="{active: item.is_selected}" :for="'car-checkbox-'+index" @click="select_one(index)" ></label>
                        </div>
                        <div class="car-item-content clearfix">
                            <div class="car-img">
                                <img :src="item.img" />
                            </div>
                            <div class="car-cont">
                                <h3>{{item.title}}</h3>
                                <div class="cat-desc">
                                    <span v-for="spec in item.spec_item">{{spec}}</span>
                                </div>
                            </div>
                            <div class="num">
                                <button class="anjian" @click="reduce(index)">-</button>
                                <span>{{item.num}}</span>
                                <button class="anjian" @click="add(index)">+</button>
                            </div>
                            <div class="car-price">
                                <span class="car-price1">￥{{item.price}}</span>
                                <span class="car-price1">￥{{item.price*item.num}}</span>
                            </div>
                            <el-button
                                    @click.native.prevent="deleteRow(item.$index, good_list)"
                                    type="text"
                                    size="small">
                                移除
                            </el-button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="car-footer">
                <div class="foot-car">
                    <label  class="input-label" :class="{active: selected_all}" @click="slect_all"></label>
                </div>
                <div class="total-cont">
                    <span>总价：{{totalPrice}}</span>
                    <span>共{{totalNum}}件</span>
                </div>
                <div class="btn-box">
                    <button>立即下单</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "car",
  data() {
    return {
      good_list: [{
          title: 'Apple iPhone 6s 16GB 玫瑰金色 移动联通电信4G手机',
          img: "https://img.alicdn.com/imgextra/i2/2200811257634/O1CN01mywupu26GQ666pWP9_!!2200811257634.png_430x430q90.jpg",
          num: 2,
          price: 6070.00,
          spec_item:[
            '内存:16G',
            '网络:4G',
            '颜色:玫瑰金'
          ],
          is_selected: false
        },{
          title: 'Apple iPhone 6s 32GB 玫瑰金色 移动联通电信4G手机',
          img: 'https://img.alicdn.com/imgextra/i2/2200811257634/O1CN01mywupu26GQ666pWP9_!!2200811257634.png_430x430q90.jpg',
          num: 2,
          price: 4570.00,
          spec_item:[
            '内存:32G',
            '网络:4G',
            '颜色:玫瑰金'
          ],
          is_selected: true
        },{
          title: 'Apple iPhone 6s 8GB 玫瑰金色 移动联通电信4G手机',
          img: 'https://img.alicdn.com/imgextra/i2/2200811257634/O1CN01mywupu26GQ666pWP9_!!2200811257634.png_430x430q90.jpg',
          num: 2,
          price: 4870.00,
          spec_item:[
            '内存:8G',
            '网络:4G',
            '颜色:玫瑰金'
          ],
          is_selected: false
        },{
          title: 'Apple iPhone 6s 128GB 玫瑰金色 移动联通电信4G手机',
          img: 'https://img.alicdn.com/imgextra/i2/2200811257634/O1CN01mywupu26GQ666pWP9_!!2200811257634.png_430x430q90.jpg',
          num: 2,
          price: 10568.00,
          spec_item:[
            '内存:128G',
            '网络:4G',
            '颜色:玫瑰金'
          ],
          is_selected: true
        },
      ],

      totalPrice: 0,
      totalNum: 0,
      selected_all: false,


    };
  },


  mounted: function () {
    this.getTotal();
  },

  computed:{

  },


  methods:{

    getTotal () {
      this.totalPrice = 0
      this.totalNum = 0
      for (var i = 0; i < this.good_list.length; i++) {
        var _d = this.good_list[i]
        if (_d.is_selected) {
          this.totalPrice += _d['price'] * _d['num']
          this.totalNum += _d['num']
        }
      }
    },
    select_one (index) {
      if(this.good_list[index].is_selected == true){
        this.good_list[index].is_selected = false
      }else{
        this.good_list[index].is_selected = true
      }
      this.getTotal()
    },
    slect_all () {
      if(this.selected_all){
        for (var i = 0; i < this.good_list.length; i++) {
          this.good_list[i].is_selected = false;
        }
        this.selected_all = false
      }else{
        for (var i = 0; i < this.good_list.length; i++) {
          this.good_list[i].is_selected = true;
        }
        this.selected_all = true
      }
      this.getTotal()
    },
    reduce (index) {
      if(this.good_list[index].num <= 1) return;
      this.good_list[index].num --
      this.getTotal()
    },
    add (index) {
      this.good_list[index].num ++
      this.getTotal()
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }

  },
  watch: {
    'good_list': {
      handler: function (val, oldVal) {
        return val;
      },
      deep: true
    }

  },
  components: {

  }
}
</script>

<style scoped>
    #car{
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .shopcar{
        width: 1190px;
        margin: 0 auto;
    }
    .tou-car {
        width: 30px;
        height: 42px;
        float: left;
        margin-top: -5px;
        margin-left: 8px;
        position: relative;
    }
    .cartou{
        text-align: center;
        line-height: 45px;
        background: #f7f7f7;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
    }
    .cartou .sp{
        width: 450px;
        float: left;
    }
    .cartou .sl,.cartou .dj,.cartou .je,.cartou .cz{
        width: 160px;
        float: left;
    }
    .car-list {
        background: #f2f2f2;
        padding: 0 8px 8px 8px;
        margin-bottom: 60px;
    }
    .car-item {
        border-bottom: 1px solid #ddd;
        position: relative;
        height: 76px;
        overflow: hidden;
    }
    .input-block {
        width: 30px;
        float: left;
        height: 55px;
        line-height: 55px;
    }
    .input-label {
        cursor: pointer;
        position: absolute;
        width: 18px;
        height: 18px;
        top: 18px;
        left: 0;
        background: #fff;
        border:2px solid #ccc;
        border-radius: 50%;
    }
    .input-label:after {
        opacity: 0;
        content: '';
        position: absolute;
        width: 9px;
        height: 5px;
        background: transparent;
        top: 6px;
        left: 6px;
        border :2px solid #333;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
    }
    .car-item-content{
        margin-top: 10px;
    }
    .car-img {
        width: 64px;
        height: 64px;
        float: left;
        overflow: hidden;
        margin-top: -20px;
    }
    .car-img img{
        width: 100%;
    }
     .active {
        background-color: #F15A24;
    }
    .car-cont {
        float: left;
        width: 385px;
        text-align: left;
        margin-top: -10px;
    }
    .car-cont h3{
        font-weight: normal;
        line-height :24px;
        font-size: 14px;
    }
    .car-price span {
        display: inline-block;
        height: 24px;
        line-height: 24px;
    }
    .car-price .car-price1{
        float: left;
        width: 160px;
    }
    .car-footer {
        height: 60px;
        background: #f5f5f5;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .foot-car {
        width: 42px;
        height: 60px;
        float: left;
        margin-left: 12px;
        position: relative;
    }
    .total-cont {
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        float: left;
    }
    .total-cont span {
        display: inline-block;
        margin-left: 12px;
    }
    .btn-box{
        float: right;
        height: 60px;
        line-height: 60px;
    }
    .btn-box button{
        height: 100%;
        width: 100px;
        border: none;
        background: #F15A24;
        color: #fff;
        font-size: 16px;
    }
    .num {
        float: left;
       padding-left: 40px;
        width: 160px;
    }
    .num .anjian ,.num span{
        display: inline-block;
        width: 28px;
        height: 28px;
        float: left;
        text-align: center;
        line-height: 28px;
        border: 1px solid #ddd;
        font-size: 14px;
    }
    .num .anjian:hover{
        cursor:pointer;
    }
</style>