import r from '../../services/request.js'

Page({
  data: {
    articles: {},
    similars: []
  },
  onLoad: function (options) {
    r.getMovieInfo(options.iid).then(res => {
      const articles = res.data.data.article_list
      const similars = res.data.data.similar_list
      
      this.setData({
        articles: articles,
        similars: similars
      })
    })
  }
})