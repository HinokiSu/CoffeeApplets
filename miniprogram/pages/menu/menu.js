// pages/menu/menu.js
Page({

  data: {
    // 商品对象数据结构
    /*
      商品ID goods_id | 商品名称 goods_name |  商品价格 goods_price | 商品缩略图 imgSrc 
    */

    // banner的轮播图数组
    swiperArr: [
      "/images/banner/menu_banner_1.jpg",
      "/images/banner/menu_banner_2.jpg",
      "/images/banner/menu_banner_3.jpg"
    ],

    // 商品数组
    //  商品类别ID cat_id | 商品类别名称 cat_title | 商品数组 goodsArr
    productArr: [
      {
        "cat_id": 0,
        "cat_title": "人气咖啡Top",
        "goodsArr": [
            { 
              goods_id: "1",
              goods_name:"冲绳黑糖拿铁",
              goods_price:"14",
              imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/csht_nt/sight.jpg" 
            },
            {
              goods_id: "2",
              goods_name:"冰厚乳拿铁",
              goods_price:"13",
              imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ice_hr_nt/sight.jpg"
            },
            {
              goods_id: "3",
              goods_name:"焦糖拿铁",
              goods_price:"15",
              imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jt_nt/sight.jpg"
              
            },
            {
              goods_id: "4",
              goods_name:"标准美式",
              goods_price:"10",
              imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/bz_ms/sight.jpg"
            }
          ]
        },
        {
        "cat_id": 1,
        "cat_title": "生椰家族",
        "goodsArr": [ 
          {
            goods_id: "5",
            goods_name:"云南.生椰拿铁",
            goods_price:"14",
            imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/yn_sy_nt/sight.jpg"  
          },
          {
            goods_id: "6",
            goods_name:"陨石生椰拿铁",
            goods_price:"13",
            imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/yssy_nt/sight.jpg"      
          }
        ]
      },
      {
        "cat_id": 2,
        "cat_title": "夏日冰咖",
        "goodsArr": [ 
          {
            goods_id: "7",
            goods_name:"西柚冰萃咖啡",
            goods_price:"9",            
            imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/xybc_kf/sight.jpg"
          }
        ]
     },
    {
      "cat_id": 3,
      "cat_title": "瑞纳冰",
      "goodsArr": [
        {
          goods_id: "8",
          goods_name:"陨石拿铁瑞纳冰",
          goods_price:"10",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ysnt_rnb/sight.jpg"
        },
        {
          goods_id: "9",
          goods_name:"椰子OK瑞纳冰",
          goods_price:"11",
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/yzok_rnb/sight.jpg"
        }
      ]
    },
    {
      "cat_id": 4,
      "cat_title": "大师咖啡",
      "goodsArr": [
        {
          goods_id: "10",
          goods_name:"冰海盐芝士拿铁",
          goods_price:"15",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ice_hyzs_nt/sight.jpg",   
        },
        {
          goods_id: "11",
          goods_name:"冰桃桃厚乳拿铁",
          goods_price:"15",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ice_tthr_nt/sight.jpg",
         
        },
        {
          goods_id: "12",
          goods_name:"姜饼风味拿铁",
          goods_price:"14",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jbr_nt/sight.jpg",
        },
        {
          goods_id: "13",
          goods_name:"焦糖标准美式",
          goods_price:"10",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jtbz_ms/sight.jpg",   
        },
        {
          goods_id: "14",
          goods_name:"摩卡",
          goods_price:"12",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/mk/sight.jpg",
        },
        {
          goods_id: "15",
          goods_name:"桃桃燕麦拿铁",
          goods_price:"13",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ttym_nt/sight.jpg",    
        },
        {
          goods_id: "16",
          goods_name:"云南红蜜·澳瑞白",
          goods_price:"16",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ynhm_arb/sight.jpg", 
        },
      ]
    },
    {
      "cat_id": 5,
      "cat_title": "经典拿铁",
      "goodsArr": [ {
        goods_id: "17",
        goods_name:"榛果拿铁",
        goods_price:"10",        
        imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/zg_nt/sight.jpg",        
        },
        {
          goods_id: "18",
          goods_name:"焦糖拿铁",
          goods_price:"11",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jt_nt/sight.jpg",          
        },
        {
          goods_id: "18",
          goods_name:"卡布奇诺",
          goods_price:"13",          
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/kbqn/sight.jpg",    
        }
      ]
    }
  ],

    //左侧的Id
    leftId: 'left0',
    // 左侧当前项
    leftActiveNum: 0,
    // 右侧的Id
    rightId: 'right0',
    // 右侧高度的数组
    heightArr: []
  },

  GoodsInfo: {},

  // 获取每个区块的高度(操作dom),声明周期
  onReady() {
    let _this = this;
    setTimeout(() => {
      let initArr = [0];
      let initNum = 0;
      // 创建结点选择器
      const query = wx.createSelectorQuery()
      query.selectAll('.rightblock').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        res[0].map(val => {
          initNum += val.height; // 实现高度的累加
          initArr.push(initNum); // 将累加出来的高度push到数组中
          // console.log(initNum) // 拿到每一个的height,并且存起来
          _this.setData({
            heightArr: initArr
          })
        })
      })
    }, 300)
  },

  // 左侧点击事件
  leftClickFn(e) {
    // console.log(e.target.dataset.myid),
    this.setData({
      leftActiveNum: e.target.dataset.myid,
      leftId: 'left' + e.target.dataset.myid,
      rightId: 'right' + e.target.dataset.myid
    })
  },

  // 右侧滚动事件
  rightScrollFn(e) {
    // console.log(e.detail.scrollTop)
    let st = e.detail.scrollTop;
    let myarr = this.data.heightArr;
    for(let i=0; i<myarr.length; i++){
      if(st >= myarr[i] && st < myarr[i+1]-5){
        this.setData({
          leftId: 'left' + i,
          leftActiveNum: i
        })
        return;
      }
    }
  },

  // 点击并添加商品到购物车
  handleCartAdd(e) {
    // 获取缓存中的购物车数组
    let cart = wx.getStorageSync('cart') || [];    // || [] 转换格式, 第一次获取是空的
    // 判断商品对象是否存在于购物车数组中
    let index = cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    if(index===-1) {
      // 不存在, 第一次添加
      this.GoodsInfo.num=1;
      cart.push(this.GoodsInfo);    // 添加对象到数组中
    } else {
      // 已经存在购物车数据 执行 num++
      cart[index].num++;
    }
    console.log(this.GoodsInfo.basicInfo);
    // 弹窗提示
    wx.showToast({
      title: 'Enjoy',
      icon: 'success',
      // true 防止用户持续点击
      mask: true,
      success:(result) => {

      },
      fail: () => {},
      complete:() => {}
    });

    // 将购物车添加回缓存中
    wx.setStorageSync('cart', cart);
  },



  /*
      ！！！！  未实现功能 ！！！！
  */

  // 获取商品详细数据
  // async getGoodsDetail(goods_id) {
  //   const res = await request({url:"/goods/", data:{goods_id}});     // "" 中填写接口
  // }

})