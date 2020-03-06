import r from '../../services/request.js'

import {
  POP,
  NEW,
  SELL
} from '../../common/const.js'

const titleTypes = [POP, NEW, SELL]

Page({
  data: {
    banners: {},
    bannerImages: {},
    recommends: {},
    titles: ['流行', '新款', '精选'],
    goods: {
      [titleTypes[0]]: { page: 1, list: [] },
      [titleTypes[1]]: { page: 1, list: [] },
      [titleTypes[2]]: { page: 1, list: [] },
    },
    currentType: titleTypes[0],
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  onLoad: function (options) {
    this._getData()
  },

  // 获取数据
  _getData() {
    this._getMultiData()
    this._getGoodsData(titleTypes[0])
    this._getGoodsData(titleTypes[1])
    this._getGoodsData(titleTypes[2])
  },

  _getMultiData() {
    r.getMultiData().then(res => {
      const banners = res.data.data.banner.list
      const images = banners.map(item => {
        return item.image
      })

      this.setData({
        banners: banners,
        bannerImages: images,
        recommends: res.data.data.recommend.list
      })
    })
  },

  _getGoodsData(type) {
    const page = this.data.goods[type].page;
    console.log('开始请求 ' + type + ' 第 ' + page + ' 页的数据')

    r.getMovieList(page).then(res => {
      const list = res.data.data;
      const all = [];

      //取出有效数据
      for(let i=0;i<list.length;i++) {
        const item = list[i]
        if (item.title !== undefined) {
          all.push(item)
        }
      }
      //将数据分为三份，根据类型选择数据
      var j = 0;
      for (let i=0;i<titleTypes.length;i++) {
        if (type === titleTypes[i]) {
          j = i
          break
        }
      }
      //更改数据
      const goods = this.data.goods;
      goods[type].page += 1;

      for (let i=0;i<all.length;i++) {
        if ((i%3) == j) {
          goods[type].list.push(all[i])
        }
      }

      this.setData({
        goods: goods
      })
    })
  },
  
  handleTapClick(event) {
    this.setData({
      currentType: titleTypes[event.detail.index]
    })
  },
  handleSwiperTap(event) {
    //点击banner跳转到对应的详情页
    const index = event.detail.index
    const item = this.data.banners[index]
    this._navigateToSecond(item)
  },
  handleRecommendTap(event) {
    //点击banner跳转到对应的详情页
    const index = event.detail.index
    const item = this.data.recommends[index]
    this._navigateToSecond(item)
  },
  _navigateToSecond(item) {
    const image = item.image
    const title = item.title
    const url = '/pages/common/second/second?url=' + image + '&title=' + title

    wx.navigateTo({
      url: url,
    })
  },

  handleImageLoad() {
    //监听到recommend图片加载完成，更新tab-control高度
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },

  onReachBottom() {
    //监听页面滚动到底部，加载下一页数据
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(options) {
    const scrollTop = options.scrollTop

    //显示back-top
    const isShow = scrollTop > 1000;
    if (isShow !== this.data.showBackTop) {
      this.setData({
        showBackTop: isShow
      })
    }

    //更新tab-control位置
    const isFixed = scrollTop >= this.data.tabScrollTop;
    if (isFixed !== this.data.isTabFixed) {
      this.setData({
        isTabFixed: isFixed
      })
    }
  }
})