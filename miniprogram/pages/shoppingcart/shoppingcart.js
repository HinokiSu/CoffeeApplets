// pages/shoppingcart/shoppingcart.js
import { getSetting, chooseAddress, openSetting, showModal ,showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

//获取当前系统日期和时间
var util = require('../../utils/util'); //参数是util.js所在的路径
var datetime=util.getDate()
// 获取数据库引用
const db=wx.cloud.database()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 购物车中的数据
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0,
  },

  // 获取缓存中的数据
  onShow() {
    // 获取缓存中的购物车数据
    const cart_data = wx.getStorageSync('cart') || [];
    this.setData({
      cart: cart_data,
    });
    // 初次加载时，将数据写入缓冲中，避免已勾选的数据，无法计算金额和数量
    this.setCart(cart_data);
  },

  // 商品被选中
  handleItemChange(e) {
    // 获取被修改的商品的id
    const goods_id = e.currentTarget.dataset.id;
    // 获取购物车数组
    let { cart } = this.data;
    // 找到被修改的商品对象
    let index = cart.findIndex(v => v.goods_id === goods_id);
    // 选中状态取反
    cart[index].goods_checked = !cart[index].goods_checked;
    this.setCart(cart);
  },

  // 设置购物车状态的同时，重新计算底部工具栏中的数据  全选 | 总价格 | 购买数量
  setCart(cart) {
    let allChecked = true;
    // 总价格
    let totalPrice = 0;
    // 总数量
    let totalNum = 0
    cart.forEach(v => {
      if (v.goods_checked) {
        totalPrice += v.goods_num * v.goods_price;
        totalNum += v.goods_num;
      } else {
        allChecked = false;
      }
    })
    // 判断数组是否为空
    allChecked = cart.length != 0 ? allChecked : false;
    this.setData({
      cart,
      totalPrice, totalNum, allChecked
    });
    // 重新存入缓存中
    wx.setStorageSync('cart', cart);
  },

  // 商品全选功能
  handleItemAllCheck() {
    // 获取data中的数据
    let { cart, allChecked } = this.data;
    // let allChecked = this.data.allChecked;
    // let cart = this.data.cart;
    // 修改值
    allChecked = !allChecked;
    // 循环修改cart数组中的商品选中状态
    cart.forEach(v => v.goods_checked = allChecked);
    // 把修改后的值填充回data和缓存中
    this.setCart(cart);
  },

  // 商品数量的编辑功能
  async handleItemNumEdit(e) {
    // 获取传递过来的参数
    const { operation, id} = e.currentTarget.dataset;
    // 获取购物车数组
    let { cart } = this.data;
    // 找到需要修改的商品的索引
    const index = cart.findIndex(v => v.goods_id === id);
    // 判断是否要执行删除
    if(cart[index].goods_num === 1 && operation === -1) {
      // 弹窗提示
      const res = await wx.showModal({
        content: "您是否要删除?"
      });
      if(res.confirm) {
        cart.splice(index, 1);
        this.setCart(cart);   // 重新写回缓冲和data中
      } 
    } else {
      // 进行修改数量
      cart[index].goods_num += operation;
      // 重新写回缓冲和data中
      this.setCart(cart);
    }
  },

  // 点击结算，将购物车已选中的商品添加到数据库中（暂时）
  async handlePay() {
    // 待提交到数据库中的数据数组
    var sub_Arr = [];
    // 获取缓冲区的数据
    const cart_data = wx.getStorageSync('cart') || [];
    // 已勾选商品的索引数组
    var index_Arr = [];
    
    // 遍历，并找到勾选的商品
    for(let i=0; i<cart_data.length; i++) {
      if(cart_data[i].goods_checked) {
        // 已勾选的对象的索引添加到索引数组
        index_Arr.push(cart_data[i]);
        // 添加索引数组中对应商品的对象
        sub_Arr.push(cart_data[i]);
      }
    }
    // console.log(index_Arr);
    // console.log(sub_Arr);
    // ，并删除缓冲区其对应的对象
    for(var i=0; i<index_Arr.length; i++) {
      cart_data.splice(index_Arr[i], 1);
    }
    // console.log(cart_data);
    console.log(datetime);
    // 将待提交的数据插入数据库中
    db.collection('order_list').add({
      data: {
        'order_date': datetime,
        'total_num': this.data.totalNum,
        'total_price': this.data.totalPrice,
        'goods_list': sub_Arr
      },
      success:function(res) {
        console.log(res._id)
        wx.showModal({
          title: 'success',
          content: '支付成功',
          showCancel: false
        })
      }
    })
    // 重新写回缓冲
    this.setCart(cart_data);
  }

  
})