// components/g-swiper/g-swiper.js
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
    }
  }
})
