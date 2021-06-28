// pages/order/order.js
// 初始话数据库
const db=wx.cloud.database()

//获取当前系统日期和时间
var util = require('../../utils/util'); 
var datetime=util.getDate()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 订单数组
    order: [],

  },

  /* 
    加载页面，即同时从数据库中拉取订单信息，当前页面显示5条，
    下方设置区域按钮，点击继续加载5条，以此类推
  */
   getData() {
    let that = this;
    // 从数据库中查找5条数据，
    db.collection('order_list').limit(10).orderBy('order_date', 'desc').get({
      success(res){
        console.log('获取成功',res);
        // 将数据写入data中
        that.setData({
          order: res.data
        })
      },
      fail(res) {
        console.log('请求失败', res);
      }
    })
    // console.log('!!' + this.data.order);
   },

  onShow: function (options) {
    this.getData();
  },
})