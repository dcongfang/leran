//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/index';
Page({
  data: {
    navData: [],
    currentTab: 1,
    scrollLeft: 0,
    isLoading: true,
    address: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      this.requestCart();
  },
  switchNav(event) {
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    const info = wx.getSystemInfoSync();
    const windowWidth = info.windowWidth;
    const perNavWidth = windowWidth / 8;
    this.setData({
       cart,
       currentTab: cur,
       scrollLeft: (cur - 1) * perNavWidth
    })
  },
  requestCart() {
    util.request({
       url: ''
    }).then((res) =>{
      this.setData({
        navData: res.data.navData
      })
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
