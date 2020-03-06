Page({
  onLoad(options) {
    this.setData({
      url: options.url || ''
    })
    console.log(this.data.url)
  },

  data() {
    url: ''
  },

  handleLoad(options) {
    console.log('--load--')
    console.log(options)
  },

  handleError(options) {
    console.log('--error--')
    console.log(options)
  }
})