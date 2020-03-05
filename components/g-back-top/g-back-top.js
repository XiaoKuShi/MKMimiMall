Component({
  properties: {

  },
  methods: {
    handleBackTop() {
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
