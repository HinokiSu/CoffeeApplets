// pages/mypage/mypage.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimage: "images/mypage/topimage/go_member_bg.png",
    username:"Carson",
    selfimage:"images/mypage/topimage/selfphoto.jpg",
    iamge_level1:"/images/mypage/icon/level1.png",
    arrow_point:"/images/mypage/icon/icon_arrow.png",
    power_Arr:[
      {id: 0, imagePower:"/images/mypage/icon/me_icon_points.png", value: 0, imageText:"积分商城"},
      {id: 1, imagePower:"/images/mypage/icon/me_icon_quan.png", value: 0, imageText:"优惠券"},
      {id: 2, imagePower:"/images/mypage/icon/me_icon_wallet.png", value: 0, imageText:"钱包"}
    ]

  }
 
})