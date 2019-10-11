<template>
  <div class="home">
    <!--最顶部的导航-->
    <div class="t_nav" >
      <div class="t_nav1 clearfix">
        <div>网站首页</div>
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
    <!--搜索框-->
    <div class="search">
      <div class="searchBox clearfix">
        <input type="text" placeholder="请输入关键词进行搜索" class="searchInput" style="padding-left: 10px;">
        <input type="button" value="搜索" class="searchButton">
      </div>
    </div>
    <!--导航-->
    <div class="nav clearfix">
      <div class="nav1">
        <h2>主题市场</h2>
        <ul class="nav_1">
          <li><a :plain="true" @click="open1">天猫</a></li>
          <li><a :plain="true" @click="open2">聚划算</a></li>
          <li><a :plain="true" @click="open3">天猫超市</a></li>
        </ul>
        <ul class="nav_2">
          <li>|</li>
          <li><a :plain="true" @click="open4">淘抢购</a></li>
          <li><a :plain="true" @click="open5">电器城</a></li>
          <li><a :plain="true" @click="open6">司法拍卖</a></li>
          <li><a :plain="true" @click="open7">淘宝心选</a></li>
          <li><a :plain="true" @click="open8">兴农扶贫</a></li>
        </ul>
        <ul class="nav_3">
          <li>|</li>
          <li><a :plain="true" @click="open9">飞猪旅行</a></li>
          <li><a :plain="true" @click="open10">智能生活</a></li>
          <li><a :plain="true" @click="open11">苏宁易购</a></li>
          <li><a :plain="true" @click="open12">云栖大会</a></li>
        </ul>
      </div>
    </div>
    <!--主体-->
    <div style="width: 1190px; margin: 0 auto">
      <div class="main_1 clearfix">
        <!--侧滑菜单-->
        <div class="menu clearfix">
          <div id="menus">
            <ul>
              <li>
                <a class="menu_title" href="javascript:;">女装</a>
                /
                <a class="menu_title" href="javascript:;">男装</a>
                /
                <a class="menu_title" href="javascript:;">内衣</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">女装</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣</a>
                        <a href="">休闲裤</a>
                        <a href="">卫衣绒衫</a>
                        <a href="">大码女装</a>
                        <a href="">蕾丝衫/雪纺衫</a>
                        <a href="">背心吊带</a>
                        <a href="">毛衣</a>
                        <a href="">毛呢外套</a>
                        <a href="">羽绒服</a>
                        <a href="">皮衣</a>
                        <a href="">皮草</a>
                        <a href="">棉衣棉服</a>
                        <a href="">马夹</a>
                        <a href="">牛仔外套</a>
                        <a href="">阔腿裤</a>
                        <a href="">中老年女装</a>
                        <a href="">婚纱礼服</a>
                        <a href="">民族服装</a>
                        <a href="">打底裤</a>
                        <a href="">西装裤</a>
                        <a href="">唐装</a>
                        <a href="">汉服</a>
                        <a href="">旗袍</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">男装</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">春夏新品</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">POLO衫</a>
                        <a href="">休闲裤</a>
                        <a href="">牛仔裤</a>
                        <a href="">套装</a>
                        <a href="">外套</a>
                        <a href="">夹克</a>
                        <a href="">卫衣</a>
                        <a href="">风衣</a>
                        <a href="">西装</a>
                        <a href="">牛仔外套</a>
                        <a href="">棒球服</a>
                        <a href="">品质好物</a>
                        <a href="">皮衣</a>
                        <a href="">针织衫/毛衣</a>
                        <a href="">运动裤</a>
                        <a href="">工装裤</a>
                        <a href="">开衫</a>
                        <a href="">马甲</a>
                        <a href="">毛呢大衣</a>
                        <a href="">羽绒服</a>
                        <a href="">棉衣</a>
                        <a href="">中老年</a>
                        <a href="">情侣装</a>
                        <a href="">大码</a>
                        <a href="">民族风</a>
                        <a href="">专柜大牌</a>
                        <a href="">明星网红</a>
                        <a href="">原创设计</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">内衣</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">法式内衣</a>
                        <a href="">无钢圈内衣</a>
                        <a href="">内裤女</a>
                        <a href="">文胸</a>
                        <a href="">内裤男</a>
                        <a href="">长袖睡衣</a>
                        <a href="">睡裙</a>
                        <a href="">真丝睡衣</a>
                        <a href="">丝袜</a>
                        <a href="">船袜</a>
                        <a href="">情侣睡衣</a>
                        <a href="">抹胸</a>
                        <a href="">背心</a>
                        <a href="">睡袍</a>
                        <a href="">男士睡衣</a>
                        <a href="">塑身衣</a>
                        <a href="">内衣套装</a>
                        <a href="">打底裤</a>
                        <a href="">连体睡衣</a>
                        <a href="">聚拢文胸</a>
                        <a href="">男士袜子</a>
                        <a href="">棉袜女</a>
                        <a href="">卡通睡衣</a>
                        <a href="">无痕内裤</a>
                        <a href="">少女文胸</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/cainixihuan_log.webp">
                          <h3>AngelFields公主风睡裙纯棉宫廷睡衣全棉复古连衣裙家居服714091</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/Nike.webp">
                          <h3>Nick wooster RO高街复古叠襟低裆8分裤男青年锥形小脚哈伦裤宽松</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/cixiu.webp">
                          <h3>刺绣夹克韩版潮牌外套飞行员夹克男女情侣大码加厚秋冬季棒球服棉</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/oumei.webp">
                          <h3>欧美欧洲大码女装2018春夏中长款亚麻七分袖西装阔腿短裤时尚套装</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/kaqise.webp">
                          <h3>卡其色直筒休闲长裤女九分裤纯棉女裤春秋2019新款裤子秋款工装裤</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/waimao.webp">
                          <h3>外贸原单 女装秋季高腰弹力百搭修身显瘦罗马裤休闲小脚裤长裤女</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">鞋靴</a>
                /
                <a class="menu_title" href="javascript:;">箱包</a>
                /
                <a class="menu_title" href="javascript:;">配件</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">鞋靴</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">流行女鞋</a>
                        <a href="">春上新</a>
                        <a href="">当季热销</a>
                        <a href="">潮流新品</a>
                        <a href="">单鞋</a>
                        <a href="">靴子</a>
                        <a href="">运动风</a>
                        <a href="">高跟鞋</a>
                        <a href="">红人同款</a>
                        <a href="">厚底鞋</a>
                        <a href="">内增高</a>
                        <a href="">玛丽珍鞋</a>
                        <a href="">蝴蝶结鞋</a>
                        <a href="">小白鞋</a>
                        <a href="">一脚蹬</a>
                        <a href="">圆头鞋</a>
                        <a href="">方跟鞋</a>
                        <a href="">水晶鞋</a>
                        <a href="">尖头鞋</a>
                        <a href="">平底低跟</a>
                        <a href="">穆勒鞋</a>
                        <a href="">异形跟</a>
                        <a href="">新年红</a>
                        <a href="">男鞋</a>
                        <a href="">休闲鞋</a>
                        <a href="">板鞋</a>
                        <a href="">帆布鞋</a>
                        <a href="">运动风</a>
                        <a href="">豆豆鞋</a>
                        <a href="">乐福鞋</a>
                        <a href="">雕花布洛克</a>
                        <a href="">船鞋</a>
                        <a href="">增高鞋</a>
                        <a href="">正装商务</a>
                        <a href="">户外休闲</a>
                        <a href="">爸爸鞋</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">箱包</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">女包</a>
                        <a href="">骚包</a>
                        <a href="">双肩包</a>
                        <a href="">男包</a>
                        <a href="">旅行箱</a>
                        <a href="">钱包</a>
                        <a href="">真皮包</a>
                        <a href="">大牌</a>
                        <a href="">宽肩带</a>
                        <a href="">小方包</a>
                        <a href="">水桶包</a>
                        <a href="">迷你包</a>
                        <a href="">链条包</a>
                        <a href="">贝壳包</a>
                        <a href="">波士顿包</a>
                        <a href="">手拿包</a>
                        <a href="">单肩包</a>
                        <a href="">手提包</a>
                        <a href="">斜挎包</a>
                        <a href="">零钱包</a>
                        <a href="">妈妈包</a>
                        <a href="">欧美潮搭</a>
                        <a href="">日韩流行</a>
                        <a href="">青春学园</a>
                        <a href="">男士商务</a>
                        <a href="">雅痞休闲</a>
                        <a href="">拉杆箱</a>
                        <a href="">腰包</a>
                        <a href="">胸包</a>
                        <a href="">手工皮具</a>
                        <a href="">红人优品</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">配件</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">帽子</a>
                        <a href="">贝雷帽</a>
                        <a href="">渔夫帽</a>
                        <a href="">鸭舌帽</a>
                        <a href="">礼帽</a>
                        <a href="">草帽</a>
                        <a href="">爵士帽</a>
                        <a href="">盆帽</a>
                        <a href="">八角帽</a>
                        <a href="">丝巾</a>
                        <a href="">披肩</a>
                        <a href="">真丝围巾</a>
                        <a href="">棉麻围巾</a>
                        <a href="">方巾</a>
                        <a href="">手套</a>
                        <a href="">真皮手套</a>
                        <a href="">触屏手套</a>
                        <a href="">半指手套</a>
                        <a href="">全指手套</a>
                        <a href="">真皮腰带</a>
                        <a href="">腰带</a>
                        <a href="">手工皮带</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/126041229/TB2TB.9oVXXXXXLXXXXXXXXXXXX_!!126041229.jpg_110x110q90.jpg_.webp">
                          <h3>Northage  英伦朋克派对5孔固特异内线缝制复古马丁高帮系带女靴</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/2217877149/TB2IZ0MnxHI8KJjy1zbXXaxdpXa_!!2217877149.jpg_110x110q90.jpg_.webp">
                          <h3>复古方头黑色马丁靴2019春秋百搭及踝靴子皮里单靴粗跟高跟短靴女</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i2/801398500/TB2XJupxUlnpuFjSZFjXXXTaVXa_!!801398500.jpg_110x110q90.jpg_.webp">
                          <h3>春秋新款黑色天鹅绒尖头平底半拖鞋绒面星星丝绒水钻凉鞋穆勒鞋女</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/40334124/TB2uR.ya7fb_uJkSmLyXXcxoXXa_!!40334124.jpg_110x110q90.jpg_.webp">
                          <h3>毛衣大衣腰带女宽装饰铆钉皮带黑色腰封束腰外搭时尚百搭松紧弹力</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i2/165220515/TB2M1qshbBnpuFjSZFGXXX51pXa_!!165220515.png_110x110q90.jpg_.webp">
                          <h3>夏季女鞋变色玛丽珍洞洞鞋凉鞋防滑沙滩鞋大码40小码34妈妈鞋厚底</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/924179779/TB2GHn1oC3PL1JjSZFxXXcBBVXa_!!924179779.jpg_110x110q90.jpg_.webp">
                          <h3>欧美夸张蛇骨多层链长款项链 时尚个性气质毛衣链女装饰潮人配饰</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">童装玩具</a>
                /
                <a class="menu_title" href="javascript:;">孕产</a>
                /
                <a class="menu_title" href="javascript:;">用品</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">童装玩具</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">连体衣</a>
                        <a href="">保暖连体</a>
                        <a href="">裤子</a>
                        <a href="">羽绒</a>
                        <a href="">居家睡衣</a>
                        <a href="">针织</a>
                        <a href="">帽子</a>
                        <a href="">亲子装</a>
                        <a href="">童鞋</a>
                        <a href="">学步鞋</a>
                        <a href="">女童运动鞋</a>
                        <a href="">男童运动鞋</a>
                        <a href="">毛毛虫童鞋</a>
                        <a href="">雪地靴</a>
                        <a href="">马丁靴</a>
                        <a href="">长靴</a>
                        <a href="">玩具</a>
                        <a href="">积木</a>
                        <a href="">毛绒玩具</a>
                        <a href="">早教</a>
                        <a href="">儿童自行车</a>
                        <a href="">电动童车</a>
                        <a href="">遥控模型</a>
                        <a href="">户外玩具</a>
                        <a href="">亲子玩具</a>
                        <a href="">学习用品</a>
                        <a href="">描红本</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">孕产用品</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">美妈大衣</a>
                        <a href="">孕妇裤</a>
                        <a href="">月子服</a>
                        <a href="">哺乳文胸</a>
                        <a href="">吸奶器</a>
                        <a href="">防辐射</a>
                        <a href="">孕妇内裤</a>
                        <a href="">连衣裙</a>
                        <a href="">待产包</a>
                        <a href="">孕妇女仔裤</a>
                        <a href="">孕妇营养品</a>
                        <a href="">防溢乳垫</a>
                        <a href="">美德乐</a>
                        <a href="">十月妈咪</a>
                        <a href="">三洋</a>
                        <a href="">Bravado</a>
                        <a href="">新生儿</a>
                        <a href="">婴儿床</a>
                        <a href="">婴儿推车</a>
                        <a href="">睡袋</a>
                        <a href="">抱被</a>
                        <a href="">隔尿垫</a>
                        <a href="">学步车</a>
                        <a href="">安抚奶嘴</a>
                        <a href="">体温计</a>
                        <a href="">纸尿裤</a>
                        <a href="">花王</a>
                        <a href="">洗衣液</a>
                        <a href="">湿巾</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">奶粉辅食</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">爱他美</a>
                        <a href="">羊奶粉</a>
                        <a href="">特殊配方奶粉</a>
                        <a href="">喜宝</a>
                        <a href="">惠氏</a>
                        <a href="">启赋</a>
                        <a href="">牛栏</a>
                        <a href="">美素佳儿</a>
                        <a href="">贝因美</a>
                        <a href="">雅培</a>
                        <a href="">美赞臣</a>
                        <a href="">可瑞康</a>
                        <a href="">a2</a>
                        <a href="">嘉宝</a>
                        <a href="">美林</a>
                        <a href="">米粉</a>
                        <a href="">泡芙</a>
                        <a href="">溶溶豆</a>
                        <a href="">肉肠</a>
                        <a href="">果肉条</a>
                        <a href="">奶片</a>
                        <a href="">益生菌</a>
                        <a href="">维生素</a>
                        <a href="">钙铁锌</a>
                        <a href="">DHA</a>
                        <a href="">宝宝食用油</a>
                        <a href="">核桃油</a>
                        <a href="">葡萄糖</a>
                        <a href="">宝宝调料</a>
                        <a href="">奶瓶</a>
                        <a href="">餐具</a>
                        <a href="">餐椅</a>
                        <a href="">暖奶器</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/322212492/TB20yRabLSM.eBjSZFNXXbgYpXa_!!322212492.jpg_110x110q90.jpg_.webp">
                          <h3>【现货】拼图专用分片盒 6只装 高品质 拼图专用 可用1000</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i3/655823254/TB2crewc6ihSKJjy0FeXXbJtpXa_!!655823254.jpg_110x110q90.jpg_.webp">
                          <h3>男童加绒衬衫婴儿童外套中小童装宝宝纯棉格子加厚保暖衬衣寸秋冬</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i2/127240688/TB2ksKmqrsTMeJjSszhXXcGCFXa_!!127240688.jpg_110x110q90.jpg_.webp">
                          <h3>漫威儿童美国队长肌肉版表演cosplay动漫服装送盾牌4件套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/1803394532/TB2B4GAd3MPMeJjy1XdXXasrXXa_!!1803394532.jpg_110x110q90.jpg_.webp">
                          <h3>2019韩版秋款女童连衣裙儿童千鸟格加绒背心裙宝宝荷叶边公主裙</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i2/2657379975/TB2w5dsawRkpuFjy1zeXXc.6FXa_!!2657379975.jpg_110x110q90.jpg_.webp">
                          <h3>宜家国内代购全新正品丽乐普鲁可爱小猫咪儿童宝毛绒玩具玩偶礼物</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="//img.alicdn.com/bao/uploaded/i4/322212492/TB2nvcJkx6I8KJjy0FgXXXXzVXa_!!322212492.jpg_110x110q90.jpg_.webp">
                          <h3>【现货】Educa 进口拼图专用胶水 250ml 可用5000片</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">家电</a>
                /
                <a class="menu_title" href="javascript:;">数码</a>
                /
                <a class="menu_title" href="javascript:;">手机</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">家电</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">数码</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">手机</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">美妆</a>
                /
                <a class="menu_title" href="javascript:;">洗护</a>
                /
                <a class="menu_title" href="javascript:;">保健品</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">美妆</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">个人护理</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">营养保健</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">珠宝</a>
                /
                <a class="menu_title" href="javascript:;">眼镜</a>
                /
                <a class="menu_title" href="javascript:;">手表</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">珠宝</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">眼镜</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">手表</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">运动</a>
                /
                <a class="menu_title" href="javascript:;">户外</a>
                /
                <a class="menu_title" href="javascript:;">乐器</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">运动</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">户外健身</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">乐器</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">游戏</a>
                /
                <a class="menu_title" href="javascript:;">动漫</a>
                /
                <a class="menu_title" href="javascript:;">影视</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">游戏</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">动漫周边</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">热门影视周边</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">美食</a>
                /
                <a class="menu_title" href="javascript:;">生鲜</a>
                /
                <a class="menu_title" href="javascript:;">零食</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">美食</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">生鲜</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">零食</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">鲜花</a>
                /
                <a class="menu_title" href="javascript:;">宠物</a>
                /
                <a class="menu_title" href="javascript:;">农资</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">鲜花园艺</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">宠物水族</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">农资</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">工具</a>
                /
                <a class="menu_title" href="javascript:;">装修</a>
                /
                <a class="menu_title" href="javascript:;">建材</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">工具</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">装修</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">建材</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">家具</a>
                /
                <a class="menu_title" href="javascript:;">家饰</a>
                /
                <a class="menu_title" href="javascript:;">家纺</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">家具</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">布艺软料</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">床上用品</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">汽车</a>
                /
                <a class="menu_title" href="javascript:;">二手车</a>
                /
                <a class="menu_title" href="javascript:;">用品</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">品质汽车</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">二手车</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">汽车用品</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">办公</a>
                /
                <a class="menu_title" href="javascript:;">DIY</a>
                /
                <a class="menu_title" href="javascript:;">五金电子</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">办公</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">DIY</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">五金/电子</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">百货</a>
                /
                <a class="menu_title" href="javascript:;">餐厨</a>
                /
                <a class="menu_title" href="javascript:;">家庭保健</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">百货</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">餐厨</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">家庭保健</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu_title" href="javascript:;">学习</a>
                /
                <a class="menu_title" href="javascript:;">卡券</a>
                /
                <a class="menu_title" href="javascript:;">本地服务</a>
                <i> > </i>
                <div class="menu1">
                  <div class="menu_left">
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">学习</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">卡券票</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                    <div class="menu_text">
                      <h5>
                        <a class="a_left"  href="javascript;">本地服务</a>
                        <a class="a_right" href="javascript;">
                          <span>更多<i> > </i></span>
                        </a>
                      </h5>
                      <p>
                        <a href="">夏上新</a>
                        <a href="">连衣裙</a>
                        <a href="">T恤</a>
                        <a href="">衬衫</a>
                        <a href="">裤子</a>
                        <a href="">牛仔裤</a>
                        <a href="">西装</a>
                        <a href="">短外套</a>
                        <a href="">时尚套装</a>
                        <a href="">半身裙</a>
                        <a href="">毛针织衫</a>
                        <a href="">风衣休闲裤</a>
                      </p>
                    </div>
                  </div>
                  <div class="menu_right">
                    <h3>猜你喜欢</h3>
                    <div class="menu_card">
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tongzhuang.webp">
                          <h3>加厚面包款儿童羽绒服轻薄款男童女童中大童小童宝宝短款童装外套</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                      <Card dis-hover style="width:97px;height: 143px;margin: 10px 0 0 20px;border: none;float: left">
                        <div class="menu_card_text" style="margin: -16px">
                          <img src="../assets/tibao.webp">
                          <h3>短途出差旅行包男手提包大容量真皮男士行李包头层牛皮旅行袋</h3>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="menur">
          <!--轮播图-->
          <div class="lunbo">
            <el-carousel :interval="3000"  height="423px">
              <el-carousel-item v-for="(img,index) in imgList" :key="index">
                <img v-bind:src="img.url">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--广告-->
          <div class="Advertisement">
            <a href="" target="_blank"><img src="../assets/guanggao.jpg" alt="广告招商"></a>
          </div>
        </div>
      </div>
      <!--时尚爆料王-->
      <div class="king clearfix">
        <div class="king_l">
          <div class="king_l1">
            <h3><em>时尚爆料王</em></h3>
            <div class="king_list clearfix">
              <div class="king_list1 border">
                <div class="king_list_t">
                  <h4><a href="">腔调</a></h4>
                  <p>全球创意设计师平台</p>
                </div>
                <div class="king_list_img">
                  <a href=""><img src="https://img.alicdn.com/imgextra/i4/129/TB2wR1mf6oIL1JjSZFyXXbFBpXa_!!129-2-luban.png_120x120q90.jpg_.webp" alt=""></a>
                  <a style="margin-left: 10px;" href=""><img src="https://img.alicdn.com/imgextra/i2/165/TB2e0x7X138SeJjSZFPXXc_vFXa_!!165-2-luban.png_120x120q90.jpg_.webp" alt=""></a>
                </div>
              </div>
              <div class="king_list1">
                <div class="king_list_t">
                  <h4><a href="">腔调</a></h4>
                  <p>全球创意设计师平台</p>
                </div>
                <div class="king_list_img">
                  <a href=""><img src="https://img.alicdn.com/imgextra/i4/105/TB2GLjObtqUQKJjSZFIXXcOkFXa_!!105-2-luban.png_120x120q90.jpg_.webp" alt=""></a>
                  <a style="margin-left: 10px;" href=""><img src="https://img.alicdn.com/imgextra/i2/190/TB2oU0EXaagSKJjy0FaXXb0dpXa_!!190-2-luban.png_120x120q90.jpg_.webp" alt=""></a>
                </div>
              </div>
              <div class="king_list1">
                <div class="king_list_t">
                  <h4><a href="">腔调</a></h4>
                  <p>全球创意设计师平台</p>
                </div>
                <div class="king_list_img">
                  <a href=""><img src="https://img.alicdn.com/imgextra/i1/113/TB2aHnNdrsTMeJjy1zcXXXAgXXa_!!113-2-luban.png_120x120q90.jpg_.webp" alt=""></a>
                  <a style="margin-left: 10px;" href=""><img src="https://img.alicdn.com/imgextra/i4/37/TB2vUd6cRxRMKJjy0FdXXaifFXa_!!37-2-luban.png_120x120q90.jpg_.webp" alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="king_r">
          <a href=""><img src="https://img.alicdn.com/simba/img/TB1yKNrcEH1gK0jSZSySuttlpXa.jpg" alt=""></a>
        </div>
      </div>
      <!--好物推荐-->
      <div class="pagehead">
        <h3>好物推荐</h3>
      </div>
      <ul class="cards clearfix">
        <li class="qqq" v-for="(item,index) in cards_list" @click="more(item)">
          <div class="tu"><img :src="item.img" alt=""></div >
          <p class="baoyou">{{item.title}}</p >
          <div class="line_1 clearfix">
            <a href="" class="now_money"><span>￥</span><em>{{item.price}}</em></a >
            <a href="" class="sales">销量:{{item.xiaoliang}}</a >
          </div>
        </li>
      </ul>
      <!--底部END标识-->
      <div class="end">
        <i>END</i>
      </div>
      <!--各类服务信息-->
      <div class="layer">
        <div class="layer1">
          <div class="layer_list clearfix">
            <div class="layer_list1">
              <div style="padding: 0 25px;">
                <h4>消费者保障</h4>
                <ul>
                  <li><a href="">保障范围</a></li>
                  <li><a href="">退货退款流程</a></li>
                  <li><a href="">服务中心</a></li>
                  <li><a href="">更多特色服务</a></li>
                </ul>
              </div>
            </div>
            <div class="layer_list1">
              <div style="padding: 0 25px;">
                <h4>消费者保障</h4>
                <ul>
                  <li><a href="">保障范围</a></li>
                  <li><a href="">退货退款流程</a></li>
                  <li><a href="">服务中心</a></li>
                  <li><a href="">更多特色服务</a></li>
                </ul>
              </div>
            </div>
            <div class="layer_list1">
              <div style="padding: 0 25px;">
                <h4>消费者保障</h4>
                <ul>
                  <li><a href="">保障范围</a></li>
                  <li><a href="">退货退款流程</a></li>
                  <li><a href="">服务中心</a></li>
                  <li><a href="">更多特色服务</a></li>
                </ul>
              </div>
            </div>
            <div class="layer_list1">
              <div style="padding: 0 25px;">
                <h4>消费者保障</h4>
                <ul>
                  <li><a href="">保障范围</a></li>
                  <li><a href="">退货退款流程</a></li>
                  <li><a href="">服务中心</a></li>
                  <li><a href="">更多特色服务</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {

      imgList:[
        {url:require('../assets/lun1.jpg')},
        {url:require('../assets/lun2.jpg')},
        {url:require('../assets/lun3.jpg')},
        {url:require('../assets/lun4.gif')},
      ],

      cards_list:[{
        title: '运动外套男韩版潮流初中高中学生宽松春秋帅气百搭学院风夹克衣服',
        img: "https://img.alicdn.com/bao/uploaded/i1/656499602/TB1NbmpeQfb_uJkSnhJXXbdDVXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
        price: 108,
        xiaoliang:111,
        b_img:[
          'https://gd4.alicdn.com/imgextra/i2/830142270/O1CN01ViVglG1SdhZ038IMH_!!830142270.jpg_400x400.jpg',
          'https://gd4.alicdn.com/imgextra/i4/830142270/O1CN01buydhe1SdhZ2nmNXu_!!830142270.jpg_400x400.jpg',
          'https://gd4.alicdn.com/imgextra/i4/830142270/O1CN01qMiC4t1SdhZmXbEhf_!!830142270.jpg_400x400.jpg',
          'https://gd1.alicdn.com/imgextra/i1/830142270/O1CN016fLnJV1SdhZlvb8ni_!!830142270.jpg_400x400.jpg',
          'https://gd3.alicdn.com/imgextra/i3/830142270/O1CN019ElbUf1SdhZ2ZKXBS_!!830142270.jpg_400x400.jpg',
        ],
        s_img:[
          'https://gd4.alicdn.com/imgextra/i2/830142270/O1CN01ViVglG1SdhZ038IMH_!!830142270.jpg_50x50.jpg',
          'https://gd4.alicdn.com/imgextra/i4/830142270/O1CN01buydhe1SdhZ2nmNXu_!!830142270.jpg_50x50.jpg',
          'https://gd4.alicdn.com/imgextra/i4/830142270/O1CN01qMiC4t1SdhZmXbEhf_!!830142270.jpg_50x50.jpg',
          'https://gd1.alicdn.com/imgextra/i1/830142270/O1CN016fLnJV1SdhZlvb8ni_!!830142270.jpg_50x50.jpg',
          'https://gd3.alicdn.com/imgextra/i3/830142270/O1CN019ElbUf1SdhZ2ZKXBS_!!830142270.jpg_50x50.jpg',
        ],
        colors: [{
          name:'颜色',
          msgs:[
            'https://img.alicdn.com/imgextra/i4/2268229008/O1CN01dG73S62GPiJqpAXrA_!!2268229008.jpg_40x40q90.jpg',
            'https://img.alicdn.com/imgextra/i3/2268229008/O1CN01bffCc42GPiJqpDYy9_!!2268229008.jpg_40x40q90.jpg',
          ],
        }],
        specs: [{
          name:'尺码',
          msgs:['S','M'],
        }],
      },{
        title: '吊染渐变卫衣外套小恶魔鬼脸帽衫ins男',
        img: "https://gma.alicdn.com/bao/uploaded/i4/27805089/O1CN01dHg06L1nSo89e6CUM_!!0-saturn_solar.jpg_200x200.jpg_.webp",
        price: 218,
        xiaoliang:112,
        b_img:[
          'https://gd2.alicdn.com/imgextra/i3/0/O1CN01ZOvhFe2Ms0U2XvXKW_!!0-item_pic.jpg_400x400.jpg',
          'https://gd4.alicdn.com/imgextra/i4/718239882/O1CN01XMryqD2Ms0TmbnvPB_!!718239882.jpg_400x400.jpg',
          'https://gd3.alicdn.com/imgextra/i3/718239882/O1CN01GO7eoZ2Ms0ToSROku_!!718239882.jpg_400x400.jpg',
          'https://gd2.alicdn.com/imgextra/i2/718239882/O1CN01ovvAT62Ms0TpjV9aF_!!718239882.jpg_400x400.jpg',
          'https://gd3.alicdn.com/imgextra/i3/718239882/O1CN01HTRu2K2Ms0SQDeF2q_!!718239882.jpg_400x400.jpg',
        ],
        s_img:[
          'https://gd2.alicdn.com/imgextra/i3/0/O1CN01ZOvhFe2Ms0U2XvXKW_!!0-item_pic.jpg_50x50.jpg_.webp',
          'https://gd2.alicdn.com/imgextra/i3/0/O1CN01ZOvhFe2Ms0U2XvXKW_!!0-item_pic.jpg_50x50.jpg_.webp',
          'https://gd3.alicdn.com/imgextra/i3/718239882/O1CN01GO7eoZ2Ms0ToSROku_!!718239882.jpg_50x50.jpg_.webp',
          'https://gd3.alicdn.com/imgextra/i3/718239882/O1CN01GO7eoZ2Ms0ToSROku_!!718239882.jpg_50x50.jpg_.webp',
          'https://gd3.alicdn.com/imgextra/i3/718239882/O1CN01HTRu2K2Ms0SQDeF2q_!!718239882.jpg_50x50.jpg_.webp',
        ],
        colors: [{
          name:'颜色',
          msgs:[
            'https://gd2.alicdn.com/imgextra/i3/718239882/O1CN01U1xwjS2Ms0SQGiJP3_!!718239882.jpg_30x30.jpg',
            'https://gd2.alicdn.com/imgextra/i1/718239882/O1CN01o3wCMq2Ms0SQDcYwS_!!718239882.jpg_30x30.jpg',
          ],
        }],
        specs: [{
          name:'尺码',
          msgs:['S','M'],
        }],
      }, {
          title: 'dw手表男36mm金属编织男表',
          img: "https://img.alicdn.com/bao/uploaded/i1/96416556/O1CN014fCjCQ1yIhAP8cprN_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: 1489,
        xiaoliang:113,
        b_img:[
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/2107975731/O1CN013Qeooo1sCqOmIgpme_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2107975731/O1CN01oWnsah1sCqObqTrQy_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2107975731/O1CN01gJzByc1sCqOqZ0HYa_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2107975731/O1CN01p0wHl81sCqOshZEG1_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2107975731/O1CN01dpeZul1sCqOtxM2nW_!!2107975731.jpg_430x430q90.jpg',
        ],
        s_img:[
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/2107975731/O1CN013Qeooo1sCqOmIgpme_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2107975731/O1CN01oWnsah1sCqObqTrQy_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2107975731/O1CN01gJzByc1sCqOqZ0HYa_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2107975731/O1CN01p0wHl81sCqOshZEG1_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2107975731/O1CN01dpeZul1sCqOtxM2nW_!!2107975731.jpg_60x60q90.jpg',
        ],
        colors: [{
          name:'颜色分类',
          msgs:[
            'https://img.alicdn.com/imgextra/i1/2107975731/O1CN01dWnTZc1sCqOVpZXmJ_!!2107975731.jpg_40x40q90.jpg',
            'https://img.alicdn.com/imgextra/i4/2107975731/O1CN011qTQ6B1sCqOVpaHZI_!!2107975731.jpg_40x40q90.jpg',
          ],
        }],
        },{
          title: 'Danielwellington 丹尼尔惠灵顿DW女士36mm',
          img: "https://img.alicdn.com/bao/uploaded/i3/96416556/O1CN01yzmWnM1yIhARDZHW0_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: 1739,
        xiaoliang:114,
        b_img:[
          'https://img.alicdn.com/imgextra/i3/2107975731/TB1_s_Jtr9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i4/2107975731/TB2ZQOmgGagSKJjy0FgXXcRqFXa_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i2/2107975731/TB2wfzRkMoQMeJjy1XaXXcSsFXa_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i4/2107975731/TB2ba8egfNZWeJjSZFpXXXjBFXa_!!2107975731.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i1/2107975731/O1CN011sCqKJzAZJRFu45_!!2107975731.jpg_430x430q90.jpg',
        ],
        s_img:[
          'https://img.alicdn.com/imgextra/i3/2107975731/TB1_s_Jtr9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/i4/2107975731/TB2ZQOmgGagSKJjy0FgXXcRqFXa_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/i2/2107975731/TB2wfzRkMoQMeJjy1XaXXcSsFXa_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/i4/2107975731/TB2ba8egfNZWeJjSZFpXXXjBFXa_!!2107975731.jpg_60x60q90.jpg',
          'https://img.alicdn.com/imgextra/i1/2107975731/O1CN011sCqKJzAZJRFu45_!!2107975731.jpg_60x60q90.jpg',
        ],
        colors: [{
          name:'颜色分类',
          msgs:[
            'https://img.alicdn.com/imgextra/i2/2107975731/TB2_AoAa7Gj11JjSZFMXXXnRVXa_!!2107975731.jpg_40x40q90.jpg',
            'https://img.alicdn.com/imgextra/i3/2107975731/TB2GxT0pUQIL1JjSZFhXXaDZFXa_!!2107975731.jpg_40x40q90.jpg',
          ],
        }],
        },{
          title: 'DanielWellington丹尼尔惠灵顿dw手表男40mm黑盘男士腕表石英男表',
          img: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2107975731/TB1TTLAtruWBuNjSszgXXb8jVXa_!!0-item_pic.jpg_230x230.jpg_.webp",
          price: 1449,
        xiaoliang:115,
        specs: [{
          name:'颜色分类',
          msgs:['St Mawes Rosegold','Bristol Rosegold'],
        }],
        },{
          title: '春秋潮牌牛仔褂外套男嘻哈街头宽松印花夹克',
          img: "https://gma.alicdn.com/bao/uploaded/i1/44623223/TB2Ax3pc9zqK1RjSZFjXXblCFXa_!!0-saturn_solar.jpg_200x200.jpg_.webp",
          price: 158,
        xiaoliang:116,
        },{
          title: '嘻哈卫衣os小熊连帽衫情侣街头宽松长袖外套',
          img: "https://gma.alicdn.com/bao/uploaded/i2/121467147/O1CN01tSrwIi22fNEv8YMP9_!!0-saturn_solar.jpg_200x200.jpg_.webp",
          price: 232,
        xiaoliang:117,
        },{
          title: 'VERAF CA嘻哈国潮牌情侣装渐变卫衣男连帽反',
          img: "https://gma.alicdn.com/bao/uploaded/i2/430060033/O1CN01AO63141C79cDkZ5rd_!!0-saturn_solar.jpg_200x200.jpg_.webp",
          price: 318,
        xiaoliang:118,
        },{
          title: '秋季男士牛仔外套老虎头刺绣个性机车牛仔衣',
          img: "https://gma.alicdn.com/bao/uploaded/i1/44623223/O1CN01JD3l5t1ZgB4bGS2WS_!!0-saturn_solar.jpg_200x200.jpg_.webp",
          price: 158,
        xiaoliang:119,
        },{
          title: '日本附录包 黑色帆布 简约街头复古帆布包单肩包斜挎包休闲百搭',
          img: "https://img.alicdn.com/bao/uploaded/i1/2080874505/TB2dCtzurXlpuFjy1zbXXb_qpXa_!!2080874505.jpg_200x200q90.jpg_.webp",
          price: 20,
        xiaoliang:120,
        },
      ],

    };
  },
  methods: {
    open1() {
      this.$message({
        message: '天猫',
      })
    },
    open2() {
      this.$message({
        message: '聚划算',
      })
    },
    open3() {
      this.$message({
        message: '天猫超市',
      })
    },
    open4() {
      this.$message({
        message: '淘抢购',
      })
    },
    open5() {
      this.$message({
        message: '电器城',
      })
    },
    open6() {
      this.$message({
        message: '司法拍卖',
      })
    },
    open7() {
      this.$message({
        message: '淘宝心选',
      })
    },
    open8() {
      this.$message({
        message: '兴农扶贫',
      })
    },
    open9() {
      this.$message({
        message: '飞猪旅行',
      })
    },
    open10() {
      this.$message({
        message: '智能生活',
      })
    },
    open11() {
      this.$message({
        message: '苏宁易购',
      })
    },
    open12() {
      this.$message({
        message: '云栖大会',
      })
    },



    more(value){
    let routerdata = this.$router.resolve({path:'/about/'+encodeURIComponent(JSON.stringify(value))});
      window.open(routerdata.href, '_blank');
    },


    //导航栏
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {

  }
}
</script>

