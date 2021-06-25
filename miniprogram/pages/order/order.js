// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentData : 0,
    sendbackimage:"/images/order/icon/order_icon_talk.png",
    order_Arr:[
      {id:0,location:"玫瑰天街店",date:"2021-06-24",datetime:"14:54:50",
      productimage:[{id:0,productimage:"/images/test_product/csht_nt/sight.jpg"},
      {id:1,productimage:"/images/test_product/ice_hyzs_nt/sight.jpg"}
      ],
      orderstate:"已完成",paypal:"21",sum:"3"},
      {id:1,location:"泉屋百货店",date:"2021-05-11",datetime:"14:00:50", productimage:[
      {id:0,productimage:"/images/test_product/yn_sy_nt/sight.jpg"},
      {id:1,productimage:"/images/test_product/yqbc_cf/sight.jpg"}],orderstate:"已完成",paypal:"11",sum:"2"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
 //获取当前滑块的index
 bindchange:function(e){
  const that  = this;
  that.setData({
    currentData: e.detail.current
  })
},


 //点击切换，滑块index赋值
 checkCurrent:function(e){
  const that = this;

  if (that.data.currentData === e.target.dataset.current){
      return false;
  }else{

    that.setData({
      currentData: e.target.dataset.current
    })
  }
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})