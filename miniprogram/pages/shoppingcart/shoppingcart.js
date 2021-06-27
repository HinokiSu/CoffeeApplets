// pages/shoppingcart/shoppingcart.js
import { getSetting, chooseAddress, openSetting, showModal ,showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 购物车中的数据
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },


  // 获取缓存中的数据
  onShow() {
    // 获取缓存中的购物车数据
    const cart_data = wx.getStorageSync('cart') || [];
    this.setData({
      cart: cart_data
    });
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

  // 点击结算
  async handlePay() {
    // 跳转到支付页面
    wx.navigateTo({
      url: '/pages/pay/pay',
    });
  }

})