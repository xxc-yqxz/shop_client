module.exports = {
    lintOnSave: false, // 关闭ESLint的规则检查
    // lintOnSave: 'warning', // 输出提示错误, 但项目继续运行

    devServer: {    // 只用于开发环境
        proxy: {
            '/api': {   // 只对请求路由以"/api"开头的路由进行代理转发
                target: 'http://gmall.atguigu.cn/',    // 转发的目标url
                changeOrigin: 'true',    // 支持跨域 -> 避免发生http转发到https发生错误
                // pathRewrite: { '^api': ''} //因为后台接口都带api，所以此条不可写
            }
        }
    }
}

