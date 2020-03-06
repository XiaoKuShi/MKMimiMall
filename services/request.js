import network from './network.js'

const baseURL = 'http://123.207.32.32:8000'

export default {
  getUrl(url) {
    return network({ url: url})
  },
  
  getMultiData() {
    return network({ url: baseURL + '/home/multidata' })
  },

  getGoodsData(type, page) {
    return network({
      url: baseURL + 'home/data',
      data: {
        type: type,
        page: page
      }
    })
  },

  getMovieList(page) {
    // http://ios.zmzapi.com/index.php?accesskey=519f9cab85c8059d17544947k361a827&client=1&g=api/v3&m=index&a=article_list&page=0&token=edc3c80aed456c1266237e555b5bf218&uid=5704761
    return network({
      url: 'http://ios.zmzapi.com/index.php',
      data: {
        accesskey: '519f9cab85c8059d17544947k361a827',
        client: '1',
        g: 'api/v3',
        m: 'index',
        a: 'article_list',
        page : page,
        token: 'edc3c80aed456c1266237e555b5bf218',
        uid: '5704761'
      }
    })
  }
}