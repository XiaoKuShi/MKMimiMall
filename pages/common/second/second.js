Page({
  data: {
    url: ''
  },

  onLoad: function (options) {
    console.log(options)
    
    wx.setNavigationBarTitle({
      title: options.title || ''
    })

    this.setData({
      url: options.url || ''
    })
  }
})