// pages/menu/menu.js
//获取当前系统日期和时间
var util = require('../../utils/util'); //参数是util.js所在的路径
var that;
var db=wx.cloud.database();
Page({

  data: {
    // banner的轮播图数组
    swiperArr: [
      "/images/banner/menu_banner_1.jpg",
      "/images/banner/menu_banner_2.jpg",
      "/images/banner/menu_banner_3.jpg"
    ],

    productArr: [{
      "id": 0,
      "title": "人气咖啡Top",
      "subArr": [
       { imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/csht_nt/sight.jpg",
       imgDesc:"冲绳黑糖拿铁",
       money:"14"
      },
      {
        imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ice_hr_nt/sight.jpg",
        imgDesc:"冰厚乳拿铁",
        money:"13"
      },
      { imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jt_nt/sight.jpg",
      imgDesc:"焦糖拿铁",
      money:"15"
    },
    {
      imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/bz_ms/sight.jpg",
      imgDesc:"标准美式",
      money:"10"
    }
      ]
    },
    {
      "id": 1,
      "title": "生椰家族",
      "subArr": [ 
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/yn_sy_nt/sight.jpg",
          imgDesc:"云南.生椰拿铁",
          money:"14"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/yssy_nt/sight.jpg",
          imgDesc:"陨石生椰拿铁",
          money:"13"
        }
      ]
    },
    {
      "id": 2,
      "title": "夏日冰咖",
      "subArr": [ 
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/xybc_kf/sight.jpg",
          imgDesc:"西柚冰萃咖啡",
          money:"9"
        }
      ]
    },
    {
      "id": 3,
      "title": "瑞纳冰",
      "subArr": [
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ysnt_rnb/sight.jpg",
          imgDesc:"陨石拿铁瑞纳冰",
          money:"10"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/yzok_rnb/sight.jpg",
          imgDesc:"椰子OK瑞纳冰",
          money:"11"
        }
      ]
    },
    {
      "id": 4,
      "title": "大师咖啡",
      "subArr": [
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ice_hyzs_nt/sight.jpg",
          imgDesc:"冰海盐芝士拿铁",
          money:"15"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ice_tthr_nt/sight.jpg",
          imgDesc:"冰桃桃厚乳拿铁",
          money:"15"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jbr_nt/sight.jpg",
          imgDesc:"姜饼风味拿铁",
          money:"14"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jtbz_ms/sight.jpg",
          imgDesc:"焦糖标准美式",
          money:"10"
        },
      
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/mk/sight.jpg",
          imgDesc:"摩卡",
          money:"12"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ttym_nt/sight.jpg",
          imgDesc:"桃桃燕麦拿铁",
          money:"13"
        },
        {
          imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/ynhm_arb/sight.jpg",
          imgDesc:"云南红蜜·澳瑞白",
          money:"16"
        },
      ]
    },
    {
      "id": 5,
      "title": "经典拿铁",
      "subArr": [ {
        imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/zg_nt/sight.jpg",
        imgDesc:"榛果拿铁",
        money:"10"
      },
      {
        imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/jt_nt/sight.jpg",
        imgDesc:"焦糖拿铁",
        money:"11"
      },
      {
        imgSrc:"cloud://coffee-6gdizycb4a945201.636f-coffee-6gdizycb4a945201-1306337290/images/menu/products/kbqn/sight.jpg",
        imgDesc:"卡布奇诺",
        money:"13"
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
    console.log(e.detail.scrollTop)
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

  //订单添加到数据库
  addOrder(orderInfo){
    wx.showLoading({                    //弹出加载提示，防止用户多次点击添加数据
      title: '数据加载中……',
      mask:true
    })
    db.collection('purchase_detail').add({
    data:{
      location:"北京店",
      proImg: "/miniprogram/images/menu/products/jt_nt/sight.jpg",
        proName:"馥芮白",
        proPrice:"20",
      datetime:util.getDate()+"    "+util.getTime(),
      test:"测试"
    }
    }).then(res=>{            //结果
      console.log(res)
      wx.hideLoading()        //运行完隐藏加载中……的提示
    })
  }

})