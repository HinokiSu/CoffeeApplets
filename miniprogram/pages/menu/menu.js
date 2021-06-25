// pages/menu/menu.js
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
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "生椰拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "陨石拿铁"
          },
          {
            "imgSrc": "/images/menu/products/ice_houru_nt/sight.jpg",
            "imgDesc": "冰厚乳拿铁"
          },
        ]
      },
      {
        "id": 1,
        "title": "生椰家族",
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "椰青冰萃咖啡"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "生椰拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "生椰拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "陨石生椰拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "抹茶好喝椰"
          },
        ]
      },
      {
        "id": 2,
        "title": "夏日冰咖",
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "冰厚乳拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "热恋蜜瓜厚乳拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "热恋蜜瓜气泡美式"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "西柚冰萃咖啡"
          },
        ]
      },
      {
        "id": 3,
        "title": "瑞纳冰",
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "哈斯牛油果瑞纳冰"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "夏日桃桃冰"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "冰镇杨梅瑞纳冰"
          }
        ]
      },
      {
        "id": 4,
        "title": "大师咖啡",
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "标准美式"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "加浓美式"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "焦糖标准美式"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "精粹澳瑞白"
          }
        ]
      },
      {
        "id": 5,
        "title": "经典拿铁",
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "厚乳拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "陨石拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "香草拿铁"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "榛香燕麦拿铁"
          }
        ]
      },
      {
        "id": 6,
        "title": "轻乳好茶",
        "subArr": [{
          "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
          "imgDesc": "满庭芳·茉莉轻乳茶"
        }]
      },
      {
        "id": 7,
        "title": "果茶家族",
        "subArr": [{
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "冰山杨梅桃"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "多肉杨梅"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "芒椰糯米饭"
          },
          {
            "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
            "imgDesc": "多肉荔枝"
          }
        ]
      },
      {
        "id": 8,
        "title": "制冰小食",
        "subArr": [{
          "imgSrc": "/images/menu/products/sy_nt/sight.jpg",
          "imgDesc": "冰山杨梅脆筒"
        }]
      },
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
  }
})