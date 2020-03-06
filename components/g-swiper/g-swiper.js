// components/g-swiper/g-swiper.js
Component({
  properties: {
    images: {
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
      console.log('点击了第 ' + index + ' 个 Banner')
      this.triggerEvent('imagetap', {index})
    }
  }
})
