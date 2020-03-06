Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    isLoad: false
  },
  methods: {
    handleImageLoad() {
      if (!this.data.isLoad) {
        this.data.isLoad = true
        this.triggerEvent('imageload')
      }
    },
    handleImageClick(e) {
      const index = e.currentTarget.dataset.index;
      console.log('点击了第 ' + index + ' 个 Recommend')
      this.triggerEvent('imagetap', { index })
    }
  }
})
