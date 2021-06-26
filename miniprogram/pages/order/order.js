// pages/order/order.js
const db=wx.cloud.database()
var that=this;
//获取当前系统日期和时间
var util = require('../../utils/util'); //参数是util.js所在的路径
var datetime=util.getDate()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    sendbackimage:"/images/order/icon/order_icon_talk.png",
    //数据库信息数组
    dataObj:[],
    count:[],
    currenTime:""

  },

  getNumber(){
    
  },
  
  getData(){
    // db.collection("purchase_detail").doc("b00064a760d6e4de22d744c55eeed1be").get({       //获取数据库某一个id的信息
    //   success:res=>{
    //      console.log(res)
    //      this.setData({
    //        dataObj:res.data
    //      })
    
    // db.collection("purchase_detail").where({      //获取数据库中location属性为“玫瑰天街店”的记录
    //   location:"玫瑰天街店"
    // }).get({
    //     success:res=>{
    //      console.log(res)
    //      that.setData({
    //        dataObj:res.data
    //      })
    // }
    // })
    
       
    
    db.collection("purchase_detail").get().then(res=>{      //获取数据库中的所有记录
      this.setData({
        dataObj:res.data
      })
    })

    db.collection('purchase_detail').where({
      datetime: this.datetime
    }).count().then(res => {
      console.log(datetime)
      console.log("今日数量",res.total)
      this.setData({
        count:res.total
      })
    })

    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }


})