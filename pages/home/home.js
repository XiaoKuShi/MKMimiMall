import r from '../../services/request.js'

Page({
  data: {
    banners: {},
    recommends: {}
  },
  onLoad: function (options) {
    //request data
    r.getMultiData().then(res => {
      this.setData({
        banners: res.data.data.banner.list,
        recommends: res.data.data.recommend.list
      })
    })
  }
})