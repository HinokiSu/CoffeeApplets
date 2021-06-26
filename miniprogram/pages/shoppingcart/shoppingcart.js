// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 购物车中的数据
    cart: []
  },

  // 获取缓存中的数据
  onShow() {
    // 获取缓存中的购物车数据
    const cart = wx.getStorageSync('cart');
  }


})