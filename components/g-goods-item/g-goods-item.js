// components/g-goods-item/g-goods-item.js
Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  methods: {
    itemClick(e) {
      const iid = this.properties.item.id
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
