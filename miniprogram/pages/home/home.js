// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArr: [
      "/images/banner/banner_1.gif",
      "/images/banner/banner_2.gif",
      "/images/banner/banner_3.gif"
    ],
    // 购买方式
    buywayArr: [
      {imgSrc: "/images/home/button/home_icon_ziqu1.png", imgTxt: "门店自取"},
      {imgSrc: "/images/home/button/home_icon_waimai1.png", imgTxt: "外卖"}
    ]
  },

  // 跳转页面
  /*
   * 未实现两个按钮未分别跳转到相应的页面 ：'门店自取'->点单， '外卖'-> '收货地址'
   */
  goPage() {
    // 跳转到的页面
    wx.switchTab({
      url: '/pages/menu/menu',
    })
  }

  
})