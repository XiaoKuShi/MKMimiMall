import r from '../../services/request.js'

Page({
  data: {
    info: {},
    similars: []
  },
  onLoad: function (options) {
    r.getMovieInfo(options.iid).then(res => {
      const info = res.data.data.resource_info
      const similars = res.data.data.similar_list
      console.log(info)
      console.log(similars)
      
      this.setData({
        info: info,
        similars: similars
      })
    })
  }
})