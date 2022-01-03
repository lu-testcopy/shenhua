module.exports = {
  devServer: {
    port: '8081',
    proxy: {
      '/api': {
        target: 'https://apis.map.qq.com/ws/location/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/sohu': {
        target: 'http://pv.sohu.com/cityjson',
        changeOrigin: true,
        pathRewrite: {
          '^/sohu': ''
        }   
      }
    }
  }
}