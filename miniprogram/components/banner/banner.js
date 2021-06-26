// components/banner/banner.js
// 组件Component
Component ({

  properties: {
    swiperArr: {
      // 定义类型
      type: Array,
      // 定义默认值
      value: []
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    interval: 2000,
    // 轮播时间
    duration: 500,
    // 轮播图当前值，当这个值跟索引值对应上时，就是当前值
    activeNum: 0,

  },

  // 组件里，方法要写在methods中 
  methods: {
     // 轮播指示器
     swiperChange(e) {
      // 轮播当前项目
      let current = e.detail.current
      this.setData({
        activeNum: current
      })
    }
  }

})