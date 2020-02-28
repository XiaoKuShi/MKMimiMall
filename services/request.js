import network from './network.js'

const baseURL = 'http://123.207.32.32:8000'

export default {
  getMultiData() {
    return network({ url: baseURL + '/home/multidata' })
  }
}