<style>
    .home{
        width: 1349px;
        margin: 0 auto;
    }
  /*最顶部导航*/
  .t_nav{
    width: 100%;
    height: 35px;
    background-color: #f5f5f5;
    margin-top: -20px;
  }
  .t_nav .t_nav1{
    margin: 0 auto;
    width: 100%;
    height: 35px;
  }
  .t_nav .t_nav1>div{
    float: left;
    z-index: 10002;
    line-height: 33px;
    margin-left: 80px;
  }
  .t_nav .t_nav1 div a{
    color: #333;
  }
  .t_nav .t_nav1 .ul1{
    list-style: none;
    padding: 0;
    line-height: 35px;
    margin-right: 80px;
  }
  .t_nav .t_nav1 .ul1>li{
    float: right;
    height: 35px;
    line-height: 35px;
    margin-left: 25px;
  }
  .t_nav .t_nav1 .ul1>li a{
    color: #333;
  }
  .el_dropdown_link {
    font-size: 12px;
  }
  /*搜索框*/
  .search{
    margin: 15px auto 0 auto;
    height: 50px;
    width: 100%;
  }
  .searchBox{
    margin: 0 auto;
    width: 60%;
    position: relative;
  }
  .searchInput{
    display: inline-block;
    width: 85%;
    height: 38px;
    border: 1px solid #cccccc;
    float: left;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
  .searchInput:focus{
    outline: medium;
  }
  .searchButton{
    display: inline-block;
    width: 15%;
    height: 38px;
    line-height: 40px;
    float: left;
    background-color: #00a0e9;
    font-size: 16px;
    cursor: pointer;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    border: none;
    color: #fff;
  }




  /*导航*/
  .nav{
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    width: 100%;
  }
  .nav .nav1{
    width: 1190px;
    height: 30px;
    margin: 0 auto;
    line-height: 30px;
    color: #fff;
  }
  .nav .nav1 h2{
    float: left;
    width: 190px;
    text-align: center;
    font-size: 16px;
    background: #ff5000;
  }
  .nav .nav1 ul{
    /*position: relative;*/
    list-style: none;
    z-index: 5;
  }
  .nav li{
    float: left;
  }
  .nav li a{
    color: #fff;
    padding: 0 5px;
  }
  .nav .nav1 .nav_1, .nav .nav1 .nav_2,.nav .nav1 .nav_3{
    float: left;
      display: inline-block;
    font-weight: 700;
  }
  .nav .nav1 .nav_1 li{
    text-align: center;
    padding: 0 4px;

  }
  .nav .nav1 .nav_2 li,.nav .nav1 .nav_3 li{
    margin-left: 7px;

  }
  /*主体*/
  .main_1 .menur{
      width: 980px;
    float: right;
  }
  /*侧滑菜单*/
  .menu{
    width: 189px;
    float: left;
  }
  .menu_left{
    width: 415px;
    height: 100%;
    overflow: hidden;
    padding-top: 10px;
    padding-right: 12px;
    padding-left: 10px;
    float: left;
  }
  .menu_text{
    font-size: 12px;
    margin-bottom: 5px;
  }
  .menu_text h5{
    position: relative;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    color: #333;
  }
  .menu_text h5 .a_left{
    float: left;
  }
  .menu_text h5 .a_right{
    float: right;
  }
  .menu_text h5 a{
    color: #3C3C3C;
  }
  .menu_text h5 span{
    font-size: 12px;
    right: -6px;
    position: absolute;
    font-weight: 400;
    top: 0;
  }
  .menu_text h5 span i{
    position: relative;
    left: -4px;
    font-size: 12px;
  }
  .menu_text p{
    height: 137px;
    overflow: hidden;
    padding-bottom: 33px;
    line-height: 26px;
    text-align: left;
  }
  .menu_text p a{
    color: #666;
    display: inline-block;
    margin-right: 13px;
    white-space: nowrap;
    float: left;
  }
  .menu_right{
    float: left;
    width: 253px;
    border-left: 1px solid #f4f4f4;
    position: relative;
    height: 498px;
    padding-top: 20px;
  }
  .menu_right h3{
    line-height: 18px;
    color: #333;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
  }
  .menu_card img{
    width: 98px;
    height: 97px;
  }
  .menu_card h3{
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    overflow: hidden;
    font-weight: 400;
    color: #999;
  }
  .menu_card .menu_card_text:hover h3{
    color: #ff5000;
  }
  #menus{
    width: 190px;
    height: 518px;
    position: relative;
    border: 1px solid #ff5000;
    border-top: none;
    padding-top: 5px;
    padding-bottom: 3px;
  }
  #menus ul{
    margin: 0;
    padding: 0;
  }
  #menus li{
    font-size: 14px;
    font-weight: 400;
    color: #666;
    list-style: none;
    height: 32px;
    line-height: 32px;
    background-color: white;
      overflow: hidden;
  }
  #menus li > i{
    right: 10px;
    font-size: 12px;
  }
  #menus li:hover{
    background-color: #ffe4dc;
  }
  #menus .menu_title{
    font-size: 14px;
    color: #626262;
    text-decoration: none;
  }
  #menus .menu_title:hover{
    text-decoration: underline;
    color: #FF5000;
  }
  #menus > ul > li > .menu1{
    position: absolute;
    left: 189px;
    top: 0;
    padding: 0 0 0 18px;
    border: 2px solid #F94A14;
    background-color: #fff;
    height: 100%;
    width: 692px;
    font-size: 12px;
    display: none;
    z-index: 12;
  }
  #menus > ul > li:hover > .menu1{
    display: block;
  }
  /*轮播图*/
  .lunbo{
    margin: 10px 0;
  }
  .el-carousel img {
    width: 100%;
    height: 100%;
  }
  /*广告*/
  .Advertisement img{
    width: 981px;
    height: 75px;
    margin-bottom: -5px;
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
  /*爆料王*/
  .king{
    margin-top: 10px;
  }
  .king .king_l{
    width: 840px;
    height: 290px;
    float: left;
  }
  .king .king_l h3{
    position: relative;
    text-align: left;
    padding-left: 32px;
    margin-top: 5px;
    line-height: 48px;
    font-size: 20px;
    color: #AD45Df;
    background-color: #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
  }
  .king .king_l h3:before{
    content: '';
    position: absolute;
    width: 4px;
    height: 16px;
    top: 16px;
    left: 20px;
    background: #8558d6;
  }
  .king .king_l h3 em{
    font-style: normal;
  }
  .king .king_l .king_list1{
    width: 280px;
    border: 1px solid transparent;
    border-right: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    float: left;
    height: 234px;
  }
  .king .king_l .border{
    border-left: 1px solid #f4f4f4;
  }
  .king .king_l .king_list1:hover ,.king .king_r:hover{
    border: 1px solid #ff5000;
    z-index: 5;
  }
  .king .king_l .king_list1 .king_list_t{
    padding-left: 20px;
  }
  .king .king_l .king_list1 .king_list_t h4{
    text-align: left;
    margin-top: 27px;
    font-size: 18px;
    color: #333;
    line-height: 26px;
    height: 26px;
    font-weight: normal;
  }
  .king .king_l .king_list1 .king_list_t p{
    color: #999;
    text-align: left;
    line-height: 22px;
    height: 22px;
    overflow: hidden;
  }
  .king .king_l .king_list1 .king_list_img{
    margin-top: 12px;
    padding-left: 16px;
  }
  .king .king_l .king_list1 .king_list_img a{
    margin-left: 2px;
    float: left;
    display: inline;
  }
  .king .king_l .king_list1 .king_list_img a img{
    width: 120px;
    height: 120px;
    display: block;
    border: 0;
  }
  .king .king_r{
    float: right;
    width: 340px;
    height: 290px;
    border: 1px solid #f4f4f4;
    overflow: hidden;
    padding: 20px;

  }
  .king .king_r a,.king .king_r a img{
    width: 300px;
    height: 250px;
  }
  /*好物推荐*/
  .pagehead{
    margin-top: 10px;
    background-color: #f4f4f4;
    height: 56px;
  }
  .pagehead h3{
    position: relative;
    float: left;
    height: 22px;
    line-height: 22px;
    margin: 17px 18px;
    font-size: 20px;
    color: #ff242d;
  }
  .pagehead h3:before{
    content: "";
    position: relative;
    float: left;
    top: 4px;
    width: 4px;
    height: 16px;
    line-height: 56px;
    background: linear-gradient(to bottom, #ff7436, #ff0000);
    margin-right: 7px;
  }
  /*好物推荐卡片*/
  .cards{
    height: 632px;
    margin-left: 1px;
    list-style: none;
  }
  .cards .qqq{
    float: left;
    width: 238px;
    position: relative;
    padding: 20px;
    border: 1px solid #f4f4f4;
    margin: -1px 0 0 -1px;
  }
  .qqq .tu{
    display: block;
    overflow: hidden;
    vertical-align: middle;
    text-align: center;
    font-size: 0;
    position: relative;
  }
  .qqq .tu img{
    width: 197px;
    height: 197px;
  }
  .qqq .baoyou{
    display: block;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
    margin: 8px 0;
    color: #666;
    font-size: 14px;
  }
  .qqq:hover {
    border: 1px solid #ff5000;
    z-index: 1;
  }
  .qqq .line_1{
    height: 22px;
    line-height: 22px;
    overflow: hidden;
  }
  .qqq .line_1 .now_money{
    color: #ff5000;
    float: left;
    margin-right: 3px;
  }
  .qqq .line_1 .now_money em {
    font-size: 22px;
    margin-left: 2px;
    font-style: normal;
  }
  .qqq .line_1 .sales{
    color: #999;
    float: right;
    display: block;
    margin-top: 3px;
  }
  .qqq .line_1 .sales em{
    color: #999;
    font-family: arial;
  }




  /*END标识*/
  .end{
    height: 50px;
    background: #f4f4f4;
    position: relative;
  }
  .end i{
    display: inline;
    position: absolute;
    text-align: center;
    color: #ccccd0;
    left: 50%;
    width: 84px;
    line-height: 20px;
    font-size: 18px;
    margin-left: -42px;
    font-style: normal;
    top: 20px;
  }
  .end i:before{
    left: -70px;
  }
  .end i:after{
    right: -70px;
  }
  .end i:before,.end i:after{
    content: ' ';
    position: absolute;
    height: 0;
    line-height: 0;
    border-top: 1px solid #e6e6e6;
    width: 60px;
    top: 50%;
  }
  /*各类服务信息*/
  .layer .layer1{
    background-color: #f4f4f4;
  }
  .layer .layer1 .layer_list{
    padding: 30px 0 20px 0;
  }
  .layer .layer1 .layer_list .layer_list1{
    float: left;
    margin-right: -1px;
    width: 25%;
  }
  .layer .layer1 .layer_list .layer_list1 h4{
    font-size: 16px;
   text-align: left;
    line-height: 48px;
  }
  .layer .layer1 .layer_list .layer_list1 ul{
    list-style: none;
    height: 42px;
  }
  .layer .layer1 .layer_list .layer_list1 ul li{
    display: inline-block;
    margin-right: 10px;
    width: auto;
    line-height: 21px;
    float: left;
  }
  .layer .layer1 .layer_list .layer_list1 ul li a{
    color: #999;
  }
  .layer .layer1 .layer_list .layer_list1 ul li a:hover{
    color: #F40;
  }
</style>
